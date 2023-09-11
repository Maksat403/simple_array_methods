// const friend = ["Peter", "Jhon", "Maks", [1, 2, 3, "hello"]];
// console.log(friend[1]);
// console.log(friend[3][3]);

// console.log(friend[friend.length - 1]); //? получение последнего элемента массива

// friend.push("Maksat"); //! ___пуш - добавляет в конец
// console.log(friend);

// friend.pop(); //! ____________поп - удаляет в конце
// console.log(friend);

// friend.unshift("Rabia"); //! _аншифт - добавляет в конце
// console.log(friend);

// friend.shift(); //! __________шифт - убирает в начале
// console.log(friend);

const friend = ["Peter", "Jhon", "Maks", [1, 2, 3, "hello"]];

// let onlyfrends = friend.slice(0, 3);  //! slice -  копирует данные, при этом НЕ МЕНЯЕТ исходный массив(его можно использовать со строками)
// console.log(friend);
// console.log(onlyfrends);

// friend.splice(2, 1); //!  splice - вырезает данные и при этом МЕНЯЕТ мсходный массив
// console.log(friend);

// let str = "Arrow";
// console.log(str.slice(2));

// //? split
// const date = "11/09/2023";
// let arr = date.split("/");
// console.log(arr);

// //? reverse
// let str = "Hello i'm a street photographer";
// let arr2 = str.split(" ");
// arr2.reverse();
// console.log(arr2);

// //? join

// let str2 = arr2.join(" ");
// console.log(str2);

// let hero = "Daniyar";
// let arr = hero.split("");
// arr.reverse();
// console.log(arr);
// let str = arr.join("");
// console.log(str);

// let num = [2, 7, -0, 345];
// console.log(num, "несортированный");
// let sorted = num.sort((a, b) => a - b);
// console.log(sorted, "сортированный");

const countries = ["Maldives", "USA", "Kyrgyzstan", "UAE"];
countries.sort((a, b) => a.length - b.length);
console.log(countries);
