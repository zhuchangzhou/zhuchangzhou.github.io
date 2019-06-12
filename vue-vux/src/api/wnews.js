import axios from 'axios'
// 房屋租售列表数据
export function getRentSaleList () {
  const url = `https://ynwx.zgwyzxw.cn/index.php/home/renthouse/index?city_id=3`
  return axios({
    method: 'GET',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.resolve(err)
  })
}
