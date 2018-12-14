/*
 * @Author: zhuyu 
 * @Date: 2018-12-14 12:00:12 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-14 18:38:10
 */
export async function debounce ( fn, delay, immediate){
    console.log('222',delay,immediate)
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

export const a = function (){
    console.log('----');
}