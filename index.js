//@ts-check
const core = require('@actions/core');

const {Bot} = require('@wireapp/bot-api');
const {MemoryEngine} = require('@wireapp/store-engine');
const {ClientType} = require('@wireapp/api-client/dist/client/');

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

(async () => {
  const email = core.getInput('email') || WIRE_EMAIL;
  const password = core.getInput('password') || WIRE_PASSWORD;
  const conversation = core.getInput('conversation') || WIRE_CONVERSATION;
  const text = core.getInput('text') || WIRE_TEXT;
  console.info('Creating bot', email, conversation, text);
  const bot = new Bot({email, password}, config);
  const storeEngine = new MemoryEngine();
  try {
    await storeEngine.init('wire-github-action-bot');
  } catch (error) {
    console.error('init', error);
    core.setFailed(error);
  }
  try {
    await startBot(bot, storeEngine);
  } catch (error) {
    console.error('startBot', error);
    core.setFailed(error);
  }

  try {
    await bot.sendText(conversation, text);
    console.info('Message sent', text);
    process.exit(0);
  } catch (error) {
    console.error('sendText', error);
    core.setFailed(error);
  }
})().catch(error => core.setFailed(error));
