import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkAdmin from "./checkAdmin";

const routes = [
    // ============= Client ==================
    {
        path: "/",
        component: () => import("../components/Client/TrangChu/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/client/dang-nhap",
        component: () => import("../components/Client/DangNhap/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/client/dang-ky",
        component: () => import("../components/Client/DangKy/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/client/phim/dang-chieu",
        component: () => import("../components/Client/Phim/DangChieu/index.vue"),
        meta: { layout: "client" },

    },
    {
        path: "/client/phim/sap-chieu",
        component: () => import("../components/Client/Phim/SapChieu/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/chi-tiet-bai-viet/:id_bai_viet",
        component: () => import("../components/Client/ChiTietBaiViet/index.vue"),
        meta: { layout: "client" },
        props: true,
    },

    {
        path: "/chi-tiet-phim/:id_phim",
        component: () => import("../components/Client/ChiTietPhim/index.vue"),
        meta: { layout: "client" },
        props: true,
    },
    // {
    //     path: "/",
    //     component: () => import("../components/Test/index.vue"),
    // },

    // ============= Admin ==================
    {
        path: "/",
        component: () => import("../components/Admin/Dashboard/index.vue"),
    },
    {
        path: "/admin/phong-chieu",
        component: () => import("../components/Admin/PhongChieu/index.vue"),
    },
    {
        path: "/admin/dich-vu",
        component: () => import("../components/Admin/DichVu/index.vue"),
        beforeEnter: checkAdmin,
    },
    {
        path: "/admin/nhan-vien",
        component: () => import("../components/Admin/NhanVien/index.vue"),
    },
    {
        path: "/admin/phan-quyen",
        component: () => import("../components/Admin/PhanQuyen/index.vue"),
    },
    {
        path: "/admin/khach-hang",
        component: () => import("../components/Admin/KhachHang/index.vue"),
    },
    {
        path: "/admin/phim",
        component: () => import("../components/Admin/Phim/index.vue"),
    },
    {
        path: "/admin/ve",
        component: () => import("../components/Admin/Ve/index.vue"),
    },
    {
        path: "/admin/suat-chieu",
        component: () => import("../components/Admin/SuatChieu/index.vue"),
    },
    {
        path: "/admin/ghe",
        component: () => import("../components/Admin/Ghe/index.vue"),
    },
    {
        path: "/admin/bai-viet",
        component: () => import("../components/Admin/BaiViet/index.vue"),
    },
    {
        path: "/admin/voucher",
        component: () => import("../components/Admin/Voucher/index.vue"),
    },
    {
        path: "/admin/dang-nhap",
        component: () => import("../components/Admin/DangNhap/index.vue"),
        meta: { layout: "blank" },
    },


    

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;