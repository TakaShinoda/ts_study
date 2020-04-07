import { NodeRuntime } from "inspector"

let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4
let e = 1234n

let f: {
    b: number
    c?: string
    [key: number]: boolean
}

type Age = number
type Person = {
    name: string
    age: Age
}

let age: Age = 55
let driver: Person = {
    name: 'Taro',
    age: age
}

const arr1: number[] = [1,2,3]

let peson: [string, string, Number] = ['Taro', 'Suzuki', 15]

let trainFares: [number, number?][] = [[1.23], [12.2, 44], [10.50]]

const enum Language {
    English,
    Japanese,
    Russian
}

let japan = Language.Japanese

const test = null


function sumVariadic(): number {
    return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}