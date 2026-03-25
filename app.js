const express = require("express");
const app = express();

//middle ware
app.use(express.json());

let books = [
  {
    id: "1",
    title: "Book 1",
  },
  {
    id: "2",
    title: "Book 2",
  },
  {
    id: "3",
    title: "Book 3",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Book STORE",
  });
});

// getting route
app.get("/book", (req, res) => {
  res.json(books);
});

// getting book id
app.get("/book/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book Not found",
    });
  }
});

//Creating a new book
app.post("/create", (req, res) => {
  const newBook = {
    id: `${books.length + 1}`,
    // id: `${Math.floor(Math.random() * 1000)}`,
    title: `Book ${books.length + 1}`,
    // title: `Book ${Math.floor(Math.random() * 1000)}`,
    
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "Book Added Successfully",
  });
});

//Updating a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find((data) => data.id === req.params.id);
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      message: "Book Updated",
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book Not found",
    });
  }
});

// Deleting a book
app.delete("/book/delete/:id", (req, res) => {
  const deleteData = books.findIndex((data) => data.id === req.params.id);
  if (deleteData !== -1) {
    const deleteBook = books.splice(deleteData, 1)
    res.status(200).json({
      message: "Book Deleted",
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
