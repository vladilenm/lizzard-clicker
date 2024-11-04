import { Telegraf, Markup } from "telegraf";

const token = '7124714517:AAF7SXG7Y9neu53ijd82yrOzocrq4a5gMjg'
const webAppUrl = 'https://homa-clicker-pro.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Привет! Нажми кнопку чтобы стартануть', Markup.inlineKeyboard([
            Markup.button.webApp(
                'Open mini app',
                `${webAppUrl}?ref=${ctx.payload}`
            )
        ])
    )
})

bot.launch()