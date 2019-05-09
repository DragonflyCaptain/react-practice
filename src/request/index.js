import * as axios from 'axios';
/**
 *
 *  原生请求
 * @export
 * @param {*} url
 * @param {*} options
 * @returns
 */
async function request(url, options) {
  if (!window.navigator.onLine) {
    return alert('网络断开连接');
  }
  return fetch(url, options)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((e) => {
      console.log('eeeee', e);
    });
}
function parseJSON(response) {
  if (response.status === 200) {
    return response.json();
  }
  const a = document.createElement('a');
  if (response.status >= 500) {
    a.href = '#/exception/500';
    a.click();
  }
  if (response.status === 403) {
    a.href = '#/exception/403';
    a.click();
  }
  if (response.status === 404) {
    a.href = '#/exception/404';
    a.click();
  }
}


/**
 *
 *  axios请求
 * @export
 * @param {*} {method, url, query, body,}
 * @returns
 */
export async function base({method, url, query, body,}) {
  return await axios({
    method,
    url,
    timeout: 15000,
    responseType: 'json',
    data: body,
    params: query,
  });
}
export async function requestByToken({method,url,query,body,}) {
  const response = await base({method, url, query, body })
  if (response.status === 200) {
    if (response.statusText === 'OK') {
      return response.data;
    }
    const e = new Error(response.data);
    e.httpCode = response.status;
    e.response = response;
    throw e;
  }
    const e = new Error();
    e.httpCode = response.status;
    e.response = response;
    if (response.status === 401) {
      e.message = '权限不足';
    } else if (response.status === 403) {
      e.message = '登录失效,请重新登录';
    } else if (response.status === 502) {
      e.message = '系统正在维护,请稍后再试';
    } else {
      e.message = response.data;
    }
    throw e;
}

async function getRequest(url,params){
    const response = await requestByToken( {method: 'GET',url,params});
    return response;
}


export { getRequest, request }