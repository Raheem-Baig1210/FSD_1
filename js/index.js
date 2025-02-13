function bill(){
    var units=260;
    var below_fif=50*2.5;
    var below_hun=50*4;
    var below_200=100*6;
    if (units <= 200){
        if(units <=50 && units >=0){
            var bill=units*2.5
            return bill
        }else if(units <=100 && units >50){
            // var a=fif();
            var c=units-50;
            var bill=c * 4;
            bill=bill+below_fif;
            return bill
        }else{
            // var a=hun();
            // var b=fif();
            var c=units - 100;
            var bill=below_fif+below_hun+(c*6);
            return bill
        }
    }else{
        // var f=fif()
        // var h=hun()
        // var two=twohun()
        var c=units-200
        bill=below_fif+below_hun+below_200+(c*8)
        // bill=c*8
        return bill
    }
    // return bill
}
// function fif(){
//     return 50*2.5;
// }
// function hun(){
//     return 50*4;
// }
// function twohun(){
//     return 100*6
// }
console.log(bill());
