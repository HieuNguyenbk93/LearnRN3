const timMax = (a, b,c ) => {
    let max2 =b;
    if (c > b) {
        max2 = c;
    }
    if (a > max2){
        console.log(a);
    }
    else {
        console.log(max2);
    }
}

// let language = {
//     name: 'JS',
//     getName: function(){
//         console.log(this);
//     },
//     getArrow: () => {
//         console.log(this);
//     }
// }

// console.log('Global', this,language);
// language.getName();
// language.getArrow.bind(language);

const myObj = {
    name: "Hieu",
    age: 18,
    size: {
        wei: 50,
        hei: 70,
    },
    infor: {
        add: 'abc',
        com: 'def',
    }
}

const {name, size: {wei, hei}, infor: {add, com}} = myObj;
console.log(add);

const myObj2 = {
    ...myObj,
}

myObj2.age = 20;

// console.log(myObj);
// console.log(myObj2);

const sum = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(i, ':', numbers[i]);
    }
}