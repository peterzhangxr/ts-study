function sayHello(person: string) {
	return 'Hellow,' + person
}

console.log(sayHello('Tom'))

let num: any = 7
num = '7'

interface Person {
	readonly id?:number;
	name: string;
	age?: number;
	[propName: string]: any;
}
let tom: Person = {
	name: 'PeterXhang'
}

let fib: number[] = [1, 1, 2, 3, 5]

function sum(x: number, y: number): number {
	return x + y
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
	return x + y
}


let tuple: [string, number] = ['Tom', 25]

//自执行函数
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
const days = [Days.Sun]