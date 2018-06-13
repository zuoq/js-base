//浅拷贝
function shallowCopy(src) {
    let dst;
    console.log(Object.prototype.toString.call(src));
    if(Object.prototype.toString.call(src)==='[object Object]') {
        dst = {};
        for(let prop in src) {
            if(src.hasOwnProperty(prop)) {
                dst[prop] = src[prop];
            }
        }
        return dst;
    }
    if(Object.prototype.toString.call(src)==='[object Array]') {
        dst = [];
        for(let i=0;i<src.length;i++) {
            dst.push(src[i]);
        }
        return dst;
    }
    return false
}


//深拷贝
function deepCopy(obj){
    let str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj);
        newobj = JSON.parse(str);
    } else {
        for(let i in obj){
            newobj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    }
    return newobj;
}