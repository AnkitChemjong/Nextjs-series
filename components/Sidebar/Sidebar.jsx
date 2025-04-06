import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Sidebar = ({expand,setExpand}) => {
  return (
    <div>
      <div>
        <div>
            <Image src={expand? assets?.logo_text:assets?.logo_icon} alt="hellna"/>
            <div>
            <Image className='md:hidden' src={assets?.menu_icon} alt="menu icon"/>
            <Image className='hidden md:block w-7' src={expand? assets?.sidebar_close_icon:assets?.sidebar_icon} alt="sidebar icon"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
