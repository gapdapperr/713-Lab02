const findMax = (number: number[]) :string => {
    return Math.max(...number).toString();
}

let number: number[] = [1,2,3,4,5]; 
console.log(findMax(number));