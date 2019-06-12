export function timeFormat (time) {
  let date = new Date()
  date.setTime(time * 1000)
  let y = date.getFullYear()
  let m = toTwo(date.getMonth() + 1)
  let d = toTwo(date.getDate())
  let h = toTwo(date.getHours())
  let mm = toTwo(date.getMinutes())
  let s = toTwo(date.getSeconds())
  return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s
}

function toTwo (value) {
  if (value < 10) {
    return '0' + value
  }
  return value
}

export function getDateDiff (dateTimeStamp) {
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let week = day * 7
  let month = day * 30
  let year = month * 12

  let now = new Date().getTime()
  let diffValue = now - dateTimeStamp
  let yearC = diffValue / year
  let monthC = diffValue / month
  let weekC = diffValue / week
  let dayC = diffValue / day
  let hourC = diffValue / hour
  let minC = diffValue / minute
  let result = ''
  if (yearC >= 1) {
    result = ' ' + parseInt(yearC) + '年前'
  }
  if (minC >= 1 && minC <= 60) {
    result = ' ' + parseInt(minC) + '分钟前'
  } else if (hourC >= 1 && hourC <= 24) {
    result = ' ' + parseInt(hourC) + '小时前'
  } else if (dayC >= 1 && dayC <= 7) {
    result = ' ' + parseInt(dayC) + '天前'
  } else if (weekC >= 1 && weekC <= 4) {
    result = ' ' + parseInt(weekC) + '周前'
  } else if (monthC >= 1 && monthC <= 12) {
    result = ' ' + parseInt(monthC) + '个月前'
  } else {
    result = '刚刚发表'
  }
  return result
}

export function Format (time, fmt) {
  let date = new Date(time)
  // date.setTime(time * 1000)
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
