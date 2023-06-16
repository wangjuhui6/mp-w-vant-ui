// 获取时间
export function getDates(date) {
  if (date) {
    return new Date(date)
  } else {
    return new Date()
  }
}

// 补0
export function zeroize(data) {
  return data > 9 ? String(data) : '0' + data
}

// 获取年月日
export function getYMD(date) {
  const newDate = getDates(date)
  const Y = newDate.getFullYear()
  const M = newDate.getMonth() + 1
  const D = newDate.getDate()
  return `${Y}-${zeroize(M)}-${zeroize(D)}`
}

// 递归
export function getTime(start, end) {
  const date = []
  date.push(getYMD(start))
  const time = getDates(start)
  const d = time.getDate()
  const startTime = getDates(time.setDate(d + 1))
  if (startTime <= getDates(end)) {
    date.push(...getTime(startTime, end))
  }
  return date
}

// 获取时间区间的每一天
export function getOneDate(start, end) {
  return getTime(start, end)
}
