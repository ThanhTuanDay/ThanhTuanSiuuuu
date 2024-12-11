$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();

    // Thêm mới
    $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name" placeholder="Nhập Tên"></td>' +
            '<td><input type="text" class="form-control" name="gioitinh" id="gioitinh" placeholder="Nhập Giới Tính"></td>' +
            '<td><input type="text" class="form-control" name="namsinh" id="namsinh" placeholder="Nhập Ngày Sinh"></td>' +
            '<td><input type="text" class="form-control" name="diachi" id="diachi" placeholder="Nhập Địa Chỉ"></td>' +
            '<td><input type="text" class="form-control" name="chucvu" id="chucvu" placeholder="Nhập Chức Vụ"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table tbody").append(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Kiểm tra rỗng và lưu dữ liệu
    $(document).on("click", ".add", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                swal("Thông Báo!", "Dữ Liệu Trống Vui Lòng Kiểm Tra", "error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());
            });
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");

            Swal.fire({
                icon: "success",
                title: "Lưu thành công!",
                text: "Dữ liệu khách hàng đã được lưu.",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                $(this).parents("tr").find('input[type="text"]').val("");
                // Chuyển sang trang khác sau khi thông báo thành công
                window.location.href = "info_user.html";
            });

        }
    });

    // Chỉnh sửa
    $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child)").each(function () {
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });

    // Khóa tài khoản
    $(document).on("click", ".lock", function () {
        var row = $(this).parents("tr");
        row.addClass("locked"); // Thêm class để đánh dấu trạng thái đã khóa
        row.find("input, .edit, .add").attr("disabled", "disabled"); // Vô hiệu hóa các nút và input
        alert("Tài khoản đã bị khóa!");
        $(".add-new").removeAttr("disabled");
    });

    // Xử lý thêm sản phẩm
    document.getElementById('productForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const productList = document.getElementById('productList');

        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `<span>${productName}</span> <button onclick="removeProduct(this)">Xóa</button>`;
        productList.appendChild(productItem);
        document.getElementById('productName').value = '';
    });

    // Xóa sản phẩm
    window.removeProduct = function (button) {
        const productItem = button.parentElement;
        productItem.remove();
    };

    // Kiểm tra định dạng ngày sinh
    document.getElementById("birthDate").addEventListener("input", function () {
        let value = this.value;
        const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!pattern.test(value)) {
            this.setCustomValidity("Vui lòng nhập ngày sinh đúng định dạng dd/mm/yyyy.");
        } else {
            this.setCustomValidity("");
        }
    });
});

    
    document.getElementById('navigateButton').addEventListener('click', function () {
        window.location.href = 'add_user.html';
    });

