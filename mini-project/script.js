function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum Lulus";
}

function tampilkanHasil(nilai, predikat, status) {
    document.getElementById("hasil").hidden = false;
    document.getElementById("nilaiAkhir").textContent =
        "Nilai Akhir: " + nilai.toFixed(2);

    document.getElementById("predikat").textContent =
        "Predikat: " + predikat;

    document.getElementById("status").textContent =
        "Status: " + status;
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    const pesanError = document.getElementById("pesanError");
    const hasil = document.getElementById("hasil");

    pesanError.textContent = "";
    hasil.hidden = true;

    // Validasi nilai harus berada pada rentang 0-100
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        pesanError.textContent =
            "Error: Semua nilai harus berada pada rentang 0-100.";
        return;
    }

    // Proses perhitungan nilai
    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = tentukanStatus(akhir);

    // Menampilkan hasil ke halaman HTML
    tampilkanHasil(akhir, predikat, status);
});
