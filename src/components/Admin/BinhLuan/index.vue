<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH BÌNH LUẬN</b></h4>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
                                <th class="text-center">#</th>
                                <th class="text-center">Khách Hàng</th>
                                <th class="text-center">Tên Phim</th>
                                <th class="text-center">Nội Dung</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-nowrap">
                                <th class="align-middle text-center">1</th>
                                <td class="align-middle">Nguyễn Văn A</td>
                                <td class="align-middle">Hành Tinh Đen</td>
                                <td class="align-middle">Bộ phim rất hấp dẫn từ đầu đến cuối.</td>
                                <td class="align-middle text-center" style="width: 180px;">
                                    <button class="btn btn-success w-100 btn-sm">Hiển Thị</button>
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <i class="fa-solid fa-square-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-nowrap">
                                <th class="align-middle text-center">2</th>
                                <td class="align-middle">Trần Minh Châu</td>
                                <td class="align-middle">Đường Về Nhà</td>
                                <td class="align-middle">Diễn viên diễn xuất tốt, câu chuyện cảm động.</td>
                                <td class="align-middle text-center" style="width: 180px;">
                                    <button class="btn btn-warning w-100 btn-sm">Tạm Ẩn</button>
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <i class="fa-solid fa-square-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Xóa Bình Luận</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa bình luận này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
   
        
}
</script>
<style></style>