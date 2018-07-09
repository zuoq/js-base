### 方法一：
   ```javascript
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
   ```

   > 此方法用到了indexOf方法,js引擎在使用indexOf的时候会遍历数组直到找到目标为止，时间开销较大，无法区分字符串和数字。

   ```javascript
   const testArr = [1,2,3,4,5,'1','2',3,4,5];
   unique1(testArr);   //[1,2,3,4,5,'1','2']
   ```

### 方法二：
   ```javascript
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
   ```

   > 此方法和方法一类似；

### 方法三：
   ```javascript
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
   ```
   > 此方法引入hash表，把已经出现过的通过下标的形式存入一个object内，下标的引用要比用indexOf搜索数组快的多，而且能够区分字符串和数字。

   ```javascript
   const testArr = [1,2,3,4,5,'1','2',3,4,5];
   unique3(testArr);   //[1,2,3,4,5]
   ```


### 方法四：
   ```javascript
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
   ```
   > 此方法先利用sort方法对数组进行排序，在比较相邻元素是否相等，能够区分字符串和数字。

   ```javascript
   const testArr = [1,2,3,4,5,'1','2',3,4,5];
   unique4(testArr);   //[1, "1", 2, "2", 3, 4, 5]
   ```


* 在Chrome浏览器下测试数组长度为1000的数据耗时结果为：
  - unique1: 0.9619140625ms
  - unique2: 1.5390625ms
  - unique3: 0.633056640625ms
  - unique4: 5.705078125ms

*可见，方法三是效率最高的*



