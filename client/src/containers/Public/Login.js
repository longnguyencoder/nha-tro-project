import React, { useState } from 'react'
import { InputForm, Button } from '../../components'

const Login = () => {
    const [payload, setPayload] = useState({
        phone: '',
        password: ''
    })
    const [invalidFields, setInvalidFields] = useState([])

    return (
        <div className='w-[600px] bg-white p-[30px] pb-[100px] rounded-md shadow-sm mx-auto mt-[50px]'>
            <h3 className='text-center text-2xl mb-8 font-semibold'>Đăng nhập</h3>

            <div className='flex flex-col gap-4'>
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
                    text='Đăng nhập'
                    bgColor='bg-secondary1'
                    textColor='text-white'
                    fullWidth
                />
            </div>

            <div className='flex items-center justify-between mt-5 text-sm'>
                <small className='text-blue hover:text-orange cursor-pointer'>
                    Bạn quên mật khẩu?
                </small>
                <small className='text-blue hover:text-orange cursor-pointer'>
                    Tạo tài khoản mới
                </small>
            </div>
        </div>
    )
}

export default Login
