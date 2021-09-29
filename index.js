//@ts-check
const axios = require('axios').default;
const core = require('@actions/core');
const {Bot} = require('@wireapp/bot-api');
const {MemoryEngine} = require('@wireapp/store-engine');
const {ClientType} = require('@wireapp/api-client/src/client/');

require('dotenv').config();

const {WIRE_CONVERSATION, WIRE_EMAIL, WIRE_PASSWORD, WIRE_TEXT} = process.env;

/** @type {import('@wireapp/bot-api').BotConfig} */
const config = {
  backend: 'production',
  clientType: ClientType.TEMPORARY,
  conversations: [],
  owners: [],
};

/**
 * @param {Bot} bot
 * @param {import('@wireapp/store-engine').CRUDEngine} storeEngine
 */
const loginBot = async (bot, storeEngine) => {
  await bot.start(storeEngine);
  if (bot.account) {
    const userId = bot.account.userId;
    const clientId = bot.account.clientId;
    console.info(
      `Bot is running. Backend '${config.backend}',`,
      `User ID '${userId}',`,
      `Client ID '${clientId}',`,
      `Client Type '${config.clientType}'.`,
    );
  } else {
    throw Error(
      'Bot does not have an account assigned which means it is not initialized properly.',
    );
  }

  return bot;
};

/**
 * @param {Bot} bot
 * @param {import('@wireapp/store-engine').CRUDEngine} storeEngine
 */
const startBot = async (bot, storeEngine) => {
  try {
    return await loginBot(bot, storeEngine);
  } catch (error) {
    console.error(error.label);
    throw error;
  }
};

const sendRandomGif = async (account, conversationId, query) => {
  const giphySearchResult = await account.service.giphy.getRandomGif(query, 'g');
  if (!giphySearchResult.data) {
    logger.warn(`No gif found for search query "${query}" :(`);
    return;
  }

  const {
    id,
    images: {
      downsized_large: {url: imageURL, height: imageHeight, width: imageWidth},
    },
  } = giphySearchResult.data;
  const {data: fileBuffer} = await axios.get(imageURL, {responseType: 'arraybuffer'});

  const payload = account.service.conversation.messageBuilder
    .createText({
      conversationId,
      text: `${query} • via giphy.com`,
    })
    .build();
  await account.service.conversation.send({payloadBundle: payload});

  const fileMetaDataPayload = account.service.conversation.messageBuilder.createFileMetadata({
    conversationId,
    metaData: {
      length: fileBuffer.length,
      name: `${id}.gif`,
      type: 'image/gif',
    },
  });
  await account.service.conversation.send({payloadBundle: fileMetaDataPayload});

  try {
    const filePayload = await account.service.conversation.messageBuilder.createImage({
      conversationId,
      image: {data: fileBuffer, height: Number(imageHeight), type: 'image/gif', width: Number(imageWidth)},
      messageId: fileMetaDataPayload.id,
    });
    await account.service.conversation.send({payloadBundle: filePayload});
  } catch (error) {
    console.error(`Error while sending asset: "${error.stack}"`);
    const fileAbortPayload = await account.service.conversation.messageBuilder.createFileAbort({
      conversationId,
      originalMessageId: fileMetaDataPayload.id,
      reason: 0,
    });
    await account.service.conversation.send({payloadBundle: fileAbortPayload});
  }
};

(async () => {
  const email = core.getInput('email') || WIRE_EMAIL;
  const password = core.getInput('password') || WIRE_PASSWORD;
  const conversation = core.getInput('conversation') || WIRE_CONVERSATION;

  // Mask sensitive data: https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret
  core.setSecret(email);
  core.setSecret(password);
  core.setSecret(conversation);

  const bot = new Bot({email, password}, config);
  const storeEngine = new MemoryEngine();

  try {
    await storeEngine.init('wire-github-action-bot');
  } catch (error) {
    console.error('storeEngine.init', error);
    core.setFailed(error);
  }

  try {
    await startBot(bot, storeEngine);
  } catch (error) {
    console.error('startBot', error);
    core.setFailed(error);
  }

  const text = core.getInput('send_text') || WIRE_TEXT;
  const gifQuery = core.getInput('send_gif') || '';

  try {
    if (text) {
      await bot.sendText(conversation, text);
      console.info('Text sent', text);
    }

    if (gifQuery) {
      await sendRandomGif(bot.account, conversation, gifQuery);
      console.info('Gif sent', gifQuery);
    }
  } catch (error) {
    console.error('sending', error);
    core.setFailed(error);
  } finally {
    process.exit(0);
  }
})().catch(error => core.setFailed(error));
