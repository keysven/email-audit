export interface TimeDisplayProps {
  datetime: string
}

const options: Intl.DateTimeFormatOptions = Object.freeze({
  hour: '2-digit',
  minute: '2-digit',
})

export default function TimeDisplay({ datetime }: TimeDisplayProps) {
  const datetimeObject = new Date(datetime)
  const time = datetimeObject.toLocaleTimeString('en-US-u-hc-h23', options)

  return <span>{time}</span>
}
