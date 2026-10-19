
// 1. Operasi aritmetika menggunakan prompt
function operasiDasar() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");

    if (
        inputA === null || inputA.trim() === "" ||
        inputB === null || inputB.trim() === ""
    ) {
        alert("Input tidak boleh kosong.");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan bilangan yang valid.");
        return;
    }

    let hasil = "Penjumlahan: " + (a + b) + "\n";
    hasil += "Pengurangan: " + (a - b) + "\n";
    hasil += "Perkalian: " + (a * b) + "\n";

    if (b !== 0) {
        hasil += "Pembagian: " + (a / b) + "\n";
        hasil += "Modulus: " + (a % b);
    } else {
        hasil += "Pembagian: Tidak dapat dibagi nol\n";
        hasil += "Modulus: Tidak dapat dibagi nol";
    }

    document.getElementById("hasilOperasi").textContent = hasil;
}


// 7. Tabel perkalian angka 7 dari 1 sampai 10
function tabelPerkalian() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "\n";
    }

    document.getElementById("hasilPerkalian").textContent = hasil;
}


// 8. Function cekGenap
function cekGenap(angka) {
    return angka % 2 === 0;
}

function periksaGenap() {
    const input = document.getElementById("angkaGenap").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (cekGenap(angka)) {
        hasil.textContent = angka + " adalah bilangan genap.";
    } else {
        hasil.textContent = angka + " adalah bilangan ganjil.";
    }
}


// 9. Validasi form mahasiswa
document.getElementById("formMahasiswa")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const inputNilai = document.getElementById("nilai").value;
        const nilai = Number(inputNilai);
        const hasil = document.getElementById("hasilForm");

        if (nama === "" || inputNilai.trim() === "") {
            hasil.textContent = "Semua kolom wajib diisi.";
        } else if (
            !Number.isFinite(nilai) ||
            nilai < 0 ||
            nilai > 100
        ) {
            hasil.textContent = "Nilai harus berada pada rentang 0-100.";
        } else {
            hasil.textContent =
                "Data valid! Nama: " + nama + ", Nilai: " + nilai;
        }
    });


// 10. Menghitung total harga menu makanan
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function(item) {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach(function(item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}


// 11. Menyembunyikan dan menampilkan elemen HTML
function toggleInformasi() {
    const informasi = document.getElementById("informasi");

    if (informasi.style.display === "none") {
        informasi.style.display = "block";
    } else {
        informasi.style.display = "none";
    }
}
