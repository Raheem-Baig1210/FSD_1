class Bank_Account {
  constructor(acno, bal) {
    if (acno.startsWith("IN") && acno.length == 12) {
      this.AccNo = acno;
    } else {
      throw new Error("Account number is incorrect");
    }
    if (bal >= 1000) {
      this.Avlbal = bal;
    } else {
      throw new Error("Minimum balance should be RS.1000");
    }
    arr.push(this);
  }
  deposit(amt) {
    this.Avlbal += amt;
    console.log("Amount deposited successfully...!!!");
    console.log("Updated Balance : ", this.Avlbal);
  }
  withdraw(amt) {
    if (this.Avlbal - 1000 >= amt) {
      if (amt <= this.Avlbal && (amt % 100 == 0 || amt % 200 == 0 || amt % 500 == 0 || amt % 2000 == 0)){
        this.Avlbal = this.Avlbal - amt;
        console.log("Withdrawal Successfull...!!!");
        console.log("Available Balance : ", this.Avlbal);
      } else {
        throw new Error(
          "Enter amount multiples of 100,200,500 and 2000.....!!!!"
        );
      }
    }else {
        throw new Error("Insuffucient amount or going beyond the minimum balance")
    }
  }
  transfer(amt, acno) {
    if (this.Avlbal - 1000 >= amt) {
      var n1 = true;
      arr.forEach((value) => {
        if (value.AccNo == acno) {
          this.Avlbal -= amt;
          value.Avlbal += amt;
          console.log("Amount transfer successfull ...!!!");
          console.log("Updated balance in user1 :", this.Avlbal);
          console.log("Updated balance in user2 :", value.Avlbal);
          n1 = false;
        }
      });
      if (n1) {
        throw new Error("No Such user found ....!!!");
      }
    } else {
      throw new Error("Insufficient amount in user1 account ....!!!");
    }
  }
}
function details(arr) {
  arr.forEach((value) => {
    console.log(value);
  });
}

arr = [];
new Bank_Account("IN2113513111", 2000);
new Bank_Account("IN2113513112", 3000);
new Bank_Account("IN2113513113", 4000);
new Bank_Account("IN2113513114", 1000);
console.log(arr);
arr[0].deposit(2000);
arr[1].withdraw(200);
arr[2].transfer(2000, "IN2113513114");
details(arr);
// console.log(arr);