//引用 相等
const obj = {
	a: 1
}
const obj2 = obj
obj2.a = 3
const arr = {}
arr[obj] = 1
arr[obj2] = 2
console.log(obj)
console.log(arr)

console.log(0 == "") //true
console.log(0 === "") // false
console.log("" == "0") // false

//在函数内对this关键字的访问实际上都是由函数的实际调用方式控制的，它通常被称为调用上下文。
function foo() {
	console.log(this)
}

foo()

let bar = {
	foo
}

bar.foo()

const Vue = (function () {
	function Vue () {
		console.log(this)
	}

	Vue.prototype.created = function () {
		console.log(this)
	}

	return Vue
})()//IIFE

Vue() // window 或者 global
const vue = new Vue() // vue new 操作符的作用  new 到底干了什么???
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

class Animal {
	static count = 0
	constructor () {
		Animal.count++
	}
}

const a1 = new Animal()
const a2 = new Animal()
console.log(Animal.count) // 2


var __extends = this.__extends || function(d, b) {
	for (var p in b) {
		if (b.hasOwnProperty(p))
			d[p] = b[p]
	}

	function __() {
		this.constructor = d
	}
	__.prototype = b.prototype
	d.prototype = new __()
}

let foo2 = () => {
	console.log(this)
}

foo2() // {}

function Persion(age) {
	this.age = age
	this.growOld = function() {
		//注意区分 function和箭头函数
		//箭头函数从函数体外部捕获了this的引用
		console.log(this)
		this.age++
	}
}

let persion = new Persion(1)
persion.growOld() // persion
const growOld = persion.growOld
growOld() // window global
// 相当于growOld = persion.growOld
setTimeout(persion.growOld, 1000)
setTimeout(function() {
	persion.growOld() // persion
}, 2000)
const foo3 = () => ({
	a: 1
})

console.log(foo3()) // { a: 1 }