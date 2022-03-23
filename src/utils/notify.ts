export function Notify(title: string, body: string, icon: string) {
  // eslint-disable-next-line no-new
  new Notification(title, { body, icon })
}