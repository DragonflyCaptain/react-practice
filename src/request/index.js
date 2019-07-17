import * as axios from 'axios';
/**
 *
 *  axios请求
 * @export
 * @param {*} {method, url, query, body,}
 * @returns
 */
const requestGET = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
  // return axios.get(url).then(res => {
  //   return res
  // }).catch(err => console.log(err))
}



export { requestGET }