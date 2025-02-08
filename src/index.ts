const max = (number:Array<number>) :string => {
    return Math.max(...number).toString();
}

console.log(max([1,2,3,4,5]));