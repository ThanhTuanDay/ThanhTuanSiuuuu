  // Dữ liệu mẫu sản phẩm
  const products = [
    { id: 'PT01', name: 'Nui sốt kem', description: 'Nui sốt kem là món ăn từ nui (pasta) nấu chín, phủ sốt kem béo ngậy, thường kèm thêm phô mai và rau củ.', price: 25000, pic: 'pasta.png' },
    { id: 'BG01', name: 'Burger bò đặc biệt', description: 'Hamburger bò đặc biệt bao gồm bánh mì kẹp thịt bò xay ở giữa. Miếng thịt có thể được nướng trên lửa tạo nên hương vị thơm ngon, khó cưỡng. Tạo nên hương vị thơm ngon.', price: 110000, pic: 'bg.png' },
    { id: 'PZ01', name: 'Pizza hải sản', description: 'Pizza hải sản thơm ngon với các loại hải sản tươi như tôm, cua, giăm bông, và rau củ. Kết hợp cùng sốt Thousand Island, tạo nên hương vị độc đáo và hấp dẫn cho món ăn.', price: 159000, pic: 'pizza.png' },
    { id: 'BG02', name: 'Burger healthy', description: '"Burger healthy" là loại burger làm từ nguyên liệu tốt cho sức khỏe, như bánh mì ngũ cốc nguyên hạt, thịt gà nướng, rau xanh tươi và sốt bơ hoặc yogurt.', price: 120000, pic: 'bg2.png' },
    { id: 'FR01', name: 'Khoai tây chiên', description: 'Khoai tây chiên là món ăn từ khoai tây cắt sợi, nướng hoặc chiên, thường được ăn kèm với muối và các loại gia vị.', price: 40000, pic: 'fries.png' }
];

// Lấy productId từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// Tìm sản phẩm từ dữ liệu
const product = products.find(p => p.id === productId);

if (product) {
    // Điền thông tin sản phẩm vào form
    document.getElementById('name').value = product.name;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    document.getElementById('currentImage').src = product.pic;
} else {
    alert('Sản phẩm không tồn tại!');
}

// Hiển thị xem trước ảnh mới khi người dùng chọn tệp
const newPicInput = document.getElementById('newPic');
const newImagePreview = document.getElementById('newImagePreview');

newPicInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            newImagePreview.src = e.target.result;
            newImagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        newImagePreview.src = '';
        newImagePreview.style.display = 'none';
    }
});

// Xử lý sự kiện submit form
document.getElementById('editProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy thông tin từ form
    const updatedProduct = {
        id: productId,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: parseInt(document.getElementById('price').value, 10),
        pic: newPicInput.files[0] ? newImagePreview.src : product.pic
    };

    console.log('Sản phẩm đã chỉnh sửa:', updatedProduct);
    alert('Lưu thay đổi thành công!');
    window.location.href = 'edit_product.html';
});
document.getElementById('deleteImageButton').addEventListener('click', function () {
    const confirmation = confirm('Bạn có chắc chắn muốn xóa hình ảnh hiện tại không?');
    if (confirmation) {
        // Xóa ảnh hiện tại
        const currentImage = document.getElementById('currentImage');
        currentImage.src = '#'; // Đặt lại src thành giá trị mặc định
        currentImage.alt = 'Hình ảnh đã bị xóa';
        alert('Hình ảnh đã được xóa.');
    }
});
