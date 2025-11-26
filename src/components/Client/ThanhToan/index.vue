<template>
    <div class="container mt-4">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Đang tải...</span>
            </div>
            <p class="mt-3 text-muted">Đang tải thông tin thanh toán...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="alert alert-danger text-center">
            <i class="fas fa-exclamation-triangle me-2"></i>
            {{ error }}
            <div class="mt-3">
                <button @click="goBack" class="btn btn-secondary">
                    <i class="fas fa-arrow-left me-2"></i>Quay lại
                </button>
            </div>
        </div>

        <!-- Main Content -->
        <div v-else>
            <!-- Header -->
            <div class="text-center mb-4">
                <h2 class="fw-bold">
                    <i class="fas fa-credit-card me-2 text-primary"></i>
                    Thanh Toán
                </h2>
                <p class="text-muted">Hoàn tất đơn hàng của bạn</p>
            </div>

            <div class="row g-4">
                <!-- Left Column - Order Summary -->
                <div class="col-lg-7">
                    <div class="card shadow-sm">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0">
                                <i class="fas fa-ticket-alt me-2"></i>
                                Chi Tiết Đơn Hàng
                            </h5>
                        </div>
                        
                        <div class="card-body">
                            <!-- Movie Info -->
                            <div class="mb-4" v-if="donHang.phim">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img :src="donHang.phim.hinh_anh" 
                                             alt="Movie Poster" 
                                             class="img-fluid rounded shadow-sm"
                                             style="width: 100%; height: auto; object-fit: cover;">
                                    </div>
                                    <div class="col-md-8">
                                        <h4 class="fw-bold">{{ donHang.phim.ten_phim }}</h4>
                                        <div class="mb-2">
                                            <i class="fas fa-calendar-alt text-primary me-2"></i>
                                            <span>{{ formatDate(donHang.phim.ngay_chieu) }}</span>
                                        </div>
                                        <div class="mb-2">
                                            <i class="fas fa-clock text-primary me-2"></i>
                                            <span>{{ donHang.phim.thoi_gian_bat_dau }}</span>
                                        </div>
                                        <div class="mb-2">
                                            <i class="fas fa-door-open text-primary me-2"></i>
                                            <span>{{ donHang.phim.ten_phong }}</span>
                                        </div>
                                        <div class="mb-2" v-if="donHang.phim.the_loai">
                                            <i class="fas fa-film text-primary me-2"></i>
                                            <span>{{ donHang.phim.the_loai }}</span>
                                        </div>
                                        <div class="mb-2" v-if="donHang.phim.thoi_luong">
                                            <i class="fas fa-hourglass-half text-primary me-2"></i>
                                            <span>{{ donHang.phim.thoi_luong }} phút</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <!-- Seats -->
                            <div class="mb-4" v-if="donHang.ve && donHang.ve.length > 0">
                                <h5 class="fw-bold">
                                    <i class="fas fa-couch me-2 text-warning"></i>Ghế đã chọn
                                </h5>
                                <div class="list-group">
                                    <div v-for="(ve, index) in donHang.ve" 
                                         :key="index" 
                                         class="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Ghế {{ ve.ten_ghe }}</span>
                                        <span class="badge bg-warning text-dark">{{ formatVND(ve.gia_ve) }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Services -->
                            <div v-if="donHang.dich_vu && donHang.dich_vu.length > 0" class="mb-4">
                                <h5 class="fw-bold">
                                    <i class="fas fa-concierge-bell me-2 text-success"></i>Dịch vụ
                                </h5>
                                <div class="list-group">
                                    <div v-for="(dichVu, index) in donHang.dich_vu" 
                                         :key="index" 
                                         class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <span>{{ dichVu.ten_dich_vu }}</span>
                                            <span class="badge bg-secondary ms-2">x{{ dichVu.so_luong }}</span>
                                        </div>
                                        <span class="badge bg-success">{{ formatVND(dichVu.thanh_tien) }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Voucher Info -->
                            <div v-if="donHang.voucher" class="alert alert-success mb-4">
                                <i class="fas fa-tag me-2"></i>
                                <span>Mã giảm giá: <strong>{{ donHang.voucher.ma_code }}</strong></span>
                                <span class="float-end">Giảm {{ (donHang.voucher.so_giam_gia * 100).toFixed(0) }}%</span>
                            </div>

                            <hr>

                            <!-- Total -->
                            <div class="bg-light p-3 rounded">
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Tổng vé:</span>
                                    <span class="fw-bold">{{ formatVND(donHang.summary?.tong_tien_ve || 0) }}</span>
                                </div>
                                <div v-if="donHang.summary?.tong_tien_dich_vu > 0" class="d-flex justify-content-between mb-2">
                                    <span>Tổng dịch vụ:</span>
                                    <span class="fw-bold">{{ formatVND(donHang.summary.tong_tien_dich_vu) }}</span>
                                </div>
                                <div v-if="donHang.summary?.giam_gia > 0" class="d-flex justify-content-between mb-2 text-success">
                                    <span>Giảm giá:</span>
                                    <span class="fw-bold">-{{ formatVND(donHang.summary.giam_gia) }}</span>
                                </div>
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <strong class="fs-5">Tổng thanh toán:</strong>
                                    <strong class="fs-5 text-danger">{{ formatVND(donHang.summary?.tong_thanh_toan || 0) }}</strong>
                                </div>
                            </div>

                            <!-- Order Info -->
                            <div class="mt-3">
                                <div class="row">
                                    <div class="col-6">
                                        <small class="text-muted">Mã đơn hàng:</small><br>
                                        <strong>{{ donHang.don_hang?.ma_don_hang }}</strong>
                                    </div>
                                    <div class="col-6 text-end">
                                        <small class="text-muted">Trạng thái:</small><br>
                                        <span :class="donHang.don_hang?.is_thanh_toan ? 'badge bg-success' : 'badge bg-warning'">
                                            {{ donHang.don_hang?.is_thanh_toan ? 'Đã thanh toán' : 'Chờ thanh toán' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Payment Methods -->
                <div class="col-lg-5">
                    <div class="card shadow-sm">
                        <div class="card-header bg-warning text-dark">
                            <h5 class="mb-0">
                                <i class="fas fa-qrcode me-2"></i>
                                Thanh Toán QR Code
                            </h5>
                        </div>
                        
                        <div class="card-body">
                            <!-- QR Code Display -->
                            <div class="mb-4">
                                <div class="card bg-light">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">
                                            <i class="fas fa-qrcode me-2"></i>Quét mã QR để thanh toán
                                        </h5>
                                        <div class="bg-white p-3 rounded d-inline-block shadow-sm my-3">
                                            <img :src="donHang.thanh_toan?.link_qr_code" 
                                                 alt="QR Code" 
                                                 style="width: 280px; height: 280px;"
                                                 @error="handleQRError">
                                        </div>
                                        <div class="text-start">
                                            <table class="table table-borderless table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Ngân hàng:</strong></td>
                                                        <td>{{ donHang.thanh_toan?.ngan_hang || 'MB Bank' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Số tài khoản:</strong></td>
                                                        <td>{{ donHang.thanh_toan?.so_tai_khoan || '1910061030119' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Chủ TK:</strong></td>
                                                        <td>{{ donHang.thanh_toan?.chu_tai_khoan || 'RAP CHIEU PHIM K24' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Số tiền:</strong></td>
                                                        <td class="text-danger fw-bold">{{ formatVND(donHang.summary?.tong_thanh_toan || 0) }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Nội dung:</strong></td>
                                                        <td><code>{{ donHang.thanh_toan?.noi_dung }}</code></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="alert alert-info mt-3 mb-0">
                                            <h6><i class="fas fa-info-circle me-2"></i>Hướng dẫn thanh toán:</h6>
                                            <ol class="mb-0 text-start">
                                                <li>Mở ứng dụng ngân hàng của bạn</li>
                                                <li>Chọn chức năng quét mã QR</li>
                                                <li>Quét mã QR phía trên</li>
                                                <li>Xác nhận thông tin và hoàn tất thanh toán</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="d-grid gap-2">
                                <button @click="handlePayment" 
                                        class="btn btn-success btn-lg"
                                        :disabled="donHang.don_hang?.is_thanh_toan">
                                    <i class="fas fa-check-circle me-2"></i>
                                    {{ donHang.don_hang?.is_thanh_toan ? 'Đã thanh toán' : 'Xác Nhận Đã Thanh Toán' }}
                                </button>
                                <button @click="goBack" class="btn btn-secondary">
                                    <i class="fas fa-arrow-left me-2"></i>Quay lại
                                </button>
                            </div>

                            <!-- Security Notice -->
                            <div class="alert alert-success mt-3 mb-0">
                                <small>
                                    <i class="fas fa-shield-alt me-2"></i>
                                    Giao dịch được bảo mật bởi SSL
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import apiUrl from '../../../utils/api';

export default {
    name: 'ThanhToan',
    props: ['ma_don_hang'],
    data() {
        return {
            loading: true,
            error: null,
            donHang: {
                don_hang: null,
                khach_hang: null,
                phim: null,
                ve: [],
                dich_vu: [],
                voucher: null,
                summary: null,
                thanh_toan: null
            }
        };
    },
    mounted() {
        this.loadOrderDetails();
    },
    watch: {
        '$route.params.ma_don_hang'(newVal) {
            if (newVal) {
                this.loadOrderDetails();
            }
        }
    },
    methods: {
        async loadOrderDetails() {
            try {
                this.loading = true;
                this.error = null;

                const maDonHang = this.ma_don_hang || this.$route.params.ma_don_hang;
                
                if (!maDonHang) {
                    this.error = 'Mã đơn hàng không hợp lệ';
                    this.loading = false;
                    return;
                }

                const response = await axios.get(
                    apiUrl(`client/dat-ve/chi-tiet-thanh-toan-don-hang/${maDonHang}`),
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('key_client')}`
                        }
                    }
                );

                if (response.data.status) {
                    this.donHang = response.data.data;
                    console.log('Dữ liệu đơn hàng:', this.donHang);
                } else {
                    this.error = response.data.message || 'Không thể tải thông tin đơn hàng';
                }
            } catch (err) {
                console.error('Error loading order details:', err);
                if (err.response?.status === 401) {
                    this.error = 'Vui lòng đăng nhập để xem đơn hàng';
                    setTimeout(() => {
                        this.$router.push('/client/dang-nhap');
                    }, 2000);
                } else if (err.response?.status === 403) {
                    this.error = 'Bạn không có quyền xem đơn hàng này';
                } else if (err.response?.status === 404) {
                    this.error = 'Không tìm thấy đơn hàng';
                } else {
                    this.error = 'Có lỗi xảy ra khi tải thông tin đơn hàng';
                }
            } finally {
                this.loading = false;
            }
        },

        handlePayment() {
            if (this.donHang.don_hang?.is_thanh_toan) {
                this.$toast.info('Đơn hàng này đã được thanh toán');
                return;
            }

            const confirmed = confirm(
                'Bạn đã chuyển khoản thành công?\n\n' +
                'Nhấn OK để xác nhận đơn hàng.\n\n' +
                'Lưu ý: Vui lòng chỉ xác nhận khi bạn đã chuyển khoản thành công!'
            );
            
            if (confirmed) {
                this.$toast.success(
                    'Cảm ơn bạn! Đơn hàng của bạn đang được xử lý.\n\n' +
                    'Chúng tôi sẽ xác nhận thanh toán trong vài phút.\n\n' +
                    'Vui lòng đến rạp đúng giờ chiếu và mang theo mã đơn hàng: ' + this.donHang.don_hang?.ma_don_hang
                );
                
                // Redirect về trang chủ sau 3 giây
                setTimeout(() => {
                    this.$router.push('/client');
                }, 3000);
            }
        },

        goBack() {
            this.$router.back();
        },

        handleQRError(event) {
            console.error('Lỗi tải QR code:', event);
            event.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="280"%3E%3Crect width="280" height="280" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23999"%3EKhông tải được QR%3C/text%3E%3C/svg%3E';
        },

        formatVND(number) {
            if (!number) return '0₫';
            return new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'VND' 
            }).format(number);
        },

        formatDate(date) {
            if (!date) return '';
            const thuVN = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
            const d = new Date(date);
            return `${thuVN[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        }
    }
};
</script>

<style scoped>
.text-purple {
    color: #6f42c1;
}

.spinner-border {
    width: 3rem;
    height: 3rem;
}

.card {
    border-radius: 10px;
    overflow: hidden;
}

.card-header {
    border-bottom: none;
}

.list-group-item {
    border-left: none;
    border-right: none;
}

.list-group-item:first-child {
    border-top: none;
}

.list-group-item:last-child {
    border-bottom: none;
}

code {
    background-color: #f8f9fa;
    padding: 2px 6px;
    border-radius: 3px;
    color: #d63384;
}
</style>
