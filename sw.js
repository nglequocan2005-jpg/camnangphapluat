self.addEventListener('install', (e) => {
  console.log('Service Worker: Đã cài đặt thành công');
});

self.addEventListener('fetch', (e) => {
  // Bắt buộc phải có dòng này để nút "Tải App" xuất hiện
});
