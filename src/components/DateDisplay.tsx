export interface DateDisplayProps {
  datetime: string
}

export default function DateDisplay({ datetime }: DateDisplayProps) {
  const datetimeObject = new Date(datetime)
  const today = new Date()

  const options: Intl.DateTimeFormatOptions = {
    year:
      datetimeObject.getFullYear() === today.getFullYear()
        ? undefined
        : '2-digit',
    month: '2-digit',
    day: '2-digit',
  }

  const date = datetimeObject.toLocaleDateString('en-US', options)

  return <span>{date}</span>
}
