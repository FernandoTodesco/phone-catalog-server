require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Rutas
app.get("/phones", (req, res) => {
  res.status(200).json({
    ok: true,
    data: [
      {
        id: 0,
        name: "iPhone 7",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        imageFileName: "IPhone_7.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 1,
        name: "iPhone 8",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        imageFileName: "IPhone_7.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 2,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        imageFileName: "IPhone_7.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
    ],
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
