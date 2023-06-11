'use strict'
let max = 20;
let min = 0;
const RandomMas = []
 for (let i=0; i<10; i++) {
    RandomMas[i] = Math.floor(Math.random() * (max - min)) + min
 }
 console.log("Массив:",RandomMas)
let MinMas = RandomMas[0]
let MaxMas = RandomMas[0]
let sum=0
let MinIndex=0
let MaxIndex=0
RandomMas.forEach((el, i) => {
    sum+=el
    if (el<=MinMas) {
        MinMas = el
        MinIndex=i
    }
        if (el>=MaxMas) {
            MaxMas = el
            MaxIndex=i
        }
}
)
console.log("Сумма массива:",sum)
console.log("Индекс мин:",MinIndex)
console.log("Индекс макс:",MaxIndex)
console.log("Минимальный элемент:",MinMas)
console.log("Максимальный элемент:",MaxMas)
RandomMas[MinIndex]=MaxMas
RandomMas[MaxIndex]=MinMas
console.log("Новый массив:",RandomMas)