
// Fungsi untuk menghitung BMI
function hitungBMI() {
    // Ambil nilai dari form
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100; // Konversi ke meter
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert("Masukkan berat dan tinggi badan yang valid!");
        return;
    }
    // Hitung BMI
    const bmi = (berat / (tinggi * tinggi)).toFixed(2);
    // Tampilkan hasil
    let hasil = `BMI Anda adalah ${bmi}`;
    if (bmi < 18.5) {
        hasil += " (Kurus)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        hasil += " (Normal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        hasil += " (Overweight)";
    } else {
        hasil += " (Obesitas)";
    }
    document.getElementById('hasilBMI').innerHTML = `
        <div class="result">${hasil}</div>
        <div class="description">
            <p>BMI adalah indeks massa tubuh yang dapat digunakan untuk menentukan apakah berat badan Anda berada dalam kisaran sehat. BMI tidak memperhitungkan komposisi tubuh seperti otot dan lemak.</p>
            <p>Jika BMI Anda tidak berada dalam kisaran normal, konsultasikan dengan dokter atau ahli gizi untuk saran yang lebih mendetail.</p>
        </div>
    `;
}