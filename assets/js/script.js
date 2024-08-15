    document.addEventListener('keydown', function (event) {
        // Cek apakah tombol `CTRL` dan `K` ditekan bersamaan
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault(); // Mencegah tindakan default (seperti membuka browser bookmark)
            document.getElementById('search').focus(); // Fokuskan elemen pencarian
        }
    });
