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
    packaging: {
      packaging_name: "Bắp cải",
      Material: "nilon",
      moisture_resistant: true
    },
  })
);

foodSupplyChain.addBlock(
  new Block(2, new Date().toISOString(), {
    batchNumber: "R567",
    productName: "Dưa",
    quantity: 200,
    productionDate: "2024-12-05",
    packaging : {
      packaging_name: "Dưa nhập khẩu",
      Material: "nilon",
      moisture_resistant: true
    },
  })
);

foodSupplyChain.addBlock(
  new Block(3, new Date().toISOString(), {
    batchNumber: "A123",
    productName: "Cà rốt",
    quantity: 150,
    productionDate: "2024-12-08",
    packaging: {
      packaging_name: "Cà rốt Đà Lạt",
      Material: "giấy",
      moisture_resistant: false,
    },
  })
);

// Thêm khối thứ 4: Lô sản phẩm "Hành tây"
foodSupplyChain.addBlock(
  new Block(4, new Date().toISOString(), {
    batchNumber: "H321",
    productName: "Hành tây",
    quantity: 300,
    productionDate: "2024-12-10",
    packaging: {
      packaging_name: "Hành tây xuất khẩu",
      Material: "nilon",
      moisture_resistant: true,
    },
  })
);

// In toàn bộ blockchain
console.log("Blockchain:");
console.log(JSON.stringify(foodSupplyChain, null, 2));

// // Truy xuất thông tin một lô sản phẩm
const batchInfo = foodSupplyChain.getBlocksByBatchNumber("A123");
console.log("Thông tin lô sản phẩm A123:");
console.log(batchInfo);


