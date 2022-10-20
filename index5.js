const sort = (obf , obf2) => {
    let result = false
    if (JSON.stringify(obf) == JSON.stringify(obf2)){
        result = true
    }
    console.log(result)
  }
  
  sort(
    {test: "asd"},
    {test: "as"}
)