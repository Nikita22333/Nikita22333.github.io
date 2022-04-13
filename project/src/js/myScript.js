"use strict"
let website=prompt("Сайт визитка-1, Сайт магазин-2, Корпоративный сайт-3");
console.log(website);
let layout=prompt("Простая-1, Адаптивная-2, Блочная-3");
console.log(layout);
let animations=prompt("Нет-1, Немного-2, Много-3");
console.log(animations);
let matrix = [
    [1500,4000,3000],
    [1800,3500,2300],
    [1400,2800,4500],
];
let arr = [];
console.log(matrix);
if (website==1){
       arr.push(matrix[0][0]);
};
if (website==2){
    arr.push(matrix[0][1])
};
if (website==3){
    arr.push(matrix[0][2])
};
if (layout==1){
       arr.push(matrix[1][0]);
};
if (layout==2){
    arr.push(matrix[1][1])
};
if (layout==3){
    arr.push(matrix[1][2])
};
if (animations==1){
       arr.push(matrix[2][0]);
};
if (animations==2){
    arr.push(matrix[2][1])
};
if (animations==3){
    arr.push(matrix[2][2])
};
console.log(arr);
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
alert(sum);
}
arraySum(arr);


