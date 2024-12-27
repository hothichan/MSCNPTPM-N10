const crypto = require("crypto-js");

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data; // Dữ liệu của block (thông tin sản phẩm)
    this.previousHash = previousHash; // Hash của block trước
    this.hash = this.calculateHash(); // Hash của block hiện tại
  }

  // Hàm tính toán hash
  calculateHash() {
    return crypto.SHA256(
        this.index +
        this.timestamp +
        JSON.stringify(this.data) +
        this.previousHash
      ).toString()
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]; // Tạo block gốc
  }

  // Block đầu tiên trong blockchain
  createGenesisBlock() {
    return new Block(0, new Date().toISOString(), "", "0");
  }

  // Lấy block cuối cùng trong chuỗi
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // Thêm block mới
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  // Kiểm tra tính hợp lệ của blockchain
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }

  // Truy xuất thông tin các block theo lô sản phẩm
  getBlocksByBatchNumber(batchNumber) {
    const matchingBlocks = []; // Mảng để lưu trữ các khối phù hợp
    for (const block of this.chain) {
      if (block.data && block.data.batchNumber === batchNumber) {
        matchingBlocks.push(block); // Thêm khối phù hợp vào mảng
      }
    }
    return matchingBlocks; // Trả về danh sách các khối phù hợp
  }

}


// Xuất các lớp để sử dụng ở file khác
module.exports = { Block, Blockchain };
