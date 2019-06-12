import axios from 'axios'
import commonUrl from '../common/js/commonUrl.js'
// import { loadVillageId, loadUserId } from '../common/js/cache.js'
import qs from 'qs'
// 获取打卡数据
export function getClockDetail () {
  const url = `${commonUrl.apihost}index.php/home/employee/workIndex?user_id=888&areas_id=204`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 保存打卡资料
export function saveClockedData (number, checkid, address, employeeid, time) {
  const data = {
    number,
    check_id: checkid,
    address,
    employee_id: employeeid,
    time
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/employee/workSetTime`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 用过微信获得的经纬度去展示地址
export function getAddress (lng, lat) {
  const url = `${commonUrl.apihost}index.php/home/Employee/getAddress?lat=${lat}&lng=${lng}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 获取员工列表
export function getTeamList () {
  const url = `${commonUrl.apihost}index.php/home/employee/threeEmployee?user_id=885&areas_id=204`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 获取一个部门的全部人员
export function getTeamAllList (name) {
  const url = `${commonUrl.apihost}index.php/home/employee/getAllDepar?department=${name}&areas_id=204`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 员工个人详情
export function getEmployeeDetail (id) {
  const url = `${commonUrl.apihost}index.php/home/employee/getOneWork?id=${id}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 打卡统计
export function getDakaData (type, id) {
  const url = `${commonUrl.apihost}index.php/home/employee/signRecord?type=${type}&employee_id=${id}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 某一天的打卡统计
export function getDayData (id) {
  const url = `${commonUrl.apihost}index.php/home/employee/getOneSign?check_id=${id}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 一个季度某一月的打卡统计
export function getQuarterMonthData (year, month, id) {
  const url = `${commonUrl.apihost}index.php/home/employee/randMonth?year=${year}&month=${month}&employee_id=${id}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 保存图片
export function saveImages (id) {
  const data = {
    serverIds: id
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/ceshi/ceshi`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 获取查验类别
export function getCheckPublishCategory () {
  const url = `${commonUrl.apihost}index.php/home/examine/assort`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

// 点击类别获取查验列表
export function getCheckPublishList (categoryId) {
  const data = {
    category_id: categoryId,
    areas_id: 204,
    // lift_num: liftNum || 0,
    user_id: 888
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/examine/assortInfo`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 点击类查验列表获取每一项的查验内容
export function getCheckContent (categoryId, liftNum) {
  const data = {
    category_id: categoryId,
    // areas_id: loadVillageId(),
    areas_id: 204,
    lift_num: liftNum || 0,
    // user_id: loadUserId()
    user_id: 888
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/examine/lowCateInfo`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 提交每一项的查验内容
export function submitEveryCheck (categoryId, liftNum, resolvent, serverId, relatedId) {
  const data = {
    category_id: categoryId,
    // areas_id: loadVillageId(),
    areas_id: 204,
    lift_num: liftNum || 0,
    user_id: 888,
    // user_id: loadUserId(),
    resolvent: resolvent,
    serverIds: serverId,
    related_id: relatedId
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/examine/add`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 提交后重新编辑查验内容
export function editVeryCheck (everyCheckId, resolvent, serverId, img) {
  const data = {
    id: everyCheckId,
    resolvent: resolvent,
    serverIds: serverId,
    img: img
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/examine/edit`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 发布每一项查验之后的回显数据
export function getCheckEveryPublish (id) {
  const url = `${commonUrl.apihost}index.php/home/examine/detail/?id=${id}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 通过小区id获取小区的电梯编号
export function getLiftNum () {
  const url = `${commonUrl.apihost}index.php/home/examine/liftNum/?areas_id=204`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 通过选中的电梯编号获取查验的内容
export function getLiftCheckData (id, num) {
  const data = {
    id: id,
    lift_num: num,
    areas_id: 204,
    user_id: 888
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/examine/liftInfo`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 查验完成后发布整改意见
export function goPublishAllCheck (id, num, summary) {
  const data = {
    summary: summary,
    category_id: id,
    lift_num: num || 0,
    areas_id: 204,
    user_id: 888
  }
  return axios({
    method: 'POST',
    url: `${commonUrl.apihost}index.php/home/examine/addSummary`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
// 维护监理部分数据
// 列表数据
export function getWeiHuData () {
  const url = `${commonUrl.apihost}index.php/home/Supervisor/index/?areas_id=204&user_id=888`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

// 详情数据
export function getWeiHuDetail (id) {
  const url = `${commonUrl.apihost}index.php/home/Supervisor/getSuperDetail/?id=${id}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

// 评估查验部分数据
// 列表数据
export function getsortType (type) {
  const url = `${commonUrl.apihost}index.php/home/examine/newIndex`
  const data = {
    user_id: 888,
    areas_id: 204,
    type: type
  }
  return axios({
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

// 第一级详情数据(post请求)
export function getCheckList (id) {
  const url = `${commonUrl.apihost}index.php/home/examine/secondIndex`
  const data = {
    id: id,
    user_id: 888
  }
  return axios({
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

// 第二级详情数据
export function getCheckDetail (id, upid) {
  const url = `${commonUrl.apihost}index.php/home/examine/ThirdIndex/?id=${id}&up_id=${upid}`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
