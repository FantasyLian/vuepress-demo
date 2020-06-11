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
`let` 声明变量，用法类似 `var`, 但是声明到变量只在 `let` 命令所在到代码块内有效：
```
{
	let a = 10;
	var b = 1;
}
a // ReferenceError: a is not defined
b // 1
```
* 不存在变量提升
* 暂时性死区，（temporal dead zone，简称TDZ）
* 不允许重复声明

`const` 用来声明常量，一旦声明，其值就不能改变。
```
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: "PI" is read-only
```

### 2、变量的解构赋值
ES6允许按照一定到模式，从数组和对象中提取值，对变量进行赋值，这被成为解构（Restructuring）。
```
// 以前变量赋值，只能直接指定值。
var a = 1;
var b = 2;
var c = 3;

// ES6
var [a, b, c] = [1, 2, 3]; 		// 数组解构
a // 1,
b // 2,
c // 3,
var { foo, bar } = { foo: "aaa", bar: "bbb" };		// 对象解构
foo // "aaa"
bar // "bbb"
```

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
ES6 提供的一种异步编程解决方案, Generator 函数是一个状态机，封装了多个内部状态。
```
function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();
```
调用后返回指向内部状态的指针, 调用next()才会移向下一个状态, 参数:
```
hw.next();
// { value: 'hello', done: false }

hw.next();
// { value: 'world', done: false }

hw.next();
// { value: 'ending', done: true }

hw.next();
// { value: undefined, done: true }
```

### 15、Promise 对象
* 手写Promise实现：
```
const myPromise = new Promise((resolve, reject) => {
	// 需要执行的代码
	...
	if(/* 异步执行成功 */) {
		resolve(value)
	} else if(/* 异步执行失败 */) {
		reject(error)
	}
})

myPromise.then(value => {
	// 成功后调用，使用value值
}, error => {
	// 失败后调用，获取错误信息error
})
```
* Promise 优缺点：
	* 优点: 解决回调地狱，对异步任务写法更标准化与简洁化。
	* 缺点: 
		* 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消；
		* 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部；
		* 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
* 极简版Promise封装：
```
function promise() {
	this.msg = '';
	this.status = 'pending';
	let _this = this;
	let process = arguments[0];
	process (function() {
		_this.status = 'fulfilled';
		_this.msg = arguments[0]
	}, function() {
		_this.status = 'rejected';
		_this.msg = arguments[0];
	})
	return this;
}

promise.prototype.then = function() {
	if(this.status === 'fulfilled') {
		arguments[0](this.msg)
	} else if(this.status === 'rejected' && arguments[1]) {
		arguments[1](this.msg)
	}
}
```

### 16、异步操作和 async 函数
ES7提供了 async 函数，使得异步操作变得更加方便，async 函数是什么？一句话，async 函数就是 Generator 函数的语法糖。
用一个 Generator 函数，一次读取两个文件。
```
const fs = require('fs');

const readFile = function (fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName, function(error, data) {
			if(error) reject(error);
			resolve(data);
		});
	});
};

// Generator 函数
const gen = function* () {
	let f1 = yiled readFile('/etc/fstab');
	let f2 = yiled readFile('/etc/shells');
	console.log(f1.toString());
	console.log(f2.toString());
};
// 改写成 async 函数
const asyncReadFile = async function() {
	let f1 = await readFile('/etc/fstab');
	let f2 = await readFile('/etc/shells');
	console.log(f1.toString());
	console.log(f2.toString());
};
```
一比较就会发现，async 函数就是将 Generator 函数的星号( * )替换成 async，将 yiled 替换成 await，仅此而已。

### 17、Class 类

## TypeScript
TypeScript是微软公司开发的开源编程语言。它本质上是在 JavaScript 语言中添加了可选的静态类型和基于类的面向对象编程等新特性。