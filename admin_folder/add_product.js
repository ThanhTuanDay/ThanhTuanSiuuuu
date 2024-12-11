         document.getElementById('productForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const productName = document.getElementById('productName').value;
            const productList = document.getElementById('productList');
            
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `<span>${productName}</span> <button onclick="removeProduct(this)">Xóa</button>`;
            productList.appendChild(productItem);
            document.getElementById('productName').value = '';
        });
        function removeProduct(button) {
            const productItem = button.parentElement;
            productItem.remove();
        }

        function addProduct() { 
            alert('Thêm sản phẩm thành công!'); 
            window.location.href = 'add_product.html'; }