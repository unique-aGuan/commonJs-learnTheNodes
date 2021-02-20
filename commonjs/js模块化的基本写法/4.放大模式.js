/* 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。 */
var module = (function() {
  function moduleFunc() {
    // 
  }
  return {
    moduleFunc
  }
})()
var module1 = (function (mod) {
  mod.m3 = function () {
    //...
  };

  return mod;
})(module);

/* 上面的代码为module1模块添加了一个新方法m3()，然后返回新的module1模块。 */
