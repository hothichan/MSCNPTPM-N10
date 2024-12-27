const express = require("express");
const { Block, Blockchain } = require("./khoi");

// Khởi tạo blockchain từ file du_lieu.js
const foodSupplyChain = require("./du_lieu");

// Khởi tạo ứng dụng Express
const app = express();
const PORT = 3000;

// Cấu hình phục vụ các file tĩnh trong thư mục public
app.use(express.static("public"));

// Cung cấp API để tìm kiếm thông tin theo từ khóa
app.get("/search", (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "Từ khóa là bắt buộc" });
  }

  // Tìm kiếm sản phẩm theo từ khóa (không phân biệt chữ hoa, thường)
  const lowerCaseKeyword = keyword.toLowerCase();
  const results = foodSupplyChain.chain.filter(
    block =>
      block.data &&
      block.data.productName.toLowerCase().includes(lowerCaseKeyword)
  );

  if (results.length === 0) {
    return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
  }

  res.json(results);
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
