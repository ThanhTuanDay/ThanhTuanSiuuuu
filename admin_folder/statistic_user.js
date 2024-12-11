const customers = [
    { 
        name: "Đỗ Văn Quý", 
        revenue: 5500000, 
        invoices: [
            { id: "HD018", date: "2024-01-07", amount: 570000 },
            { id: "HD019", date: "2024-02-21", amount: 430000 },
            { id: "HD020", date: "2024-05-12", amount: 340000 },
            { id: "HD021", date: "2024-07-08", amount: 520000 },
            { id: "HD022", date: "2024-09-11", amount: 340000 },
            { id: "HD023", date: "2024-11-05", amount: 210000 },
            { id: "HD024", date: "2024-12-14", amount: 780000 },
        ]
    },
    { 
        name: "Trương Minh Thuận", 
        revenue: 6000000, 
        invoices: [
            { id: "HD011", date: "2024-01-07", amount: 570000 },
            { id: "HD012", date: "2024-02-21", amount: 430000 },
            { id: "HD013", date: "2024-05-12", amount: 340000 },
            { id: "HD014", date: "2024-07-08", amount: 1520000 },
            { id: "HD015", date: "2024-09-11", amount: 340000 },
            { id: "HD016", date: "2024-11-05", amount: 1210000 },
            { id: "HD017", date: "2024-11-25", amount: 1520000},
        ]
    },
    { 
        name: "Phạm Văn C", 
        revenue: 3850000, 
        invoices: [
            { id: "HD005", date: "2024-02-10", amount: 3850000 }
        ]
    },
    { 
        name: "Cao Vĩnh Trà", 
        revenue: 4800000, 
        invoices: [
            { id: "HD025", date: "2024-02-21", amount: 430000 },
            { id: "HD026", date: "2024-05-12", amount: 340000 },
            { id: "HD027", date: "2024-06-01", amount: 80000 },
            { id: "HD028", date: "2024-07-08", amount: 520000 },
            { id: "HD029", date: "2024-10-15", amount: 590000 },
            { id: "HD030", date: "2024-11-25", amount: 1520000 },
        ]
    },
    { 
        name: "Võ Văn E", 
        revenue:1500000, 
        invoices: [
            { id: "HD007", date: "2024-03-10", amount: 1000000 },
            { id: "HD007", date: "2024-05-25", amount: 500000 }
        ]
    },
    { 
        name: "Nguyễn Thành Trung", 
        revenue:4350000, 
        invoices: [
            { id: "HD031", date: "2024-01-07", amount: 570000 },
            { id: "HD032", date: "2024-02-21", amount: 430000 },
            { id: "HD033", date: "2024-06-01", amount: 80000 },
            { id: "HD034", date: "2024-07-08", amount: 520000 },
            { id: "HD035", date: "2024-09-11", amount: 340000 },
            { id: "HD036", date: "2024-10-15", amount: 590000 },
            { id: "HD037", date: "2024-11-05", amount: 210000 },    
            { id: "HD038", date: "2024-12-14", amount: 780000 },
        ]
    },
    { 
        name: "Nguyễn Phan Thanh Tuấn", 
        revenue:12500000,       
        invoices: [
            { id: "HD001", date: "2024-01-07", amount: 570000 },
            { id: "HD002", date: "2024-02-21", amount: 430000 },
            { id: "HD003", date: "2024-05-12", amount: 1340000 },
            { id: "HD004", date: "2024-06-01", amount: 80000 },
            { id: "HD005", date: "2024-07-08", amount: 520000 },
            { id: "HD006", date: "2024-09-11", amount: 340000 },
            { id: "HD007", date: "2024-10-15", amount: 590000 },
            { id: "HD008", date: "2024-11-05", amount: 210000 },
            { id: "HD009", date: "2024-11-25", amount: 1520000 },
            { id: "HD010", date: "2024-12-14", amount: 780000 },

        ]
    },
];

// Hàm xử lý khi nhấn nút "Xem chi tiết"
function viewDetails(id) {
  // Điều hướng đến trang details.html kèm tham số id
  window.location.href = `order_details.html?id=${id}`;
}
// Sắp xếp khách hàng theo doanh thu giảm dần
  const topCustomers = customers.sort((a, b) => b.revenue - a.revenue).slice(0, 5);

// Hiển thị 5 khách hàng có doanh thu cao nhất
console.log("Top 5 khách hàng có doanh thu cao nhất:");
topCustomers.forEach((customer, index) => {
console.log(`${index + 1}. ${customer.name} - Doanh thu: ${customer.revenue.toLocaleString()} VND`);
});

// Hiển thị danh sách khách hàng
const tableBody = document.getElementById("customer-table-body");
topCustomers.forEach((customer, index) => {
    const row = `
      <tr onclick="showInvoice(${index})">
        <td>${index + 1}</td>
            <td>${customer.name}</td>
           <td>${customer.revenue.toLocaleString()}</td>
    </tr>
    `;
    tableBody.innerHTML += row;
 });

  // Lấy phần tử tbody
  const invoiceList = document.getElementById("invoice-list");
  
// Hiển thị hóa đơn của khách hàng
function showInvoice(index) {
    const customer = customers[index];
    document.getElementById("customer-name").textContent = `Tên khách hàng: ${customer.name}`;
    
    const invoiceDetails = document.getElementById("invoice-details");
    invoiceDetails.innerHTML = ""; // Xóa dữ liệu cũ

    customer.invoices.forEach(invoice => {
        const row = `
            <tr>
                <td>${invoice.id}</td>
                <td>${invoice.date}</td>
                <td>${invoice.amount.toLocaleString()}</td>
                 <td>
          <button onclick="viewDetails('${invoice.id}')">Xem chi tiết</button>
                </td>
            </tr>
        `;
        invoiceDetails.innerHTML += row;
    });
    // Hiển thị hóa đơn
    document.getElementById("invoice-container").style.display = "block";
}

// Đóng hóa đơn
function closeInvoice() {
    document.getElementById("invoice-container").style.display = "none";
}
// Biểu đồ Tình trạng
new Chart(document.getElementById('statusChart'), {
    type: 'doughnut',
    data: {
        labels: ['Đang hoạt động', 'Chưa quay lại'],
        datasets: [{
            data: [3827, 1390],
            backgroundColor: ['#4CAF50', '#ddd'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { font: { size: 14 } }
            }
        }
    }
});

// Biểu đồ Tần suất ghé thăm
new Chart(document.getElementById('frequencyChart'), {
    type: 'pie',
    data: {
        labels: ['1 lần', '2 lần', '3 lần', '4 lần', '5+ lần'],
        datasets: [{
            data: [2943, 1243, 636, 76, 28],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF5722', '#00BCD4', '#ddd'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { font: { size: 14 } }
            }
        }
    }
});

// Biểu đồ Giới tính
new Chart(document.getElementById('genderChart'), {
    type: 'doughnut',
    data: {
        labels: ['Nam', 'Nữ', 'Khác'],
        datasets: [{
            data: [2470, 1977, 470],
            backgroundColor: ['#00a2ff', '#da45ba', '#ddd'],
            borderWidth: 1
        }]  
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { font: { size: 14 } }
            }
        }
    }
});


  document.getElementById("apply-filter").addEventListener("click", function () {
    location.reload();
  });
  document.getElementById("apply-filter").addEventListener("click", function () {
    alert("Lọc thành công");
    location.reload();
  });