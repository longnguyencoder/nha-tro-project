// Khởi tạo state ban đầu
const initState = {
    userData: {}
};

// Tạo reducer cho user
const userReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Export reducer để dùng trong rootReducer
export default userReducer;
