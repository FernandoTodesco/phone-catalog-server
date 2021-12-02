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
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
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
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
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
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 3,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 4,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 5,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 6,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 7,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 8,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
      },
      {
        id: 9,
        name: "iPhone 9",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "black",
        price: 769,
        // imageFileName: "IPhone_7.png",
        imageFileName:
          "https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-1-2.png",
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
