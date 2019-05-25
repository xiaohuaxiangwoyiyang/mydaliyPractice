

/**
 * Options:
 *  - prefix {String} callback Function qs parameter (`_jpcallback`)
 * 
 * 
 * @param {String} url  
 * @param {Object} opts 
 * @return {Promise} promise
 */
function jsonp(url, opts = {}) {

    if(Object.prototype.toString.call(opts) !== "[object Object]") {
        opts = {}
    }

    var prefix = opts.prefix || `_jpcallback${new Date()}`;
   
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);

    return new Promise((resolve, reject) => {
        window[prefix] = (data) => {
            try {
                resolve(data);
            }catch(e) {
                reject(e);
            }finally {
                script.parentNode.removeChild(script);
            }
        }
    })
}