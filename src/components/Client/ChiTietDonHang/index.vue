<template>
	<div class="container py-4">
		<!-- Order Header -->
		<div class="card shadow-sm mb-4">
			<div class="card-body">
				<div class="d-flex justify-content-between align-items-center flex-wrap">
					<div>
						<h5 class="fw-bold mb-1">Chi tiết đơn hàng</h5>
						<p class="text-muted small mb-0">Mã đơn: <strong>DH-2024-001234</strong> | Ngày đặt: <strong>15/01/2024 14:30</strong></p>
					</div>
					<span class="badge bg-success mt-2 mt-md-0">Đã thanh toán</span>
				</div>
			</div>
			<div class="card-footer bg-light">
				<div class="d-flex flex-wrap gap-2">
					<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#ticketModal">
						<i class="fa-solid fa-ticket me-1"></i>Xem vé
					</button>
					<button class="btn btn-outline-danger btn-sm">
						<i class="fa-solid fa-times me-1"></i>Hủy đơn
					</button>
					<button class="btn btn-outline-secondary btn-sm">
						<i class="fa-solid fa-download me-1"></i>Tải hóa đơn
					</button>
				</div>
			</div>
		</div>

		<div class="row g-4">
			<!-- Left Column -->
			<div class="col-lg-8">
				<!-- Movie & Showtime Information -->
				<div class="card shadow-sm mb-4">
					<div class="card-body">
						<div class="row mb-3">
							<div class="col-md-3 mb-3 mb-md-0">
								<img src="https://i.pinimg.com/736x/8f/e6/f1/8fe6f1fe7e9f70414e1b5fb37c7a9e1d.jpg"
									alt="Movie" class="img-fluid rounded">
							</div>
							<div class="col-md-9">
								<h5 class="fw-bold mb-2">Avengers: Endgame</h5>
								<p class="text-muted small mb-2">
									<i class="fa-solid fa-building me-1"></i>Rạp số 1 - Phòng chiếu VIP
								</p>
								<p class="text-muted small mb-2">
									<i class="fa-regular fa-calendar me-1"></i>20/01/2024
									<i class="fa-regular fa-clock ms-3 me-1"></i>19:30 - 22:31
								</p>
								<p class="text-muted small mb-0">
									<i class="fa-solid fa-tag me-1"></i>Hành động, Phiêu lưu
									<i class="fa-solid fa-clock ms-3 me-1"></i>181 phút
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Tickets & Services -->
				<div class="card shadow-sm">
					<div class="card-body">
						<h6 class="fw-bold mb-3">Vé đã đặt</h6>
						<div class="table-responsive mb-4">
							<table class="table table-sm mb-0">
								<thead class="table-light">
									<tr>
										<th>Mã vé</th>
										<th>Ghế</th>
										<th class="text-end">Giá vé</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>VE-001234</td>
										<td><span class="badge bg-primary">F8</span></td>
										<td class="text-end">80.000 ₫</td>
									</tr>
									<tr>
										<td>VE-001235</td>
										<td><span class="badge bg-primary">F9</span></td>
										<td class="text-end">80.000 ₫</td>
									</tr>
								</tbody>
							</table>
						</div>

						<h6 class="fw-bold mb-3">Dịch vụ đã đặt</h6>
						<div class="table-responsive">
							<table class="table table-sm mb-0">
								<thead class="table-light">
									<tr>
										<th>Tên dịch vụ</th>
										<th class="text-end">Đơn giá</th>
										<th class="text-center">SL</th>
										<th class="text-end">Thành tiền</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Combo bắp nước lớn</td>
										<td class="text-end">80.000 ₫</td>
										<td class="text-center">1</td>
										<td class="text-end">80.000 ₫</td>
									</tr>
									<tr>
										<td>Snack mix</td>
										<td class="text-end">50.000 ₫</td>
										<td class="text-center">2</td>
										<td class="text-end">100.000 ₫</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column -->
			<div class="col-lg-4">
				<!-- Payment Summary -->
				<div class="card shadow-sm mb-4">
					<div class="card-body">
						<h6 class="fw-bold mb-3">Tóm tắt thanh toán</h6>
						<div class="d-flex justify-content-between mb-2">
							<span class="text-muted">Tổng tiền vé</span>
							<span>160.000 ₫</span>
						</div>
						<div class="d-flex justify-content-between mb-2">
							<span class="text-muted">Tổng tiền dịch vụ</span>
							<span>180.000 ₫</span>
						</div>
						<div class="d-flex justify-content-between mb-2 text-success">
							<span>Giảm giá</span>
							<span>-20.000 ₫</span>
						</div>
						<hr>
						<div class="d-flex justify-content-between">
							<span class="fw-bold">Tổng thanh toán</span>
							<span class="fw-bold text-success fs-5">320.000 ₫</span>
						</div>
					</div>
				</div>

				<!-- Customer Information -->
				<div class="card shadow-sm mb-4">
					<div class="card-body">
						<h6 class="fw-bold mb-3">Thông tin khách hàng</h6>
						<p class="mb-2">
							<i class="fa-solid fa-user me-2 text-muted"></i>
							<strong>Nguyễn Văn A</strong>
						</p>
						<p class="mb-2">
							<i class="fa-regular fa-envelope me-2 text-muted"></i>
							nguyenvana@gmail.com
						</p>
						<p class="mb-0">
							<i class="fa-solid fa-phone me-2 text-muted"></i>
							0901234567
						</p>
					</div>
				</div>

				<!-- Voucher Information -->
				<div class="card shadow-sm">
					<div class="card-body">
						<h6 class="fw-bold mb-3">Mã giảm giá</h6>
						<div class="d-flex justify-content-between align-items-center">
							<div>
								<strong>WELCOME2024</strong>
								<small class="text-muted d-block">Giảm 20.000 ₫</small>
							</div>
							<span class="badge bg-success">Đã áp dụng</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Tickets Modal -->
	<div class="modal fade" id="ticketModal" tabindex="-1" aria-labelledby="ticketModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title fw-bold" id="ticketModalLabel">Vé của bạn</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="card border mb-3">
						<div class="card-body">
							<div class="row">
								<div class="col-8">
									<h6 class="fw-bold mb-2">Avengers: Endgame</h6>
									<p class="text-muted small mb-1">Rạp số 1 - Phòng chiếu VIP</p>
									<p class="text-muted small mb-1">20/01/2024 | 19:30 - 22:31</p>
									<p class="fw-bold mb-0 text-danger">Ghế: F8</p>
									<small class="text-muted">Mã vé: VE-001234</small>
								</div>
								<div class="col-4 text-center">
									<div class="bg-light p-2 rounded mb-2">
										<i class="fa-solid fa-qrcode fs-3 text-muted"></i>
									</div>
									<small class="text-muted">Quét tại cửa</small>
								</div>
							</div>
						</div>
					</div>
					<div class="card border">
						<div class="card-body">
							<div class="row">
								<div class="col-8">
									<h6 class="fw-bold mb-2">Avengers: Endgame</h6>
									<p class="text-muted small mb-1">Rạp số 1 - Phòng chiếu VIP</p>
									<p class="text-muted small mb-1">20/01/2024 | 19:30 - 22:31</p>
									<p class="fw-bold mb-0 text-danger">Ghế: F9</p>
									<small class="text-muted">Mã vé: VE-001235</small>
								</div>
								<div class="col-4 text-center">
									<div class="bg-light p-2 rounded mb-2">
										<i class="fa-solid fa-qrcode fs-3 text-muted"></i>
									</div>
									<small class="text-muted">Quét tại cửa</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
					<button type="button" class="btn btn-primary">
						<i class="fa-solid fa-download me-2"></i>Tải vé
					</button>
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
