import React, { useState } from 'react'
import { InputForm, Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/contant'

const Register = () => {
    const navigate = useNavigate()
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        password: '',
        accountType: 'tim-kiem' // Giá trị mặc định
    })
    const [invalidFields, setInvalidFields] = useState([])

    const handleSubmit = () => {
        let invalids = []

        if (!payload.name) {
            invalids.push({ name: 'name', message: 'Vui lòng nhập họ tên' })
        }

        if (!payload.phone) {
            invalids.push({ name: 'phone', message: 'Vui lòng nhập số điện thoại' })
        } else if (!/^[0-9]{10}$/.test(payload.phone)) {
            invalids.push({ name: 'phone', message: 'Số điện thoại không hợp lệ' })
        }

        if (!payload.password) {
            invalids.push({ name: 'password', message: 'Vui lòng nhập mật khẩu' })
        } else if (payload.password.length < 6) {
            invalids.push({ name: 'password', message: 'Mật khẩu phải có ít nhất 6 ký tự' })
        }

        setInvalidFields(invalids)

        if (invalids.length === 0) {
            console.log('Register with:', payload)
            // Gọi API đăng ký ở đây
        }
    }

    return (
        <div className='w-[600px] bg-white p-[30px] pb-[100px] rounded-md shadow-sm mx-auto mt-[50px]'>
            <h3 className='text-center text-2xl mb-8 font-semibold'>Tạo tài khoản mới</h3>

            <div className='flex flex-col gap-4'>
                <InputForm
                    label="Họ tên"
                    value={payload.name}
                    setValue={setPayload}
                    keyPayload="name"
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                />

                <InputForm
                    label="Số điện thoại"
                    value={payload.phone}
                    setValue={setPayload}
                    keyPayload="phone"
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                />

                <InputForm
                    label="Mật khẩu"
                    value={payload.password}
                    setValue={setPayload}
                    keyPayload="password"
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    type="password"
                />

                <Button
                    text='Tạo tài khoản'
                    bgColor='bg-secondary1'
                    textColor='text-white'
                    fullWidth
                    onClick={handleSubmit}
                />
            </div>

            {/* Phần Radio buttons cho loại tài khoản */}
            <div className='flex items-center justify-between mt-5'>
                <div className='flex items-center gap-2'>
                    <input
                        type="radio"
                        name="accountType"
                        id="loai-tai-khoan"
                        value="loai-tai-khoan"
                        checked={payload.accountType === 'loai-tai-khoan'}
                        onChange={(e) => setPayload(prev => ({ ...prev, accountType: e.target.value }))}
                        className='cursor-pointer'
                    />
                    <label htmlFor="loai-tai-khoan" className='text-sm cursor-pointer'>
                        Loại tài khoản
                    </label>
                </div>

                <div className='flex items-center gap-2'>
                    <input
                        type="radio"
                        name="accountType"
                        id="tim-kiem"
                        value="tim-kiem"
                        checked={payload.accountType === 'tim-kiem'}
                        onChange={(e) => setPayload(prev => ({ ...prev, accountType: e.target.value }))}
                        className='cursor-pointer'
                    />
                    <label htmlFor="tim-kiem" className='text-sm cursor-pointer'>
                        Tìm kiếm
                    </label>
                </div>

                <div className='flex items-center gap-2'>
                    <input
                        type="radio"
                        name="accountType"
                        id="chinh-chu"
                        value="chinh-chu"
                        checked={payload.accountType === 'chinh-chu'}
                        onChange={(e) => setPayload(prev => ({ ...prev, accountType: e.target.value }))}
                        className='cursor-pointer'
                    />
                    <label htmlFor="chinh-chu" className='text-sm cursor-pointer'>
                        Chính chủ
                    </label>
                </div>

                <div className='flex items-center gap-2'>
                    <input
                        type="radio"
                        name="accountType"
                        id="moi-gioi"
                        value="moi-gioi"
                        checked={payload.accountType === 'moi-gioi'}
                        onChange={(e) => setPayload(prev => ({ ...prev, accountType: e.target.value }))}
                        className='cursor-pointer'
                    />
                    <label htmlFor="moi-gioi" className='text-sm cursor-pointer'>
                        Môi giới
                    </label>
                </div>
            </div>

            {/* Link đăng nhập */}
            <div className='text-center mt-5'>
                <small>
                    Bạn đã có tài khoản? {' '}
                    <span
                        onClick={() => navigate(path.LOGIN)}
                        className='text-blue-600 hover:text-orange-600 cursor-pointer font-medium'
                    >
                        Đăng nhập
                    </span>
                </small>
            </div>
        </div>
    )
}

export default Register