/*
In this case, the arrow function is a callback, which call greet after 2 sec.


function greet(name){

    console.log(`Hello, ${name}!`);

}

setTimeout(() => greet('Alice'), 2000);


//callbck handle the response when the data is fetched
function fetchData(callback){
    setTimeout(() => {
        const data = {user:'Alice', age:30};
        callback(data);
    },1000);
}

fetchData((data) => {
    console.log(`User:${data.user}, age:${data.age}`);
});

//Array method

const numbers = [1,2,3,4];
const squared = numbers.map(num=> num*num);
console.log(squared);
*/