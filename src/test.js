// Mảng loại
var mangLoai = ['Jane', 'Sarah'];

// Mảng danh sách đối tượng
var mangDanhSach = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Sarah' }
];

// Lọc các đối tượng từ mảng danh sách dựa vào mảng loại
var ketQua = mangDanhSach.filter(function(element) {
  return mangLoai.includes(element.name);
});

console.log(ketQua);