function downloadVideo() {
    const url = document.getElementById('tiktok-url').value;
    const errorMessage = document.getElementById('error-message');

    if (!url) {
        errorMessage.textContent = "URL TikTok tidak boleh kosong!";
        return;
    }

    errorMessage.textContent = "";  // Clear previous error

    const apiUrl = `https://python-swagger-api.vercel.app/api/tiktok?url=${encodeURIComponent(url)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data?.download_url) {
                const downloadLink = document.createElement('a');
                downloadLink.href = data.download_url;
                downloadLink.download = "tiktok_video.mp4";  // Nama file download
                downloadLink.click();
            } else {
                errorMessage.textContent = "Gagal mendownload video, coba lagi.";
            }
        })
        .catch(error => {
            errorMessage.textContent = "Terjadi kesalahan, coba lagi.";
            console.error(error);
        });
}
