<template>
  <div class="container py-4 py-md-5">
        <div class="row g-4">
            <div class="col-lg-12">
                <div class="bg-white rounded shadow-sm p-3 p-md-4 mb-4">
                    <!-- Tiêu đề bài viết  -->
                            <h1 class="fs-2 fs-md-1 fw-bold text-dark mb-3 text-uppercase">{{ chi_tiet_bai_viet.tieu_de }}</h1>
                            
                    <div class="d-flex flex-wrap align-items-center gap-3 pb-3 mb-4 border-bottom text-secondary small">
                        <span><i class="bi bi-calendar3 text-danger me-1"></i> {{ chi_tiet_bai_viet.ngay_tao }}</span>
                        <div class="ms-auto mt-2 mt-sm-0 d-flex align-items-center">
                            <span class="me-2">Chia sẻ:</span>
                            <a href="#"
                                class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white me-1"
                                style="width: 32px; height: 32px;">
                                <i class="fa-brands fa-2x fa-square-facebook"></i>
                            </a>
                            <a href="#"
                                class="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white me-1"
                                style="width: 32px; height: 32px;">
                                <i class="fa-brands fa-2x fa-square-twitter"></i>
                            </a>
                            <a href="#"
                                class="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white"
                                style="width: 32px; height: 32px;">
                                <i class="fa-solid fa-2x fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                    <div class="mb-4 rounded overflow-hidden text-center">
                        <img :src="chi_tiet_bai_viet.hinh_anh" alt=""
                            style="height: 500px;" class="img-fluid">
                    </div>
                    <div class="lh-lg">
                        <h3 class="fs-4 fw-semibold mb-3">Nội dung bài viết:</h3>
                        <div class="bg-warning-subtle border-start border-4 border-warning rounded p-4 my-4">
                            
                            <div v-html="chi_tiet_bai_viet.noi_dung"></div>
                        </div>
                    </div>
                    <!-- Tags -->
                    <div class="mt-4 pt-3 border-top">
                        <span class="fw-semibold text-secondary me-2">Tags:</span>
                        <a href="#"
                            class="badge rounded-pill bg-light text-secondary text-decoration-none me-1 mb-2 py-2 px-3">khuyến
                            mãi</a>
                        <a href="#"
                            class="badge rounded-pill bg-light text-secondary text-decoration-none me-1 mb-2 py-2 px-3">mua
                            1 tặng 1</a>
                        <a href="#"
                            class="badge rounded-pill bg-light text-secondary text-decoration-none me-1 mb-2 py-2 px-3">DZ
                            member</a>
                        <a href="#"
                            class="badge rounded-pill bg-light text-secondary text-decoration-none me-1 mb-2 py-2 px-3">vé
                            xem phim</a>
                        <a href="#"
                            class="badge rounded-pill bg-light text-secondary text-decoration-none me-1 mb-2 py-2 px-3">ưu
                            đãi</a>
                    </div>

                </div>
            </div>
            <div class="col-lg-12">
                <div class="bg-white rounded shadow-sm p-3 p-md-4 mb-4">
                    <h3 class="mb-4">Các Bài Viết Liên Quan</h3>
                    <div class="row">
                      <template v-for="(value, index) in list_bai_viet" :key="index">
                        <div class="col-lg-3 d-flex">
                            <div class="card h-100">
                                <img :src="value.hinh_anh"
                                    class="card-img-top" alt="..." style="height: 200px; object-fit: cover;">
                                <div class="card-body d-flex flex-column">
                                    <h6 class="card-title">{{ value.tieu_de }}</h6>
                                    <p class="card-text flex-grow-1"><small>{{ value.mo_ta_ngan }}</small></p>
                                </div>
                            </div>
                        </div>
                      </template>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
import apiUrl from '../../../utils/api'
export default {
    props: ["id_bai_viet"],
    data() {
        return {
            id_bai_viet: this.$route.params.id_bai_viet,
            chi_tiet_bai_viet: {},
        }
    },
    mounted() {
        this.loadChiTietBaiViet();
    },
    methods: {
        loadChiTietBaiViet() {
            var payload = {
                id: this.id_bai_viet
            }
            axios.post(apiUrl('client/chi-tiet-bai-viet/get-data'), payload,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("key_client"),
                },
            })
                .then((res) => {
                    if (res.data.status) {
                        this.chi_tiet_bai_viet = res.data.data;
                        this.list_bai_viet = res.data.data_bai_viet_khac;
                        this.list_bai_viet = res.data.data_bai_viet_khac.slice(0, 4);
                    } else {
                           this.$toast.error(res.data.message);
                        this.$router.push('/');
                    }
                });
        },
      
    }
}
</script>