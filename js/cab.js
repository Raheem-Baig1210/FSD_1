function price(dis){
    fif=5*10;
    nxt=10*8;
    if (dis<=5){
        p=dis*10;
        return p
    }else if(dis>5 && dis <=15){
        d=dis-5;
        p=d*8;
        price=fif+p;
        return price
    }else{
        d=dis-15;
        p=d*5;
        price=fif+nxt+p;
        return price
    }
}
amount=price(12)
console.log("Amount to pay :",amount)