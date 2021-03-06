# 前端技术

## 前言

前端技术更新换代实在是太快了，从早期的 prototype、dojo、jQuery 到现在的 Vue、React、Angular。也就是最近几年，随着浏览器的支持，HTML5 及 CSS3 得到了
广泛的应用。Less、Sass 等 Css 预编译器，ES6 以及 TypeScript 的应用也日趋成熟。

## HTML(5)

## CSS(3)

### 1、css 盒模型：

- 标准模式: `box-sizing: content-box` (默认); 宽高不包括内边距和边框
- 怪异模式: `box-sizing: border-box`

### 2、常用的清除浮动的方法：

当父元素不给高度的时候，内部元素不浮动时会撑开, 而浮动的时候，父元素变成一条线, 造成塌陷。

- 额外标签法（在最后一个浮动标签后，新加一个标签，给其设置 `clear：both；`）（不推荐）
- 父元素添加 `overflow:hidden;` (触发 BFC)
- 使用 `after` 伪元素清除浮动（推荐使用）
- 使用 before 和 after 双伪元素清除浮动

### 3、自适应布局

- rem, em
- vh, vw
- 百分比
- 媒体查询

## JavaScript(ES6)

ECMAScript 6 是 JavaScript 语言的下一代标准，已于 2015 年 6 月正式发布。

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

- 不存在变量提升
- 暂时性死区，（temporal dead zone，简称 TDZ）
- 不允许重复声明

`const` 用来声明常量，一旦声明，其值就不能改变。

```
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: "PI" is read-only
```

### 2、变量的解构赋值

ES6 允许按照一定到模式，从数组和对象中提取值，对变量进行赋值，这被成为解构（Restructuring）。

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

调用后返回指向内部状态的指针, 调用 next()才会移向下一个状态, 参数:

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

- 手写 Promise 实现：

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

- Promise 优缺点：
  - 优点: 解决回调地狱，对异步任务写法更标准化与简洁化。
  - 缺点:
    - 首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消；
    - 其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部；
    - 第三，当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
- 极简版 Promise 封装：

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

ES7 提供了 async 函数，使得异步操作变得更加方便，async 函数是什么？一句话，async 函数就是 Generator 函数的语法糖。
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

一比较就会发现，async 函数就是将 Generator 函数的星号( \* )替换成 async，将 yiled 替换成 await，仅此而已。

### 17、Class 类

## TypeScript

TypeScript 是微软公司开发的开源编程语言。它本质上是在 JavaScript 语言中添加了可选的静态类型和基于类的面向对象编程等新特性。

## 其他

### MacOS 安装 MongoDB

`MongoDB Community Server 社区版下载地址： https://www.mongodb.com/try/download/community`

#### 进入 `/usr/local`

```
cd /usr/local
```

#### 下载

```
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-4.4.5.tgz
```

#### 解压

```
sudo tar -zxvf mongodb-macos-x86_64-4.4.5.tgz
```

#### 重命名为 mongodb 目录

```
sudo mv mongodb-macos-x86_64-4.4.5.tgz mongodb
```

安装完成后，我们可以把 MongoDB 的二进制命令文件目录（安装目录/bin）添加到 PATH 路径中：

```
vim ~/.bash_profile
若初次配置环境变量没有.bash_profile文件则首先创建配置文件
touch ~/.bash_profile
```

.bash_profile 中写入如下命令：

```
export PATH=/usr/local/mongodb/bin:$PATH
```

然后

```
source ~/.bash_profile
```

新建终端执行：`mongo`
然后创建数据库存储目录：
进入 `/usr/local/mongodb` 即 MongoDB 安装文件夹，创建目录

```
sudo mkdir -p /data/db
```

然后执行启动 mongodb： （注意，若不执行此命令启动 mongodb 就会如上执行 mongo 命令式一样报错 connect failed 不能连接）可以设置开机自启

```
mongod --dbpath /usr/local/mongodb/data/db
```

然后在 另一终端执行 mongo 命令后：

![image](./images/mongodb.jpg)

至此安装成功可以愉快使用了~

### 利用 node.js 的 http-server 开启本地服务：

首先电脑已经安装了 node.js，安装 http-server
npm install http-server -g
然后进入你想作为本地服务器根目录的位置，执行命令 htpp-server
启动本地服务器成功，可以使用 ctrl+c 关闭服务器

`http-server -c-1 ` （⚠️ 只输入 http-server 的话，更新了代码后，页面不会同步更新）简写 hs

可以修改服务器的监听地址以及监听的端口号

`hs <path> -a 127.0.0.1 -p 8090`
path 时目录地址，默认时 cmd 打开的目录地址，可以省略，默认时 cmd 打开的路径地址

-a 参数是监听地址

-p 参数是监听的端口

其他参数

| 作用 | 作用 |
| :-----| :---- |
| -p 或者 --port | 端口设置，默认是 8080
| -a | -a 监听地址设置默认是 0.0.0.0
| -d | 是否显示文件列表 | 默认 true
| -i | 显示自动索引 | 默认 true
| -g 或者 --gzip | 默认 false，当文件的 gzip 版本存在且请求接受 gzip 编码时，它将服务于`./public/some-file.js.gz`，而不是`./public/some-file.js`
| -e 或者 --ext | 如果没有提供默认文件扩展名(默认为 html)
| -s 或者 --silent | 禁止控制台日志信息输出
| –cors | 允许跨域资源共享
| -o | 启动服务后打开默认浏览器
| -c | 设置缓存 `cache-control max-age heade` 存留时间（以秒为单位），示例：-c10 是 10 秒，默认是 3600 秒，如果要禁用缓存就使用-c-1
| -U 或者 --utc | 使用 UTC 格式，在控制台输出时间信息
| -P 或者 --proxy | 通过一个 url 地址，代理不能通过本地解析的资源
| -S 或者 --ssl | 使用 https 协议
| -C 或者 --cert ssl | 证书文件的路径，默认是 cert.pem
| -K 或者 --key ssl | 密匙文件路径
| -h 或者 --help | 显示帮助
