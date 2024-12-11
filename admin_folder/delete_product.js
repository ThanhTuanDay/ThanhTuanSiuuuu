// Mẫu dữ liệu sản phẩm với hình ảnh
const products = [
    { id: 'PT01', name: 'Nui sốt kem', description: 'Nui sốt kem là món ăn từ nui (pasta) nấu chín, phủ sốt kem béo ngậy, thường kèm thêm phô mai và rau củ.', price: 25000, pic: 'pasta.png' },
    { id: 'BG01', name: 'Burger bò đặc biệt', description: 'Hamburger bò đặc biệt bao gồm bánh mì kẹp thịt bò xay ở giữa. Miếng thịt có thể được nướng trên lửa tạo nên hương vị thơm ngon, khó cưỡng. Tạo nên hương vị thơm ngon.', price: 110000, pic: 'bg.png' },
    { id: 'PZ01', name: 'Pizza hải sản', description: 'Pizza hải sản thơm ngon với các loại hải sản tươi như tôm, cua, giăm bông, và rau củ. Kết hợp cùng sốt Thousand Island, tạo nên hương vị độc đáo và hấp dẫn cho món ăn.', price: 159000, pic: 'pizza.png' },
    { id: 'BG02', name: 'Burger healthy', description: '"Burger healthy" là loại burger làm từ nguyên liệu tốt cho sức khỏe, như bánh mì ngũ cốc nguyên hạt, thịt gà nướng, rau xanh tươi và sốt bơ hoặc yogurt.', price: 120000, pic: 'bg2.png' },
    { id: 'FR01', name: 'Khoai tây chiên ', description: 'Khoai tây chiên là món ăn từ khoai tây cắt sợi, nướng hoặc chiên, thường được ăn kèm với muối và các loại gia vị.', price: 40000, pic: 'fries.png' }
];

// Hiển thị sản phẩm ban đầu
function displayProducts(products) {
    const table = document.getElementById('productTable');
    table.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.pic}" alt="${product.name}" width="50"></td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price} VND</td>
            <td><button class="delete-button" onclick="deleteProduct('${product.id}')">Xóa</button></td>
        `;
        table.appendChild(row);
    });
}


function deleteProduct(productId) {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmation) {
        alert("Xóa sản phẩm thành công!")
        window.location.href = `delete_product.html?productId=${productId}`;
    }
}

// Hiển thị sản phẩm ban đầu khi trang được tải
window.onload = function() {
    displayProducts(products);
};
