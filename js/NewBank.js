class Bank_Account {
  constructor(nm, accno, bal) {
    if (accno.startsWith("IN") && accno.length == 12) {
      this.accno = accno;
    } else {
      throw new Error("Account number is incorrect");
    }
    this.name = nm;
    if (bal >= 1000) {
      this.Avlbal = bal;
    } else {
      throw new Error("No minimum balance");
    }
  }
}
function BankAccount() {
  arr = [
    (m1 = new Bank_Account("Raheem", "IN2113513123", 2000)),
    (m2 = new Bank_Account("Naseer", "IN1234567809", 1000)),
    (m3 = new Bank_Account("Faseeh", "IN1234567890", 3000)),
    (m4 = new Bank_Account("Kareem", "IN0987654321", 1500)),
  ];
  // console.log(arr)
  function deposit(user, dpt_amt) {
    if (arr.includes(user)) {
      user.Avlbal = user.Avlbal + dpt_amt;
      console.log("Successfully Deposited...!!!!");
      console.log("Available Amount : ", user.Avlbal);
    } else {
      console.log("Invalid user....!!!! Please Check the user again !!!!");
    }
  }
  function withdrawal(user, wd_amt) {
    if (arr.includes(user)) {
      if (wd_amt > user.Avlbal - 1000) {
        console.log("Insufficiant amount or going beyound the minimum balance");
      } else {
        if (wd_amt <= user.Avlbal && (wd_amt % 100 == 0 || wd_amt % 200 == 0 || wd_amt % 500 == 0 || wd_amt % 2000 == 0)) {
          user.Avlbal = user.Avlbal - wd_amt;
          console.log("Withdrawal Successfull...!!!");
          console.log("Available Balance : ", user.Avlbal);
        } else {
          console.log(
            "Enter amount multiples of 100,200,500 and 2000.....!!!!"
          );
        }
      }
    } else {
      console.log("Invalid user .... !!!! Please check the user again");
    }
  }
  function transfer(user1, user2, amt) {
    if (arr.includes(user1) && arr.includes(user2)) {
      if (user1.Avlbal-1000 > amt) {
        user1.Avlbal = user1.Avlbal - amt;
        user2.Avlbal = user2.Avlbal + amt;
        console.log("Amount Transfer Successfull ...!!!");
        console.log("Avalable balance in", user1.name, " is ", user1.Avlbal);
        console.log("Avalable balance in", user2.name, " is ", user2.Avlbal);
      } else {
        console.log("Insufficiant amount in user1 or going beyond the minimum balance...!!!!");
      }
    } else {
      console.log("Invalid Users ... Please recheck the users again....!!!!");
      // throw new Error("Invalid Users ... Please recheck the users again....!!!!")
    }
  }
  function New_Account(nm, accno, bal) {
    if (accno.startsWith("IN") && accno.length == 12) {
      this.accno = accno;
    } else {
      throw new Error("Account number is incorrect");
    }
    this.name = nm;
    if (bal >= 1000) {
      this.Avlbal = bal;
    } else {
      throw new Error("No minimum balance");
    }
  }
  function Acc_Details(Acc_No) {
    var chk = false;

    arr.forEach(function (value) {
      if (value.accno == Acc_No) {
        chk = true;
        console.log(value);
      } else if (value == arr.at(-1) && chk == false) {
        throw new Error("Invalid account number... Please enter the account number again ....!!!");
        // console.log("Invalid Account number... Please check account number again ...!!!")
      }
    });
  }
  console.log(arr);
  // deposit(arr[0],300);
  // withdrawal(arr[2],200);
  transfer(arr[0],arr[2],1300);
  // var a= new New_Account("Safi","IN1234587890",2000)
  // arr.push(a)
  // Acc_Details("IN1234587890")
  console.log(arr);
}
BankAccount();
