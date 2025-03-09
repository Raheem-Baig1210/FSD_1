const http = require("http");
const url = require("url");

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
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL
  const pathname = parsedUrl.pathname; // Get path without query
  const query = parsedUrl.query; // Get query parameters

  console.log(`Request received: ${req.url}`);

  if (pathname.includes("welcome")) {
    res.statusCode = 200;
    res.write("Welcome to my Server!");
  } 
  else if (pathname.includes("books")) {
    res.statusCode = 200;
    
    if (query.name) { // Check if a book name is provided in the query
      const bookName = query.name.toLowerCase(); // Convert to lowercase for case-insensitive search
      const book = books.find(b => b.name.toLowerCase() === bookName);

      if (book) {
        res.write(JSON.stringify(books[1]));
      } else {
        res.statusCode = 404;
        res.write("Book not found!");
      }
    } else {
      res.write(JSON.stringify(books)); // Return all books if no name is provided
    }
  } 
  else {
    res.statusCode = 404;
    res.write("Request not found!");
  }

  res.end();
});

server.listen(5000, () => console.log("Server is Up on port 5000!"));
