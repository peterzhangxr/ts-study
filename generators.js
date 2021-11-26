// 惰性迭代器
function* Foo () {
	const bar = yield "foo"
	console.log(bar)
}

const foo = Foo()
console.log(foo.next())
console.log(foo.next('121212'))//121212
console.log(foo.next('33333'))//啥也不输出

