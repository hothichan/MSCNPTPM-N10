const { Block, Blockchain } = require("./khoi");

// Khởi tạo blockchain
const foodSupplyChain = new Blockchain();

// Thêm lô sản phẩm vào blockchain
foodSupplyChain.addBlock(
  new Block(1, new Date().toISOString(), {
    batchNumber: "A123",
    productName: "Rau bắp cải",
    quantity: 100,
    productionDate: "2024-12-01",
    origin: "Đà Lạt",
  })
);

foodSupplyChain.addBlock(
  new Block(2, new Date().toISOString(), {
    batchNumber: "R567",
    productName: "Dưa chuột",
    quantity: 200,
    productionDate: "2024-12-05",
    origin: "Long An",
  })
);

foodSupplyChain.addBlock(
  new Block(3, new Date().toISOString(), {
    batchNumber: "A123",
    productName: "Cà rốt Đà Lạt",
    quantity: 150,
    productionDate: "2024-12-08",
    origin: "Lâm Đồng",
  })
);

foodSupplyChain.addBlock(
  new Block(4, new Date().toISOString(), {
    batchNumber: "H321",
    productName: "Hành tây xuất khẩu",
    quantity: 300,
    productionDate: "2024-12-10",
    origin: "Hà Nội",
  })
);

// Xuất blockchain để sử dụng trong server.js
module.exports = foodSupplyChain;
