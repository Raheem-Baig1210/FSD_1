function discount(amount){
    if (amount<500){
        return amount
    }else if(amount>500 && amount<=1000){
        dis=amount-(amount*0.1);
        return dis
    }else if(amount>1000 && amount <=2000){
        dis=amount-(amount*0.2);
        return dis
    }else{
        dis=amount-(amount*0.3);
        return dis
    }
}
disc=discount(2000)
console.log("Amount to pay :",disc)