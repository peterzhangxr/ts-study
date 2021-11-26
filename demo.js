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
})()

Vue() // window 或者 global
const vue = new Vue() // vue new 操作符的作用  new 到底干了什么???
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
