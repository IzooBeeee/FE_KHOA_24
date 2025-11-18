<template>
    <div class="">
        <div class="ratio ratio-16x9 shadow-lg overflow-hidden" style="height: 450px; object-fit: cover">
            <iframe :src="chi_tiet_phim.trailer" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    <div class="container py-5">
        <div class="row g-4">
            <div class="col-md-4">
                <img :src="chi_tiet_phim.hinh_anh" alt="Movie Poster" class="img-fluid rounded shadow-lg mb-4" />
                <div class="d-grid gap-3">
                    <button class="btn btn-warning py-3 fw-bold" data-bs-toggle="modal"
                        data-bs-target="#buyTicketModal">
                        <i class="fa-solid fa-ticket"></i> Mua Vé
                    </button>
                </div>
            </div>
            <div class="col-md-8">
                <div class="mb-4">
                    <h1 class="fw-bold text-dark mb-3">{{ chi_tiet_phim.ten_phim }}</h1>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge bg-primary rounded-pill px-3 py-2">Hành động</span>
                        <span class="badge bg-primary rounded-pill px-3 py-2">Phiêu lưu</span>
                        <span class="badge bg-primary rounded-pill px-3 py-2">Gia đình</span>
                    </div>
                </div>

                <div class="row g-3">
                    <div class="col-lg-6">
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Thông tin chi tiết</h4>
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Đạo diễn:</span>
                                    <span>{{ chi_tiet_phim.dao_dien }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Quốc gia:</span>
                                    <span>{{ chi_tiet_phim.quoc_gia }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Ngày phát hành:</span>
                                    <span>{{ chi_tiet_phim.ngay_phat_hanh }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <span class="fw-bold text-dark">Ngôn ngữ:</span>
                                    <span>{{ chi_tiet_phim.ngon_ngu }}</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span class="fw-bold text-dark">Thời lượng:</span>
                                    <span>{{ chi_tiet_phim.thoi_luong }} phút</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Diễn viên chính</h4>
                        <div class="card shadow-sm mb-4">
                            <div class="card-body">
                                <p class="mb-0">{{ chi_tiet_phim.dien_vien }}</p>
                            </div>
                        </div>
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Nhà sản xuất</h4>
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <p class="mb-0">{{ chi_tiet_phim.nha_san_xuat }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <h4 class="fw-bold mb-3 border-bottom pb-2">Nội dung phim</h4>
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <p class="fs-7 lh-base text-dark text-justify">
                                {{ chi_tiet_phim.noi_dung }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded shadow-sm p-3 p-md-4 mt-3">
            <h4>Các phim đang chiếu khác</h4>
            <div class="row">
                <div v-for="(phim, index) in list_phim_khac.slice(0, 4)" :key="phim.id || index"
                    class="col-lg-3 col-md-4 rounded mb-3" style="flex: 0 0 auto">
                    <div class="rounded position-relative phim-card" :style="{
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        overflow: 'hidden',
                        height: '100%',
                    }" @mouseover="handleMouseOver($event)" @mouseout="handleMouseOut($event)">
                        <div class="card-img-top">
                            <img :src="phim.hinh_anh" class="img-fluid" alt=""
                                style="height: 500px; object-fit: cover" />
                        </div>
                        <div class="btn-overlay text-center position-absolute w-100" :style="{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                        }">
                            <router-link :to="`/chi-tiet-phim/${phim.id}`">
                                <button class="btn btn-warning p-2" style="width: 170px">
                                    <i class="fa-solid fa-ticket"></i>Mua vé
                                </button>
                            </router-link>
                            <br />
                            <router-link :to="`/chi-tiet-phim/${phim.id}`">
                                <button class="btn btn-outline-light p-2 mt-2" style="width: 170px">
                                    <i class="fa-solid fa-circle-play"></i>Trailer
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="buyTicketModal" tabindex="-1" aria-labelledby="movieScheduleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-light border-bottom">
                    <h4 class="modal-title fs-3 fw-bold text-dark" id="movieScheduleModalLabel">
                        Lịch chiếu: Bạch Tuyết và Bảy Chú Lùn
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="mb-4">
                        <h5 class="fw-semibold mb-3 text-dark">Chọn ngày xem</h5>
                        <div class="d-flex flex-wrap gap-2 overflow-auto pb-2">
                            <button class="btn btn-primary btn-sm px-3 py-2">
                                10/05/2025
                            </button>
                            <button class="btn btn-outline-secondary btn-sm px-3 py-2">
                                11/05/2025
                            </button>
                            <button class="btn btn-outline-secondary btn-sm px-3 py-2">
                                12/05/2025
                            </button>
                            <button class="btn btn-outline-secondary btn-sm px-3 py-2">
                                13/05/2025
                            </button>
                        </div>
                    </div>
                    <div>
                        <h5 class="fw-semibold mb-3 text-dark">Suất chiếu</h5>
                        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    09:00
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    11:30
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    14:00
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    16:30
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    19:00
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 py-2">
                                    21:30
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-top">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary">Tiếp tục đặt vé</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import apiUrl from "../../../utils/api";

export default {
    props: ["id_phim"],
    data() {
        return {
            id_phim: this.$route.params.id_phim,
            chi_tiet_phim: {},
            list_phim_khac: [],
        };
    },
    mounted() {
        this.loadChiTietPhim();
    },
    watch: {
        $route(to, from) {
            // Khi route thay đổi, cập nhật id_phim và load lại dữ liệu
            if (to.params.id_phim !== from.params.id_phim) {
                this.id_phim = to.params.id_phim;
                this.loadChiTietPhim();
            }
        },
    },
    methods: {
        loadChiTietPhim() {
            var payload = {
                id: this.id_phim,
            };
            axios
                .post(apiUrl("client/chi-tiet-phim/get-data"), payload, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("key_client"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.chi_tiet_phim = res.data.data_phim;
                        this.list_phim_khac = res.data.list_phim_khac || [];
                        console.log(this.chi_tiet_phim);
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((error) => {
                    console.error("Lỗi khi load chi tiết phim:", error);
                    if (error.response) {
                        this.$toast.error(error.response.data?.message || "Có lỗi xảy ra");
                    } else {
                        this.$toast.error("Không thể kết nối đến server");
                    }
                });
        },
        handleMouseOver(event) {
            const card = event.currentTarget;
            const overlay = card.querySelector(".btn-overlay");
            card.style.transform = "translateY(-8px)";
            card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            if (overlay) {
                overlay.style.opacity = "1";
            }
        },
        handleMouseOut(event) {
            const card = event.currentTarget;
            const overlay = card.querySelector(".btn-overlay");
            card.style.transform = "none";
            card.style.boxShadow = "none";
            if (overlay) {
                overlay.style.opacity = "0";
            }
        },
    },
};
</script>
<style></style>