import React from 'react'
import logo from '../../assets/logowithoutbg.png'
import { Button } from '../../components'
import icons from '../../ultils/icons';


const { AiOutlinePlusCircle } = icons
const Header = () => {
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

                />
                {/* // nút đăng ký */}
                <Button
                    text={'Đăng ký'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'

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
