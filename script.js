function diagnose() {
    // Ambil nilai dari setiap select option
    const G01 = document.getElementById("G01").value;
    const G09 = document.getElementById("G09").value;
    const G11 = document.getElementById("G11").value;
    const G12 = document.getElementById("G12").value;
    const G13 = document.getElementById("G13").value;
    const G14 = document.getElementById("G14").value;
    const G15 = document.getElementById("G15").value;
    const G16 = document.getElementById("G16").value;
    const G17 = document.getElementById("G17").value;
    const G18 = document.getElementById("G18").value;
    const G19 = document.getElementById("G19").value;
    const G20 = document.getElementById("G20").value;
    const G21 = document.getElementById("G21").value;
    const G22 = document.getElementById("G22").value;
    const G23 = document.getElementById("G23").value;
    const G24 = document.getElementById("G24").value;
    const G25 = document.getElementById("G25").value;
    const G26 = document.getElementById("G26").value;

    let diagnosis = "Diagnosis: ";
    let solution = "Cara Penanganan: ";

    // Logika diagnosis berdasarkan aturan dalam file
    if (G11 === "ya" && G12 === "ya" && G13 === "ya" && G14 === "ya") {
        diagnosis += "Penyakit Layu Fusarium.";
        solution += "Cabut tanaman yang terinfeksi, lakukan sanitasi lahan, dan gunakan fungisida berbahan aktif seperti benomil.";
    } else if (G13 === "ya" && G15 === "ya" && G16 === "ya" && G17 === "ya" && G18 === "ya") {
        diagnosis += "Penyakit Bercak Ungu.";
        solution += "Gunakan fungisida dengan bahan aktif seperti mankozeb atau klorotalonil untuk mengendalikan penyakit ini.";
    } else if (G01 === "ya" && G19 === "ya" && G20 === "ya") {
        diagnosis += "Penyakit Antraknosa.";
        solution += "Semprotkan fungisida yang mengandung bahan aktif tembaga atau mankozeb, dan pastikan tanaman tidak terlalu lembab.";
    } else if (G09 === "ya" && G21 === "ya" && G22 === "ya" && G23 === "ya" && G24 === "ya") {
        diagnosis += "Infeksi Virus Mozaik Bawang.";
        solution += "Cabut tanaman yang terinfeksi, kendalikan vektor dengan insektisida, dan tanam varietas yang tahan virus.";
    } else if (G23 === "ya" && G25 === "ya" && G26 === "ya") {
        diagnosis += "Penyakit Bercak Daun.";
        solution += "Semprotkan fungisida yang sesuai, dan pastikan tanaman mendapatkan sinar matahari yang cukup untuk mencegah kelembaban berlebih.";
    } else {
        diagnosis += "Tidak ada penyakit yang dapat didiagnosis dari gejala yang diberikan.";
        solution += "Silakan konsultasikan dengan ahli pertanian untuk analisis lebih lanjut.";
    }

    // Tampilkan hasil diagnosis dan cara penanganan
    document.getElementById("result").innerHTML = `<strong>${diagnosis}</strong><br><strong>${solution}</strong>`;
}
