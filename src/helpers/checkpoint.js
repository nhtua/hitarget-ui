import format from 'date-fns/format'

export function getCurrentCheckpoint(routine) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const result = routine.repeat[0] || null
  if (result && result.date == today)
    return result
  return null
}
