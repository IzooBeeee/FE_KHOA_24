<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark py-0" style="background-color: #000957;">
            <div class="container">
                <router-link to="/" class="navbar-brand fs-4 fw-bold text-decoration-none">
                    <span class="text-warning">DZ</span>Cinema
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                    aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <router-link to="/">
                            <li class="nav-item"> <a class="nav-link  text-light fs-6" aria-current="page"
                                        >Trang
                                    Chủ</a>
                            </li>
                        </router-link>
                        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle text-light fs-6" 
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Phim
                            </a>
                            <ul class="dropdown-menu">
                                <router-link to="/client/phim/dang-chieu">
                                    <li><a class="dropdown-item">Phim Đang Chiếu</a>
                                    </li>
                                </router-link>
                                <router-link to="/client/phim/sap-chieu">
                                    <li><a class="dropdown-item">Phim Sắp Chiếu</a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <router-link to="/client/bai-viet">
                            <li class="nav-item"> <a class="nav-link text-light fs-6">Bài Viết</a>
                            </li>
                        </router-link>
                        <router-link to="/client/about">
                            <li class="nav-item"> <a class="nav-link text-light fs-6">Về chúng tôi</a>
                            </li>
                        </router-link>
                    </ul>
                    <div class="dropdown my-3">
                        <template v-if="isLoggedIn">
                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg"
                                    class="user-img" style="height: 35px; object-fit: cover;">
                                <div class="user-info ps-3 pe-3">
                                    <p class="user-name mb-0 text-light">{{ ho_va_ten }}</p>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <router-link to="/client/profile">
                                    <li><a class="dropdown-item" href="javascript:;"><i class="bx bx-user"></i>
                                            <span>Thông tin cá nhân</span></a>
                                    </li>
                                </router-link>
                                <li><a class="dropdown-item" @click="dangXuat"><i class="bx bx-log-out-circle"></i>
                                        <span>Đăng xuất</span></a>
                                </li>
                            </ul>
                        </template>

                        <template v-else>
                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" class="user-img"
                                    style="height: 35px; object-fit: cover;">
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <router-link to="/client/dang-ky">
                                    <li><a class="dropdown-item"><span><i class="bx bx-user me-1"></i> Đăng
                                                Ký</span></a></li>
                                </router-link>
                                <router-link to="/client/dang-nhap">
                                    <li><a class="dropdown-item"><i class="bx bx-log-in-circle"></i> <span>Đăng
                                                Nhập</span></a></li>
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
import axios from 'axios';
import apiUrl from '../../../utils/api';
export default {
    data() {
        return {
            ho_va_ten: null,
        }
    },
    computed: {
        isLoggedIn() {
			try {
				return !!(typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('key_client'));
                this.ho_va_ten = localStorage.getItem('ho_va_ten');
			} catch (e) {
				return false;
			}
		},
    }
}
</script>
<style></style>