

//promise 超时处理
const fetch_request = (url, options) => {
   const promise = new Promise((resolve, reject) => {
       fetch(url, options)
       .then(res => res.json())
       .then(res => resolve(res))
       .then(res => reject(err))
   });
   return limit_promise(promise);
}

const limit_promise = (fetch_promise, wait = 10000) => {
    const timeout_promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            reject('请求超时');
        }, await)
    });

    const race_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);

    return race_promise;
}