<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-lg-4">
				<div class="card shadow border-0">
					<div class="card-body p-0">
						<!-- Profile Header -->
						<div class="text-center p-4 bg-light border-bottom">
							<div class="mb-3">
								<img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg"
									alt="Avatar" class="rounded-circle border border-2" width="100" height="100"
									style="object-fit: cover" />
							</div>
							<h5 class="fw-bold mb-1">{{ profile.ho_va_ten }}</h5>
							<p class="text-muted small mb-0">
								<i class="fa-regular fa-envelope me-1"></i>{{ profile.email }}
							</p>
						</div>

						<!-- Stats -->
						<div class="p-4">
							<div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
								<div class="d-flex align-items-center">
									<div class="bg-light rounded-circle p-2 me-3">
										<i class="fa-solid fa-receipt text-primary"></i>
									</div>
									<div>
										<div class="text-muted small mb-1">Tổng đơn hàng</div>
										<div class="fw-bold fs-5 mb-0">1</div>
									</div>
								</div>
							</div>
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex align-items-center">
									<div class="bg-light rounded-circle p-2 me-3">
										<i class="fa-solid fa-wallet text-success"></i>
									</div>
									<div>
										<div class="text-muted small mb-1">Tổng chi tiêu</div>
										<div class="fw-bold fs-5 mb-0 text-success">415.000 ₫</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-8">
				<div class="card">
					<div class="card-body">
						<ul class="nav nav-tabs nav-primary nav-fill text-center" role="tablist">
							<li class="nav-item" role="presentation">
								<a class="nav-link active" data-bs-toggle="tab" href="#profile" role="tab"
									aria-selected="true">
									<div class="d-flex align-items-center">
										<div class="tab-icon">
											<i class="bx bx-home font-18 me-1"></i>
										</div>
										<div class="tab-title">Thông Tin Cá Nhân</div>
									</div>
								</a>
							</li>
							<li class="nav-item" role="presentation">
								<a class="nav-link" data-bs-toggle="tab" href="#changepassword" role="tab"
									aria-selected="false" tabindex="-1">
									<div class="d-flex align-items-center">
										<div class="tab-icon">
											<i class="bx bx-user-pin font-18 me-1"></i>
										</div>
										<div class="tab-title">Đổi Mật Khẩu</div>
									</div>
								</a>
							</li>
							<li class="nav-item" role="presentation">
								<a class="nav-link" data-bs-toggle="tab" href="#history" role="tab"
									aria-selected="false" tabindex="-1">
									<div class="d-flex align-items-center">
										<div class="tab-icon">
											<i class="fa-solid fa-clock-rotate-left me-1"></i>
										</div>
										<div class="tab-title">Lịch Sử Giao Dịch</div>
									</div>
								</a>
							</li>
						</ul>
						<div class="tab-content py-3">
							<div class="tab-pane fade active show" id="profile" role="tabpanel">
								<div class="row">
									<div class="col-6">
										<div class="mb-2">
											<label for="">Họ và tên</label>
											<input v-model="update_profile.ho_va_ten" type="text" class="form-control mt-2" />
										</div>
									</div>
									<div class="col-6">
										<div class="mb-2">
											<label for="">Email</label>
											<input v-model="update_profile.email" type="text" class="form-control mt-2"
												disabled />
										</div>
									</div>
									<div class="col-6">
										<div class="mb-2">
											<label for="">Ngày sinh</label>
											<input v-model="update_profile.ngay_sinh" type="date" class="form-control mt-2" />
										</div>
									</div>
									<div class="col-6">
										<div class="mb-2">
											<label for="">Số điện thoại</label>
											<input v-model="update_profile.so_dien_thoai" type="text" class="form-control mt-2"
												maxlength="10" />
										</div>
									</div>
								</div>
								<div class="row mt-3">
									<div class="col-lg-12 text-end">
										<button @click="updateProfile()" class="btn btn-success">Cập nhật</button>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="changepassword" role="tabpanel">
								<div class="card">
									<div class="row g-0">
										<div class="col-lg-6 border-end">
											<div class="card-body">
												<div class="">
													<div class="mb-3 mt-2">
														<label class="form-label">Mật Khẩu Hiện Tại</label>
														<div class="input-group">
															<input :type="showPassword.password ? 'text' : 'password'"
																v-model="update_password_profile.password" class="form-control"
																placeholder="Nhập mật khẩu cũ" />
															<button type="button"
																@click="showPassword.password = !showPassword.password"
																class="btn btn-outline-secondary password-toggle">
																<i :class="showPassword.password ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
															</button>
														</div>
													</div>
													<div class="mb-3 mt-2">
														<label class="form-label">Mật Khẩu Mới</label>
														<div class="input-group">
															<input  :type="showPassword.new_password ? 'text' : 'password'" v-model="update_password_profile.new_password"  class="form-control"
																placeholder="Nhập mật khẩu mới" required />
															<button type="button"
																@click="showPassword.new_password = !showPassword.new_password"
																class="btn btn-outline-secondary password-toggle">
																<i :class="showPassword.new_password ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
															</button>
														</div>
													</div>
													<div class="mb-3">
														<label class="form-label">Xác Nhận Mật Khẩu</label>
														<div class="input-group">
															<input :type="showPassword.confirm_password ? 'text' : 'password'" v-model="update_password_profile.confirm_password"  class="form-control"
																placeholder="Nhập xác nhận mật khẩu mới" required />
															<button type="button"
																@click="showPassword.confirm_password = !showPassword.confirm_password"
																class="btn btn-outline-secondary password-toggle">
																<i :class="showPassword.confirm_password ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
															</button>
														</div>
													</div>
													<div class="mb-3 text-end">
														<router-link to="/client/quen-mat-khau">
															Quên mật khẩu
														</router-link>
													</div>
													<div class="d-grid gap-2">
														<button @click="updatePasswordProfile()" type="button" class="btn btn-primary">
															Đổi Mật Khẩu
														</button>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<img src="https://cdn.tgdd.vn/Files/2019/12/07/1225665/huong-dan-thay-doi-mat-khau-tai-khoan-google-don-gian-tren-dien-thoai-may-tinh-7.jpg"
												class="card-img login-img" alt="..." style="height: 325px" />
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="history" role="tabpanel">
								<div class="card">
									<div class="card-body">
										<h5 class="card-title mb-4">Lịch Sử Đơn Hàng</h5>
										<table class="table table-striped table-bordered">
											<thead>
												<tr class="text-center">
													<th>#</th>
													<th>Mã Đơn Hàng</th>
													<th>Ngày Đặt</th>
													<th>Tổng Tiền</th>
													<th>Giảm Giá</th>
													<th>Tiền Thực Nhận</th>
													<th>Trạng Thái</th>
													<th>Thao Tác</th>
												</tr>
											</thead>
											<tbody>
												<tr class="text-nowrap">
													<td class="text-center align-middle">1</td>
													<td class="align-middle">DH001</td>
													<td class="text-center align-middle">01/01/2024</td>
													<td class="text-end align-middle">500.000 ₫</td>
													<td class="text-end align-middle">50.000 ₫</td>
													<td class="text-end align-middle">450.000 ₫</td>
													<td class="align-middle text-center">
														<button class="btn btn-success btn-sm w-100">
															Đã Thanh Toán
														</button>
													</td>
													<td class="text-center align-middle">
														<button class="btn btn-info btn-sm me-1" title="Xem chi tiết">
															<i class="fas fa-eye"></i>
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import apiUrl from "../../../utils/api";
export default {
	data() {
		return {
			profile: {
				ho_va_ten: "",
				email: "",
				ngay_sinh: "",
				so_dien_thoai: "",
			},
			update_profile: {
				ho_va_ten: "",
				email: "",
				ngay_sinh: "",
				so_dien_thoai: "",
			},
			update_password_profile: {
                password: '',
                new_password: '',
                confirm_password: ''	
            },
			showPassword: {
                password: false,
                new_password: false,
                confirm_password: false
            }
		};
	},
	mounted() {
		this.loadData();
	},
	methods: {
		loadData() {
			axios
				.get(apiUrl("client/profile/get-data"), {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("key_client"),
					},
				})
				.then((res) => {
					if (res.data.status) {
						this.profile = res.data.data;
                        this.update_profile = { ...res.data.data };
						console.log(this.update_profile);
					} else {
						this.$toast.error(res.data.message);
					}
				})
				.catch((res) => {
					const list = Object.values(res.response.data.errors);
					list.forEach((v, i) => {
						this.$toast.error(v[0]);
					});
				});
		},
		updateProfile() {
			axios
				.post(apiUrl("client/profile/update"), this.update_profile, {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("key_client"),
					},
				})
				.then((res) => {
					if (res.data.status) {
						this.loadData();
						this.$toast.success(res.data.message);
					} else {
						this.$toast.error(res.data.message);
					}
				})
				.catch((res) => {
					const list = Object.values(res.response.data.errors);
					list.forEach((v, i) => {
						this.$toast.error(v[0]);
					});
				});
		},
		updatePasswordProfile() {
			axios
				.post(apiUrl("client/doi-mat-khau"), this.update_password_profile, {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("key_client"),
					},
				})
				.then((res) => {
					if (res.data.status) {
						this.$toast.success(res.data.message);
                        this.update_password_profile = {
                            password: '',
                            new_password: '',
                            confirm_password: ''
                        };
					} else {
						this.$toast.error(res.data.message);
					}
				})
				.catch((res) => {
					const list = Object.values(res.response.data.errors);
					list.forEach((v, i) => {
						this.$toast.error(v[0]);
					});
				});
		},
	},
};
</script>

<style></style>
