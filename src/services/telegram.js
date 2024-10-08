export function useTelegram() {
  const tg = window.Telegram.WebApp
  return {
    tg,
    user: tg.initDataUnsafe?.user,
  }
}
