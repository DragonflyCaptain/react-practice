export async function request(url, options) {
  // console.log('URL______URL',url,options)
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