function bill(units){
    var below_fif=50*2.5;
    var below_hun=50*4;
    var below_200=100*6;
    if (units <= 200){
        if(units <=50 && units >=0){
            var bill=units*2.5
            return bill
        }else if(units <=100 && units >50){
            var c=units-50;
            var bill=c * 4;
            bill=bill+below_fif;
            return bill
        }else{
            var c=units - 100;
            var bill=below_fif+below_hun+(c*6);
            return bill
        }
    }else{
        var c=units-200
        bill=below_fif+below_hun+below_200+(c*8)
        return bill
    }
}
console.log(bill(90))