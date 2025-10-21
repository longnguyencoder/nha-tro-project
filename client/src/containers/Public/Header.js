import React, { useCallback, useState } from 'react'
import logo from '../../assets/logowithoutbg.png'
import { Button } from '../../components'
import icons from '../../ultils/icons';
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { path } from '../../ultils/contant';
const { AiOutlinePlusCircle } = icons
const Header = () => {
    const navigate = useNavigate()
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])
    const goRegister = useCallback((flag) => {
        navigate(path.REGISTER, { state: { flag } })
    }, [])
    return (
        <div className='w-1100 flex items-center justify-between'>
            <img src={logo} alt='logo'
                className='w-{240px} h-{70px} object-cover'
            />
            <div className='flex items-center gap-1'>
                <small>Phongtro123.com xin chào !</small>

                {/* // nút đăng nhập */}
                <Button
                    text={'Đăng nhập'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'
                    onClick={() => goLogin(false)}
                />
                {/* // nút đăng ký */}
                <Button
                    text={'Đăng ký'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'
                    onClick={() => goRegister(false)}
                />
                {/* nút đăng tin mới */}
                <Button
                    text={'Đăng tin mới'}
                    textColor='text-white'
                    bgColor='bg-secondary2'
                    IcAfter={AiOutlinePlusCircle}

                />
            </div>


        </div >
    )
}

export default Header
