// Membuat Aplikasi Manajemen Toko dengan JavaScript
// (OOP & SOLID Principles)
// Siswa diminta membuat sebuah aplikasi manajemen toko sederhana menggunakan JavaScript dengan paradigma OOP dan menerapkan prinsip S.O.L.I.D. Aplikasi ini akan mengelola produk, transaksi, dan laporan penjualan.
// Instruksi:
// 1. Buat class yang menangani beberapa entitas berikut:
// a. Product: Mengelola informasi produk (nama, harga, stok).
// b. Transaction: Mengelola pembelian produk dan menghitung total harga.
// c. Report: Menyimpan laporan penjualan.
// 2. Gunakan OOP dengan benar:
// a. Enkapsulasi: Beberapa properti tidak boleh diakses langsung (gunakan metode getter & setter).
// b. Pewarisan: Jika ada entitas yang mirip, gunakan pewarisan (contoh: DigitalProduct bisa mewarisi dari Product).
// c. Abstraksi: Buat metode abstrak yang perlu diimplementasikan pada subclass.
// d. Polimorfisme: Gunakan polimorfisme pada metode yang bisa berbeda untuk subclass.
// 3. Terapkan prinsip S.O.L.I.D:
// a. S (Single Responsibility): Setiap class hanya menangani satu tugas (misalnya, Product hanya untuk mengelola data produk).
// b. O (Open/Closed): Pastikan class terbuka untuk ekstensi tapi tertutup untuk modifikasi.
// c. L (Liskov Substitution): Pastikan subclass bisa menggantikan superclass tanpa masalah.
// d. I (Interface Segregation): Klien tidak boleh dipaksa untuk bergantung pada antarmuka/interface yang tidak mereka gunakan.
// e. D (Dependency Inversion): Pastikan class tidak langsung bergantung pada class lain, tapi pada abstraksi

//SRC
class Product {
  constructor(name, prince, stock) {
    this.name = name;
    this.prince = prince;
    this.stock = stock;
  }
  getDetails() {
    return `Name: ${this.name}, Prince: ${this.prince}, Stock: ${this.stock}`;
  }
}

//OCP
class Motor extends Product {
  constructor(name, stock, merk) {
    super(name, 10000, stock, merk);
    this.merk = merk;
  }
}

//LSP
function printProductDetails(product) {
  console.log(product.getDetails());
}
const product = new Product("Laptop", 30000000, 10);
const motor = new Motor("Honda", 10, "Honda");
printProductDetails(product);
printProductDetails(motor);

class Transaction {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  getTotalPrice() {
    return this.product.prince * this.quantity;
  }
}
const transaction = new Transaction(product, 2);
console.log(`Trasaction :${transaction.getTotalPrice()}`);

//isp
class MenghitungAngka extends Transaction {
  constructor(product, quantity) {
    super(product, quantity);
  }
  getTotalPrice() {
    return this.product.prince * this.quantity;
  }
}

class ReportService {
  constructor(transaction, name, merk) {
    this.merk = merk;
    this.name = name;
    this.transaction = transaction;
  }
  generateReport() {
    console.log(
      ` Transaksi 1 ${
        this.transaction.product.name
      } - harga : ${this.transaction.getTotalPrice()}`
    );
  }
}
const menghitungAngka = new MenghitungAngka(product, 1);
const reportservice = new ReportService(transaction);
reportservice.generateReport();
