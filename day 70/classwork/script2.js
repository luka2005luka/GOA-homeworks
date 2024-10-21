let numbers1 = [1,2,3,4];
let doubled = manualMap(numbers,(number) => {
    return number * 2;
});
console.log(doubled);

let words = ['apple' , 'banana' , 'cherry'];
let uppercased = manualMap(words, (word) => {
    return word.toUpperCase();
});
console.log(uppercased);

let nums1 = [5,10,15];
let incremented = manualMap(nums,(number) => {
    return number + 1;
});
console.log(incremented);