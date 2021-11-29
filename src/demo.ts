const num: number = 123
function foo (num: number): number {
	return num
}

type someType = string | number

const boolArray: boolean[] = [false, true]

const someArray: someType[] = [1, '2'] // 这样是可以的

export default num