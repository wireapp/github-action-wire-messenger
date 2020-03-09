const core = require('@actions/core');
const github = require('@actions/github');

const {Bot} = require('@wireapp/bot-api');
const {MemoryEngine} = require('@wireapp/store-engine');

require('dotenv').config();

const {WIRE_CONVERSATION, WIRE_EMAIL, WIRE_PASSWORD, WIRE_TEXT} = process.env;

const config = {
  backend: 'production',
  clientType: 'temporary',
  conversations: [],
  owners: [],
};

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

const startBot = async (bot, storeEngine) => {
  try {
    return await loginBot(bot, storeEngine);
  } catch (error) {
    console.error(error.label);
    throw error;
  }
};

(async () => {
  try {
    const email = core.getInput('email') || WIRE_EMAIL;
    const password = core.getInput('password') || WIRE_PASSWORD;
    const conversation = core.getInput('conversation') || WIRE_CONVERSATION;
    const text = core.getInput('text') || WIRE_TEXT;
    console.info('Creating bot', email, conversation, text);
    const bot = new Bot({email, password}, config);
    const storeEngine = new MemoryEngine();
    await storeEngine.init('wire-github-action-bot');
    await startBot(bot, storeEngine);
    await bot.sendText(conversation, text);
    process.exit(0);
  } catch (error) {
    core.setFailed(error);
    process.exit(1);
  }
})().catch(error => core.setFailed(error));
