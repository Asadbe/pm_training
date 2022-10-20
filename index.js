const divideThreeAndFive = (nums) => {
    let result = false
    if (nums%3 == 0 && nums%5== 0) {
        result = true
    }
    console.log(result)
}

divideThreeAndFive(18)