# 前端技术

## 前言
前端技术更新换代实在是太快了，从早期的 prototype、dojo、jQuery到现在的Vue、React、Angular。也就是最近几年，随着浏览器的支持，HTML5及CSS3得到了
广泛的应用。Less、Sass等Css预编译器，ES6以及TypeScript的应用也日趋成熟。

## HTML(5)

## CSS(3)

### 1、css盒模型：
* 标准模式: `box-sizing: content-box` (默认); 宽高不包括内边距和边框
* 怪异模式: `box-sizing: border-box`

### 2、常用的清除浮动的方法：
当父元素不给高度的时候，内部元素不浮动时会撑开, 而浮动的时候，父元素变成一条线, 造成塌陷。
* 额外标签法（在最后一个浮动标签后，新加一个标签，给其设置 `clear：both；`）（不推荐）
* 父元素添加 `overflow:hidden;` (触发BFC)
* 使用 `after` 伪元素清除浮动（推荐使用）
* 使用 before 和 after 双伪元素清除浮动

### 3、自适应布局
* rem, em
* vh, vw
* 百分比
* 媒体查询

## JavaScript(ES6)
ECMAScript 6是 JavaScript 语言的下一代标准，已于2015年6月正式发布。

### 1、let 和 const 命令

### 2、变量的解构赋值

### 3、字符串的扩展

### 4、正则表达式的扩展

### 5、数值的扩展

### 6、数组的扩展

### 7、函数的扩展

### 8、对象的扩展

### 9、Symbol

### 10、Proxy 和 Reflect

### 11、二进制数组

### 12、Set 和 Map 数据结构

### 13、Iterator 和 for...of 循环

### 14、Generator 函数

### 15、Promise 对象

### 16、异步操作和 async 函数

### 17、Class 类

## TypesScript
TypeScript是微软公司开发的开源编程语言。它本质上是在 JavaScript 语言中添加了可选的静态类型和基于类的面向对象编程等新特性。