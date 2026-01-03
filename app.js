//telegraf
const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => {
  ctx.reply("Welcome! I am your friendly bot. How can I assist you today?");
});
bot.command("kle", (ctx) => {
  ctx.reply("KLE Command Executed!");
});
bot.command("link", (ctx) => {
  ctx.replyWithHTML(`<a>http://www.klescpdds.edu.in</a>`);
});
bot.command("location", (ctx) => {
  ctx.replyWithLocation(16.386, 75.114);
});
bot.command("meme", async (ctx) => {
  await ctx.replyWithAnimation(
    "https://media1.tenor.com/m/HVRmfQcecLMAAAAd/uithemovie-upendra.gif"
  );
});

bot.command("photo", async (ctx) => {
  await ctx.replyWithPhoto(
    "https://tse3.mm.bing.net/th/id/OIP.2oUv7Dhh-GrWFgPEccraiAHaD4?pid=Api&P=0&h=180"
  );
});

bot.command("audio", async (ctx) => {
  await ctx.replyWithAudio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
});

bot.launch();
