## 🔄 Perulangan di JavaScript 🔄

### 📌 Deskripsi
Perulangan digunakan untuk mengeksekusi kode secara berulang. Dalam JavaScript, terdapat beberapa jenis perulangan, yaitu:
- **for**
- **while & do while**
- **for of, for in, foreach**
- **map**

---

## 🔹 Perulangan Dasar

### 🔄 For Loop
Digunakan untuk menjalankan kode dengan jumlah iterasi yang sudah diketahui.
```javascript
for (let z = 1; z <= 5; z++) {
    console.log('Data ke -', z);
}
```
---

### 🔄 While Loop
Digunakan saat jumlah iterasi tidak diketahui secara pasti.
```javascript
let x = 1;
while (x <= 5) {
    console.log('Data x ke -', x);
    x++;
}
```
---

### 🔄 Do While Loop
Selalu menjalankan kode minimal sekali sebelum mengecek kondisi.
```javascript
let y = 1;
do {
    console.log('Data y ke -', y);
    y++;
} while (y <= 10);
```
---

## 🔹 Perulangan pada Array

### 🔄 For Of (Mengambil Nilai)
Digunakan untuk mengambil nilai langsung dari array.
```javascript
const pacarSaya = ['Rabin', 'Yuri', 'Kefier', 'Andreas', 'Ci-N'];
for (let pacar of pacarSaya) {
    console.log(pacar);
}
```
---

### 🔄 For In (Mengambil Index)
Digunakan untuk mengambil index dari elemen dalam array.
```javascript
for (let pacar in pacarSaya) {
    console.log(pacar);
}
```
---

### 🔄 ForEach (Mengambil Nilai & Index)
ForEach digunakan untuk iterasi array, mendapatkan nilai dan index sekaligus.
```javascript
pacarSaya.forEach((pacar, index) => {
    console.log(pacar, index);
});
```
---

### 🔄 Map (Transformasi Data)
Digunakan untuk memproses setiap elemen array dan dapat mengembalikan array baru.
```javascript
pacarSaya.map((pacar, index) => {
    console.log(pacar, index);
});
```
---

## 🎯 Cara Menjalankan Program
1. Simpan kode dalam file `.js`
2. Jalankan di browser menggunakan `console.log()` atau gunakan `Node.js`
3. Lihat hasil perulangan di konsol

---

### 🚀 Happy Coding! 🎉

