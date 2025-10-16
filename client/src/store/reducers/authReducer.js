// State khởi tạo ban đầu cho phần xác thực người dùng
const initState = {
    isLoggedIn: false,  // xem người dùng đã đăng nhập hay chưa.
    token: null
};

// Hàm reducer xử lý các action liên quan đến xác thực
const authReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Xuất reducer để dùng trong rootReducer
export default authReducer;
