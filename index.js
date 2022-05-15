import './env.js';
import { Telegraf } from 'telegraf'

const bot = new Telegraf("5072101703:AAFKDUK1hpmfXnZfNm2fn_hk6caqxaRSgkk")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

console.log('test jenkings')

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))