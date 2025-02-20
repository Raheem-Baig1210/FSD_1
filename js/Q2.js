function balance(withdrawal, available_balance){
    if ((withdrawal <= available_balance) && (withdrawal %100 ==0 || withdrawal%200==0 || withdrawal%500==0 || withdrawal%2000==0)){
        c=available_balance-withdrawal;
        return c
    }else{
        if (withdrawal < available_balance){
            console.log("Enter amount multiples of 100,200,500 and 2000.....!!!!")
        } else{
            console.log("Insufficient amount....!!!!")
        }
        return available_balance
    }
}
console.log(balance(1900 , 2000));
