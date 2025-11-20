<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark py-0" style="background-color: #000957">
            <div class="container">
                <router-link to="/" class="navbar-brand fs-4 fw-bold text-decoration-none">
                    <span class="text-warning">DZ</span>Cinema
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <router-link to="/">
                            <li class="nav-item">
                                <a class="nav-link text-light fs-6" aria-current="page">Trang Chủ</a>
                            </li>
                        </router-link>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light fs-6" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Phim
                            </a>
                            <ul class="dropdown-menu">
                                <router-link to="/client/phim/dang-chieu">
                                    <li><a class="dropdown-item">Phim Đang Chiếu</a></li>
                                </router-link>
                                <router-link to="/client/phim/sap-chieu">
                                    <li><a class="dropdown-item">Phim Sắp Chiếu</a></li>
                                </router-link>
                            </ul>
                        </li>
                        <router-link to="/client/bai-viet">
                            <li class="nav-item">
                                <a class="nav-link text-light fs-6">Bài Viết</a>
                            </li>
                        </router-link>
                        <router-link to="/client/about">
                            <li class="nav-item">
                                <a class="nav-link text-light fs-6">Về chúng tôi</a>
                            </li>
                        </router-link>
                    </ul>
                    <div class="dropdown my-3">
                        <template v-if="isLoggedIn">
                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg"
                                    class="user-img" style="height: 35px; object-fit: cover" />
                                <div class="user-info ps-3 pe-3">
                                    <p class="user-name mb-0 text-light">{{ ho_va_ten }}</p>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <router-link to="/client/profile">
                                    <li>
                                        <a class="dropdown-item" href="javascript:;"><i class="bx bx-user"></i>
                                            <span>Thông tin cá nhân</span></a>
                                    </li>
                                </router-link>
                                <li>
                                    <a class="dropdown-item" @click="dangXuat()"><i class="bx bx-log-out-circle"></i>
                                        <span>Đăng xuất</span></a>
                                </li>
                                <li>
                                    <a class="dropdown-item" @click="dangXuatAll()"><i class="bx bx-log-out-circle"></i>
                                        <span>Đăng xuất All</span></a>
                                </li>
                            </ul>
                        </template>
                        <template v-else>
                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" class="user-img"
                                    style="height: 35px; object-fit: cover" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <router-link to="/client/dang-ky">
                                    <li>
                                        <a class="dropdown-item"><span><i class="bx bx-user me-1"></i> Đăng
                                                Ký</span></a>
                                    </li>
                                </router-link>
                                <router-link to="/client/dang-nhap">
                                    <li>
                                        <a class="dropdown-item"><i class="bx bx-log-in-circle"></i>
                                            <span> Đăng Nhập</span></a>
                                    </li>
                                </router-link>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import axios from "axios";
import apiUrl from "../../../utils/api";
export default {
    data() {
        return {
            ho_va_ten: null,
            email_kh: null,
        };
    },
    computed: {
        isLoggedIn() {
            try {
                return !!(
                    typeof window !== "undefined" &&
                    window.localStorage &&
                    window.localStorage.getItem("key_client")
                );
            } catch (e) {
                return false;
            }
        },
    },
    mounted() {
        this.ho_va_ten = localStorage.getItem("ho_va_ten");
    },
    methods: {
        checkLogin() {
            const token = localStorage.getItem("key_client");
            if (!token) return;
            axios.get(apiUrl('client/check-token'), {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                .then((res) => {
                    if (res.data.status) {
                        this.ho_va_ten = res.data.ho_ten;
                        this.email_kh = res.data.email;
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.ho_va_ten = null;
                    localStorage.removeItem("key_client");
                });
        },
        dangXuat() {
            axios
                .post(
                    apiUrl("client/dang-xuat"),
                    {},
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("key_client"),
                        },
                    }
                )
                .then((res) => {
                    if (res.data.status) {
                        localStorage.removeItem("key_client");
                        localStorage.removeItem("ho_va_ten");
                        localStorage.removeItem("email_kh");
                        this.ho_va_ten = null;
                        this.email_kh = null;
                        this.$router.push("/client/dang-nhap");
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
        dangXuatAll() {
            axios
                .post(
                    apiUrl("client/dang-xuat-all"),
                    {},
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("key_client"),
                        },
                    }
                )
                .then((res) => {
                    if (res.data.status) {
                        localStorage.removeItem("key_client");
                        localStorage.removeItem("ho_va_ten");
                        this.ho_va_ten = null;
                        this.email_kh = null;
                        this.$router.push("/client/dang-nhap");
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
    },
};
</script>
<style></style>