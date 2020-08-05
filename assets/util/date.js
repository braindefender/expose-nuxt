export const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const prettyDate = (dateFrom, dateTo) => {
  const from = new Date(dateFrom)
  const to = dateTo ? new Date(dateTo) : null
  const today = new Date()

  const fromDate = from.getDate()
  const fromMonth = months[from.getMonth()]
  const fromYear = from.getFullYear()

  if (to !== null) {
    const toDate = to.getDate()
    const toMonth = months[to.getMonth()]
    const toYear = to.getFullYear()

    // есть переход через год: указываются даты с годом
    if (fromYear < toYear) {
      return `${fromDate} ${fromMonth} ${fromYear} — ${toDate} ${toMonth} ${toYear}`
    }
    // прошлые года
    if (fromYear < today.getFullYear()) {
      return `${fromDate} ${fromMonth} — ${toDate} ${toMonth} ${toYear}`
    }
    // текущий год, но есть переход через месяц
    if (from.getMonth() < to.getMonth()) {
      return `${fromDate} ${fromMonth} — ${toDate} ${toMonth}`
    }
    // текущий год, даты в пределах одного месяца
    return `${fromDate} – ${toDate} ${toMonth}`
  } else {
    // прошлые года
    if (fromYear < today.getFullYear()) {
      return `${fromDate} ${fromMonth} ${fromYear}`
    }

    return `${fromDate} ${fromMonth}`
  }
}
