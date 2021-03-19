//数组去重

//方法一：
function unique1(arr) {
  let n = [];
  const len = arr.length;
  for(let i=0;i<len;i++) {
    if(n.indexOf(arr[i])===-1) {
      n.push(arr[i]);
    }
  }
  return n;
}

//方法二：
function unique2(arr) {
  let n = [arr[0]];
  const len = arr.length;
  for(let i=1;i<len;i++) {
    if(arr.indexOf(arr[i])===i) {
      n.push(arr[i]);
    }
  }
  return n;
}

//方法三：
function unique3(arr) {
  let n = [], json = {};
  const len = arr.length;
  for(let i=0;i<len;i++) {
    const val = arr[i];
    if(!json[val]) {
      json[val] = true;
      n.push(val);
    }
  }
  return n;
}

//方法四：
function unique4(arr) {
  arr.sort(); // 对数组进行排序
  let n = [arr[0]];
  const len = arr.length;
  for(let i=1;i<len;i++) {
    if(arr[i]!==n[n.length-1]) {
      n.push(arr[i]);
    }
  }
  return n;
}