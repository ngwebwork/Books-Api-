# 📚 Book API

## 📌 Description

A simple REST API built with Node.js and Express to manage books (CRUD operations).

---

## 🚀 Features

* Get all books
* Add a book
* Update a book
* Delete a book

---

## ⚙️ Setup

```bash
npm install
npm start
```

Server: [http://localhost:3000]

---

## 📮 Endpoints

* **GET**: `/book`
* **POST**: `/create`
* **PUT** `/update/:id`
* **DELETE** `/book/delete/:id`

---

## 💡 Notes

* Use `Number(req.params.id)` for ID comparison
* Use `findIndex()` for delete

---

