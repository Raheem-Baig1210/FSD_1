var contact1 ={
    name: {
        first: "Syed",
        middle: "Syeed",
        last: "uddin"
    },
    numberOne: [
        {
            value : 3214569870,
            isPrimary : true,
            type : "Personal"

        },
        {
            value : 9874563210,
            isPrimary : false,
            type : "Work"
        }
    ],
    call: function(){
        console.log(this)
        var numberToCall = contact1.numberOne.find(function (val){
                    return val.isPrimary == false;
                });
                if (numberToCall != undefined){
                    console.log("Calling" , numberToCall.value)
                } else{
                    console.log("Primary number is not found")
                }
    }
}
contact1.call()
// console.log(contact1.number[1].value)

// function callPrimary(){
//     var numberToCall = contact1.numberOne.find(function (val){
//         return val.isPrimary
//     });
//     if (numberToCall != undefined){
//         console.log("Calling" , numberToCall.value)
//     } else{
//         console.log("Primary number is not found")
//     }
// }
// callPrimary();


// console.log(contact1);

// contact1.email="raadsfsdfsd@gmail.com"
// console.log(contact1);

// contact1.name.first="Shaik"
// console.log(contact1);


