const oddOrEvenNums = (nums) => {
    let result = "odd"
    if (nums%2 == 0) {
        result = "even"
    }
    console.log(result)
}

oddOrEvenNums(1)