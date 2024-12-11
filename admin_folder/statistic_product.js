const products = [
    { name: "Nui sốt kem", quantity: 3625, price: 25000 },
    { name: "Burger bò đặc biệt", quantity: 4658, price: 110000 },
    { name: "Pizza hải sản", quantity: 3005, price: 159000 },
    { name: "Burger healthy", quantity: 2978, price: 120000 },
    { name: "Khoai tây chiên", quantity: 2875, price: 40000 }
];

// Thêm dữ liệu vào bảng
const tableBody = document.getElementById("product-table-body");
let totalRevenue = 0;
let bestSeller = products[0];
let worstSeller = products[0];

products.forEach(product => {
    const revenue = product.quantity * product.price;
    totalRevenue += revenue;

    // So sánh bán chạy và bán ế
    if (product.quantity > bestSeller.quantity) {
        bestSeller = product;
    }
    if (product.quantity < worstSeller.quantity) {
        worstSeller = product;
    }

    // Thêm hàng vào bảng
    const row = `
        <tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price.toLocaleString()}</td>
            <td>${revenue.toLocaleString()}</td>
            <td>
                <a href="order_details.html?name=${encodeURIComponent(product.name)}">Xem chi tiết</a>
            </td>
        </tr>
    `;
    tableBody.innerHTML += row;
});

// Hiển thị tổng kết
document.getElementById("total-revenue").textContent = totalRevenue.toLocaleString();
document.getElementById("best-seller").textContent = `${bestSeller.name} (${bestSeller.quantity} sản phẩm)`;
document.getElementById("worst-seller").textContent = `${worstSeller.name} (${worstSeller.quantity} sản phẩm)`;
 
            const ctx = document.getElementById('orderChart').getContext('2d');
    
            // Dữ liệu gốc
            const data = [
                { date: '2024-01-31', value: 1536 },
                { date: '2024-02-30', value: 1458 },
                { date: '2024-03-31', value: 1741 },
                { date: '2024-04-30', value: 1658 },
                { date: '2024-05-31', value: 1151 },
                { date: '2024-06-30', value: 1124 },
                { date: '2024-07-31', value: 1598 },
                { date: '2024-08-31', value: 1365 },
                { date: '2024-09-30', value: 1486 },
                { date: '2024-10-31', value: 1893 },
                { date: '2024-11-30', value: 1825 },
                { date: '2024-12-31', value: 1675 },
            ];
    
            // Hàm cập nhật biểu đồ
            function updateChart(startDate, endDate) {
                const filteredData = data.filter(item => {
                    const itemDate = new Date(item.date);
                    return itemDate >= startDate && itemDate <= endDate;
                });
    
                const labels = filteredData.map(item => item.date);
                const values = filteredData.map(item => item.value);
    
                orderChart.data.labels = labels;
                orderChart.data.datasets[0].data = values;
                orderChart.update();
                
    
                // Cập nhật số lượng đơn hàng
                document.getElementById('order-count').textContent = filteredData.length;
            }
    
            const orderChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Tổng đơn hàng',
                        data: [],
                        borderColor: '#3182ce',
                        backgroundColor: 'rgba(49, 130, 206, 0.3)',
                        borderWidth: 3,
                        pointBackgroundColor: '#2b6cb0',
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                },
                                color: '#2d3748'    
                            }       
                        }
                    },  
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Ngày',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                },
                                color: '#4a5568'
                            },
                            grid: {
                                color: '#e2e8f0'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Số lượng',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                },
                                color: '#4a5568'
                            },
                            beginAtZero: true,
                            grid: {
                                color: '#e2e8f0'
                            }
                        }
                    }
                }
            });
    
            // Lắng nghe sự kiện nút lọc
            document.getElementById('apply-filter').addEventListener('click', () => {
                const startDate = new Date(document.getElementById('start-date').value);
                const endDate = new Date(document.getElementById('end-date').value);
                updateChart(startDate, endDate);
            });
    
            // Khởi tạo dữ liệu ban đầu
            updateChart(new Date('2024-01-01'), new Date('2024-12-31'));