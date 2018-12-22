/*
 * @Author: zhuyu 
 * @Date: 2018-12-14 12:00:12 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-17 16:14:47
 */
export const debounce = function( fn, delay, immediate){
    let timeout, result;
    return function(){
        let context = this;
        let args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate){
            let callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            },delay)
            if(callNow) result = fn.apply(context, args)
        }else{
            timeout = setTimeout(function(){
                fn.apply(context,args)
            },delay);
        }
        return result;
    }
}