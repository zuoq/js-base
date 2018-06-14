## 判断书否为对象

> 使用typeof方法：

```javascript
   typeof []  // object
   typeof {}  // object
   typeof function(){}  // function
```

> 需要特别注意的是**typeof null** 的返回值也是object, 但它不是object