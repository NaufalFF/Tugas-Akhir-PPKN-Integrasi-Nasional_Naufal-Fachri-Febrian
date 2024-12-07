// Fungsi untuk navigasi antar halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.container').forEach(container => {
      container.classList.remove('active');
    });
  
    // Tampilkan halaman yang sesuai
    document.getElementById(pageId).classList.add('active');
  }
  