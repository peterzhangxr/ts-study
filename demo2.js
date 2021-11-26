function foo (x, y) {
	console.log(this)
}
let obj = {}
foo.apply(obj, [2, 3])

let name = 'peter'
let str = tag`hello, 111${name}222!!!${name}333`
function tag (literals, ...placeholders) {
	console.log(literals, placeholders)
	return 'aaa'
}

console.log(str)

Promise.resolve(123).then(() => {
	throw new Error('somt')
}).catch(err => {
	console.log(err)
	return 456
}).then(res => {
	console.log(res)
}).catch(err => {
	console.log(1212)
})

function* 