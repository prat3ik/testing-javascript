const tick = Date.now()

const getFruit = async (fruit) => {
    const fruits = {
        'apple': '🍎',
        'pineapple': '🍍',
        'peach': '🍑'
    }

    return fruits[fruit];
}

const createSmoothie = async () =>{
    const fruit1 = getFruit('apple')
    const fruit2 = getFruit('peach')
    return Promise.all([fruit1, fruit2]);
}

console.log(createSmoothie())
console.log(Date.now() - tick)