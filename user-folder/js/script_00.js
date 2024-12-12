
    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(product.name + " đã được thêm vào giỏ hàng!");
    }

    // Lấy tất cả các nút "Add to Cart" và thêm sự kiện click
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productBox = button.closest('.box');
            const productName = productBox.querySelector('h5').innerText;
            const productPrice = productBox.querySelector('h6').innerText;
            const productQuantity = productBox.querySelector('.count').value;
            const productImage = productBox.querySelector('img').src; // Lấy đường dẫn hình ảnh

            const product = {
                name: productName,
                price: productPrice,
                quantity: productQuantity,
                image: productImage // Lưu đường dẫn hình ảnh
            };

            addToCart(product);
        });
    });
