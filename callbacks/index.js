const sumOfTwoNumbers = (numOne, numTwo, callback) => {
    sum = numOne + numTwo
    callback(sum)
}


const displaySum = sum => console.log('The sum is: ', sum)

sumOfTwoNumbers(10, 20, displaySum)