// console.log("Welcome to backend!");
const http = require("http");
const { stringify } = require("querystring");

let controller = (req, res) => {
  console.log(req);
};

let books = [
  {
    id: 1,
    name: "HTML & CSS",
    price: "400",
  },
  {
    id: 2,
    name: "JavaScript",
    price: "800",
  },
  {
    id: 3,
    name: "Python",
    price: "1000"
  },
  {
    id: 4,
    name: "SQL",
    price: "200"
  },
  {
    id: 5,
    name: "Java",
    price: "500"
  }
];

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url.includes("welcome")) {
    res.statusCode = 200;
    res.write("Welcome to my Server!");
  } else if (req.url.includes("books")) {
    let a=false
    sss=req.url.toString()
    let f=req.url.split("/")
    let lastPart = sss.split("/").pop();
    if (f.length>=2){
      books.forEach((val,ind)=>{
        var b=val.id
        if(lastPart==b){
            res.statusCode = 200;
            res.write(JSON.stringify(books[ind]));
            a=true
          }
      })
      // res.write(JSON.stringify(books))
    }else if(lastPart=='' || f.length>=lastPart.toNumber()){
      res.statusCode=200;
      res.write("Book not found!");
    }
    if(a!=true){
      res.statusCode = 200;
      res.write(JSON.stringify(books))
    }
  } else {
    res.statusCode = 404;
    res.write("Request not found!");
  }
  res.end();
});
server.listen(5000, () => console.log("Server is Up!"));