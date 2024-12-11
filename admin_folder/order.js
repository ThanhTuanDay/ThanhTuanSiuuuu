document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn reload trang khi submit form

    // Lấy dữ liệu từ form
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const status = document.getElementById('status').value;
    const district = document.getElementById('district').value.trim().toLowerCase();

    // Danh sách đơn hàng (giả lập)
    const orders = [
        { id: '001', customer: 'Nguyễn Văn A', date: '2024-05-12', status: 'confirmed', district: 'Quận Tân Bình', orderCode: 'AB12345' },
        { id: '002', customer: 'Lê Thị B', date: '2024-05-10', status: 'pending', district: 'Quận Phú Nhuận', orderCode: 'AB12346' },
        { id: '003', customer: 'Trần Văn C', date: '2024-05-08', status: 'delivered', district: 'Quận 1', orderCode: 'AB12347' },
        { id: '004', customer: 'Phạm Thị D', date: '2024-05-15', status: 'cancelled', district: 'Quận 5', orderCode: 'AB12348' },
        { id: '005', customer: 'Võ Văn E', date: '2024-05-11', status: 'confirmed', district: 'Quận Gò Vấp', orderCode: 'AB12349' },
    ];
    // Lọc đơn hàng

    // const filteredOrders = orders.filter(order => {
    //     const orderDate = new Date(order.date);
    //     const startDateFilter = startDate ? new Date(startDate) : null;
    //     const endDateFilter = endDate ? new Date(endDate) : null;

    //     const isDateInRange =
    //         (!startDateFilter || orderDate >= startDateFilter) &&
    //         (!endDateFilter || orderDate <= endDateFilter);

    //     const isStatusMatch = status === '' || order.status === status;
    //     const isDistrictMatch = district === '' || order.district.includes(district);

    //     return isDateInRange && isStatusMatch && isDistrictMatch;
    // });

    // Hiển thị kết quả trong bảng
    renderOrders(filteredOrders);
});

function renderOrders(orders) {
    const tbody = document.querySelector('.order-table tbody');
    tbody.innerHTML = ''; // Xóa dữ liệu cũ

    if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center;">Không tìm thấy đơn hàng</td></tr>`;
        return;
    }

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td><div class="step-text">${formatStatus(order.status)}</div></td>
            <td>${order.district}</td>
            <td>
                <a href="order_details.html?orderId=${order.id}" class="view-btn">
                    <i class="fas fa-eye"></i> ${order.orderCode}
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });
}


function formatStatus(status) {
    switch (status) {
        case 'pending':
            return 'Chưa xử lý';
        case 'confirmed':
            return 'Đã xác nhận';
        case 'delivered':
            return 'Đã giao thành công';
        case 'cancelled':
            return 'Đã hủy';
        default:
            return status;
    }
}
// Hiển thị toàn bộ đơn hàng khi tải trang
renderOrders([
    { id: '001', customer: 'Nguyễn Văn A', date: '2024-05-12', status: 'confirmed', district: 'Quận Tân Bình', orderCode: 'AB12345' },
    { id: '002', customer: 'Lê Thị B', date: '2024-05-10', status: 'pending', district: 'Quận Phú Nhuận', orderCode: 'AB12346' },
    { id: '003', customer: 'Trần Văn C', date: '2024-05-08', status: 'delivered', district: 'Quận 1', orderCode: 'AB12347' },
    { id: '004', customer: 'Phạm Thị D', date: '2024-05-15', status: 'cancelled', district: 'Quận 5', orderCode: 'AB12348' },
    { id: '005', customer: 'Võ Văn E', date: '2024-05-11', status: 'confirmed', district: 'Quận Gò Vấp', orderCode: 'AB12349' },
]);
function handleFilterClick() {
    window.location.href = "order.html";
}
