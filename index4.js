const sort = (nums) => {
    let array = []
    for (let i = 0; i<nums.length;i++){
        for (let j = 0; j<nums[i].test.length;j++){
            if(!array.includes(nums[i].test[j])) {
                array.push(nums[i].test[j])
            }
        }
    }
    console.log(array.sort())
  }
  
  sort([
    {test: ['a', 'b', 'c', 'd']},
    {test: ['a', 'b', 'c']},
    {test: ['a', 'd']},
    {test: ['a', 'b', 'k', 'e', 'e']},
    ]
)