/* 使用"立即执行函数"（Immediately-Invoked Function Expression，IIFE），可以达到不暴露私有成员的目的。 */
var module1 = (function () {
  var _count = 0;
  var m1 = function () {
    //...
  };
  var m2 = function () {
    //...
  };
  return {
    m1: m1,
    m2: m2,
  };
})();

/* 使用上面的写法，外部代码无法读取内部的_count变量。 */

console.info(module1._count); //undefined

/* 函数内部的变量是不可以被在外部改变的，而返回了对象，且被引用了，就形成了一个永远不被销毁的作用域，既不会被从外部改变（但是可以被子作用域通过作用域链查找并修改），也不会影响全局。形成了最简单的单利模式。 */
