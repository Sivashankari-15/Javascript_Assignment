let genderType='female'
function printGender(){
    let colour='brown'
    if(genderType==='female')
    {
        var age =30
        let colour ='pink'
        console.log(`Colour inside if block ${colour}`)
    }
    console.log(`Colour outside if block ${colour}`)
    console.log(`Age outside if block ${age}`)
}

printGender()
console.log("Global genderType "+genderType)
genderType='Male'
console.log("After changing genderType female to Male")
printGender()
console.log("Global genderType "+genderType)
