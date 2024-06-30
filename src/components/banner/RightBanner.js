import React from 'react'
import banner from "../../assets/banner.png"

function RightBanner() {
    return (
        <div className='w-1/2 flex justify-center items-start'>
            <img
                className='w-[500px] h-[500 ] z-10'
                src={banner} alt='bannerImg' />
            <div className='absolute top
        -0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
        </div>
    )
}

export default RightBanner
