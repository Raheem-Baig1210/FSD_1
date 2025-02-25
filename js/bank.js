// function acc(nm, acno, bal) {
//   this.name = nm;
//   if (acno) {
//     this.achno = acno;
//   } else {
//     throw new Error("Give proper account number");
//   }
//   this.avalbal = bal;
// }
// function BankAccount() {
//   arr = [
//     (m1 = new acc("Raheem", "SA2113513", 50000)),
//     (m2 = new acc("Naseer", "IN5465466", 400000)),
//     (m3 = new acc("Safi", "SA66546486", 60000)),
//     (m4 = new acc("Zain", "SA88744686", 30000)),
//   ];
// //   console.log(arr)
//   function deposit(user,dpt_amt) {
//     if (arr.includes(user)){
//     user.avalbal = user.avalbal + dpt_amt;
//     console.log("Successfully Deposited");
//     console.log("Available Amount : ", user.avalbal);
//   }else{
//     console.log("Invalid user....!!!! Please Check the user again !!!!")
//   }
// }
//   function withdrawal(user,wd_amt) {
//     if (arr.includes(user)){
//     if (wd_amt > user.avalbal - 1000) {
//       console.log("Insufficiant amount or going beyound the minimum balance");
//     } else {
//       if (wd_amt <= user.avalbal && (wd_amt % 100 == 0 || wd_amt % 200 == 0 || wd_amt % 500 == 0 || wd_amt % 2000 == 0)) {
//         c = user.avalbal - wd_amt;
//         console.log("Withdrawal Successfull...!!!")
//         user.avalbal=c
//         console.log("Available Balance : ",c)
//       } else {
//         console.log("Enter amount multiples of 100,200,500 and 2000.....!!!!");
//       }
//     }
//   }else{
//     console.log("Invalid user .... !!!! Please check the user again")
//   }
//  }
// function transfer(user1,user2,amt){
//     if (arr.includes(user1) && arr.includes(user2)){
//         if (user1.avalbal > amt){
//             user1.avalbal=user1.avalbal-amt;
//             user2.avalbal=user2.avalbal+amt;
//             console.log("Amount Transfer Successfull ..!!!")
//             console.log("Avalable balance in",user1.name," is ",user1.avalbal)
//             console.log("Avalable balance in",user2.name," is ",user2.avalbal)

//         } else{
//             console.log("Insufficiant amount in user1 ....!!!!")
//         }
//     } else{
//         console.log("Invalid Users ... Please recheck the users again....!!!!")
//         // throw new Error("Invalid Users ... Please recheck the users again....!!!!")
//     }
// }
//   console.log(arr)
//   // deposit(m1,3000);
//   // withdrawal(m2,200);
//   // transfer(m1,m2,500);
//   console.log(arr)
// }
// BankAccount();




class Bank_Account{
  constructor(accno,bal){
    if (accno.startswith("IN") && accno.lenght==12){
      this.accno=accno
    }else{
      throw new Error("")
    }
  }
}