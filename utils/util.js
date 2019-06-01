const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatMonth = date => {
  const month = date.getMonth() + 1

  return month
}

const formatDate = date =>{
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [month,day].map(formatNumber).join('/')
}

const formatDay = date => {
  const day = date.getDate()

  return day
}

module.exports = {
  formatTime: formatTime,
  formatMonth: formatMonth,
  formatDate: formatDate,
  formatDay: formatDay
}
