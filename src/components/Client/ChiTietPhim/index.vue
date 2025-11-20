<template>
    <!-- Trailer Section -->
    <div class="">
        <div class="ratio ratio-16x9 shadow-lg overflow-hidden" style="height: 450px; object-fit: cover; ">
            <iframe :src="chi_tiet_phim.trailer" title="YouTube video player" allowfullscreen></iframe>
        </div>
    </div>

    <!-- Movie Details Container -->
    <div class="container py-5">
        <div class="row g-4">
            <!-- Poster Section -->
            <div class="col-md-4">
                <img :src="chi_tiet_phim.hinh_anh" alt="Movie Poster" class="img-fluid rounded shadow-lg mb-4">
                <div class="d-grid gap-3">
                    <button class="btn btn-warning py-3 fw-bold" data-bs-toggle="modal"
                        data-bs-target="#buyTicketModal">
                        <i class="fa-solid fa-ticket"></i> Mua Vé
                    </button>
                </div>
            </div>

            <!-- Movie Information Section -->
            <div class="col-md-8">
                <div class="mb-4">
                    <h1 class="fw-bold text-dark mb-3">{{ chi_tiet_phim.ten_phim || 'Sample Movie' }}</h1>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span v-for="(value, index) in chi_tiet_phim.the_loai?.split(',') || []" :key="index"
                            class="badge bg-primary rounded-pill px-3 py-2">
                            {{ value || 'N/A' }}
                        </span>
                    </div>
                </div>

                <div class="row g-3">
                    <!-- Detailed Information -->
                    <div class="col-lg-6">
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Thông tin chi tiết</h4>
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Đạo diễn:</span>
                                    <span>{{ chi_tiet_phim.dao_dien || 'N/A' }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Quốc gia:</span>
                                    <span>{{ chi_tiet_phim.quoc_gia || 'N/A' }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Ngày phát hành:</span>
                                    <span>{{ chi_tiet_phim.ngay_phat_hanh || 'N/A' }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Ngôn ngữ:</span>
                                    <span>{{ chi_tiet_phim.ngon_ngu || 'N/A' }}</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span class="fw-bold text-dark">Thời lượng:</span>
                                    <span>{{ chi_tiet_phim.thoi_luong ? chi_tiet_phim.thoi_luong + ' phút' : 'N/A'
                                        }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cast and Producer -->
                    <div class="col-lg-6">
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Diễn viên chính</h4>
                        <div class="card shadow-sm mb-4">
                            <div class="card-body">
                                <p class="mb-0">{{ chi_tiet_phim.dien_vien || 'N/A' }}</p>
                            </div>
                        </div>
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Nhà sản xuất</h4>
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <p class="mb-0">{{ chi_tiet_phim.nha_san_xuat || 'N/A' }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Synopsis -->
                <div class="mt-4">
                    <h4 class="fw-bold mb-3 border-bottom pb-2">Nội dung phim</h4>
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <p class="fs-7 lh-base text-dark text-justify">
                                {{ chi_tiet_phim.noi_dung || 'Không có mô tả.' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4 mt-5">
            <div class="col-lg-12">
                <div class="bg-white rounded shadow-sm p-4 h-100">
                    <h5 class="fs-5 fw-bold mb-4 border-bottom pb-2">Bình Luận</h5>
                    <div class="mb-4">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <img src="https://i.pravatar.cc/48?img=1" alt="User Avatar" class="rounded-circle"
                                    width="45" height="45">
                            </div>
                            <div class="col">
                                <textarea id="noidung"  class="form-control" rows="1"
                                    placeholder="Viết bình luận của bạn..." required></textarea>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-danger px-4 py-2 btn-sm fw-semibold">Gửi</button>
                            </div>
                        </div>
                    </div>
                    <div class="border-top pt-4">
                        <div class="mb-3 mt-2 bg-secondary bg-opacity-10 border border-secondary rounded-3 p-3">
                            <div class="d-flex align-items-start gap-3">
                                <img src="https://i.pravatar.cc/48?img=10" alt="User Avatar" class="rounded-circle"
                                    width="45" height="45">
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h6 class="fw-bold mb-0">Nguyễn Văn A</h6>
                                        <small class="text-muted">12/09/2024</small>
                                    </div>
                                    <p class="mb-0 text-secondary">
                                        Bộ phim rất hay, nội dung gay cấn từ đầu đến cuối. Hiệu ứng hình ảnh cực kỳ ấn tượng!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3 mt-2 bg-secondary bg-opacity-10 border border-secondary rounded-3 p-3">
                            <div class="d-flex align-items-start gap-3">
                                <img src="https://i.pravatar.cc/48?img=32" alt="User Avatar" class="rounded-circle"
                                    width="45" height="45">
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h6 class="fw-bold mb-0">Trần Minh Châu</h6>
                                        <small class="text-muted">10/09/2024</small>
                                    </div>
                                    <p class="mb-0 text-secondary">
                                        Diễn viên diễn xuất chắc tay, âm nhạc cuốn hút. Mình sẽ rủ bạn bè đi xem lần nữa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Movies Section -->
        <div class="bg-white rounded shadow-sm p-3 p-md-4 mt-3">
            <h4>Các phim đang chiếu khác</h4>
            <div class="row">
                <template v-for="(value, index) in list_phim_khac" :key="index">
                    <div class="col-lg-3 col-md-4 rounded mb-3" style="flex: 0 0 auto;">
                        <div class="rounded position-relative"
                            style="transition: transform 0.3s ease, box-shadow 0.3s ease; overflow: hidden; height: 100%;"
                            onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)'; this.querySelector('.btn-overlay').style.opacity = '1'"
                            onmouseout="this.style.transform='none'; this.style.boxShadow='none'; this.querySelector('.btn-overlay').style.opacity = '0'">

                            <div class="card-img-top">
                                <img :src="value.hinh_anh" class="img-fluid" alt=""
                                    style="height: 500px; object-fit: cover;">
                            </div>

                            <div class="btn-overlay text-center position-absolute w-100"
                                style="top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0; transition: opacity 0.3s ease;">
                                <a :href="`/chi-tiet-phim/${value.id}`">
                                    <button class="btn btn-warning p-2 " style="width: 170px;"><i
                                            class="fa-solid fa-ticket"></i>Mua
                                        vé</button>
                                </a>
                                <br>
                                <a :href="`/chi-tiet-phim/${value.id}`">
                                    <button class="btn btn-outline-light p-2 mt-2" style="width: 170px;"><i
                                            class="fa-solid fa-circle-play"></i>Trailer</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>

    <!-- Modal Ticket (unchanged) -->
    <div class="modal fade" id="buyTicketModal" tabindex="-1" aria-labelledby="movieScheduleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-light border-bottom">
                    <h4 class="modal-title fs-3 fw-bold text-dark" id="movieScheduleModalLabel">
                        Lịch chiếu: {{ chi_tiet_phim.ten_phim || 'Sample Movie' }}
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="mb-4">
                        <h5 class="fw-semibold mb-3 text-dark">Chọn ngày xem</h5>
                        <div class="d-flex flex-wrap gap-2 overflow-auto pb-2">
                            <button v-for="(value, index) in ngayChieu" :key="index"
                                class="btn btn-outline-secondary btn-sm px-3 py-2"
                                :class="{ 'btn-primary': selectedDate === value.ngay_chieu }"
                                @click="selectedDate = value.ngay_chieu">
                                {{ formatDate(value.ngay_chieu) }}
                            </button>
                        </div>
                    </div>
                    <div>
                        <h5 class="fw-semibold mb-3 text-dark">Suất chiếu</h5>
                        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                            <div class="col" v-for="(value, index) in suatChieuTheoNgay" :key="index">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    {{ formatTime(value.thoi_gian_bat_dau) }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-top">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Tiếp tục đặt vé</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import apiUrl from '../../../utils/api';
export default {
    props: ["id_phim"],
    data() {
        return {
            id_phim: this.$route.params.id_phim,
            chi_tiet_phim: {},
            suat_chieu_phim: [],
            selectedDate: false,
            list_phim_khac: [],

            // noi_dung_binh_luan: "",
            // list_binh_luan: [],
        }
    },
    computed: {
        ngayChieu() {
            if (!this.suat_chieu_phim || this.suat_chieu_phim.length === 0) {
                return [];
            }
            const allDates = this.suat_chieu_phim.map(item => item.ngay_chieu);
            const uniqueDates = Array.from(new Set(allDates));
            return uniqueDates.map(date => ({ ngay_chieu: date }));
        },
        suatChieuTheoNgay() {
            return this.selectedDate ? this.suat_chieu_phim.filter(item => item.ngay_chieu === this.selectedDate)
                : [];
        }
    },
    mounted() {
        this.loadChiTietPhim();
    },
    methods: {
        formatTime(time) {
            return time.slice(0, 5);
        },
        formatDate(date) {
            const d = new Date(date);
            return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        },
        loadChiTietPhim() {
            var payload = {
                id: this.id_phim
            }
            axios.post(apiUrl('client/chi-tiet-phim/get-data'), payload, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("key_client")
                }
            })
                .then((res) => {
                    if (res.data.status) {
                        this.chi_tiet_phim = res.data.data_phim;
                        this.suat_chieu_phim = res.data.data_suat_chieu;
                        this.list_phim_khac = res.data.list_phim_khac;
                        this.list_phim_khac = this.list_phim_khac.filter(phim => phim.tinh_trang == 2).slice(0, 4);
                        console.log(this.list_phim_khac);

                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        }
    },
}
</script>
<style></style>