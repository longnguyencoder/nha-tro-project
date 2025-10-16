import authReducer from './authReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';

// ✅ Cấu hình chung cho redux-persist
const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

// ✅ Cấu hình riêng cho authReducer (chỉ lưu một số state nhất định)
const authConfig = {
    ...commonConfig,
    key: 'auth', // khóa lưu trong localStorage
    whitelist: ['isLoggedIn', 'token'], // chỉ lưu 2 trường này
};

// ✅ Kết hợp các reducer lại thành rootReducer
const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer), // reducer có persist
    user: userReducer, // reducer bình thường
});

export default rootReducer;
