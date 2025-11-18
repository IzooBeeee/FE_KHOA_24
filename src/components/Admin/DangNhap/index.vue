<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div class="col mx-auto">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center mb-4">
                                    <img src="https://dzfullstack.com/assets/images/logo-1.png" width="150" alt="" />
                                    <h4 class="mt-3 font-weight-bold text-uppercase text-nowrap">ĐĂNG NHẬP ADMIN <span
                                            class="text-primary">DZCinema</span></h4>
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label">Email</label>
                                            <div class="input-group">
                                                <span class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </span>
                                                <input v-model="user.email" type="email" class="form-control border-start-0"
                                                    placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Mật khẩu</label>
                                            <div class="input-group">
                                                <span class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-lock"></i>
                                                </span>
                                                <input v-model="user.password" type="password" class="form-control border-start-0"
                                                    placeholder="Mật khẩu">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button @click="dangNhap" @keyup.enter="dangNhap" class="btn btn-primary">
                                                    <i class="fa-solid fa-right-to-bracket me-2"></i>
                                                    Đăng Nhập
                                                </button>
                                            </div>
                                        </div>
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
import axios from 'axios';
import apiUrl from '../../../utils/api'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        dangNhap(){
            axios.post(apiUrl('admin/dang-nhap'), this.user)
                .then((res) => {
                    if (res.data.status) {
                        localStorage.setItem('key_admin', res.data.token);
                        this.$router.push('/admin/nhan-vien');
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
        }
    }
}
</script>