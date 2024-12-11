        window.onload = function () {
            const products = document.querySelectorAll('.product-item');
            products.forEach((product, index) => {
                setTimeout(() => {
                    product.classList.add('fade-in');
                }, index * 300);
            });

            const totalPayment = document.getElementById('total-payment');
            totalPayment.classList.add('highlight');
        }
