'use strict'
const coll = [
    {
        age: 20,
        name: "aboba"
    }, {
        age: 40,
        name: "halloha"
    }, {
        age: 30,
        name: "uyoyj"
    }
]
let MaxAge=0
let Index = 0
let coll2 = coll.map((coll, i ) => {
        if (coll.age > MaxAge) {
            MaxAge = coll.age
            Index=i
        }
    }
)
console.log("Максимальный возраст:",MaxAge,". Находится в ячейке",Index)