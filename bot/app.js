import { Telegraf, Markup } from 'telegraf'

const token = '7875155444:AAHtt-znGGNvWhkTBA8SFgE6InDRaDMkYPk'
const webAppUrl = 'https://lizard-clicker-pro.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  )
})

bot.launch()
