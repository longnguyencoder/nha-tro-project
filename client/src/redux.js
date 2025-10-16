import rootReducer from './store/reducers/rootReducer';
import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

const reduxStore = () => {
    // Tạo store từ rootReducer
    const store = createStore(rootReducer); // Hôm sau sẽ thêm middleware ở đây

    // Tạo persistor để quản lý lưu trữ (redux-persist)
    const persistor = persistStore(store);

    // Trả ra cả store và persistor
    return { store, persistor };
};

export default reduxStore;
