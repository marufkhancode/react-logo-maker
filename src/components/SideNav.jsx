import { Image, PencilRuler } from 'lucide-react'
import React, { useState } from 'react'

function SideNav({ selectedIndex }) {
  const menuList = [{
    id: 1,
    name: "Icon",
    icon: PencilRuler
  },
  {
    id: 2,
    name: "Background",
    icon: Image
  }];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='border shadow-sm h-screen'>{menuList.map((ele, index) => {
      return <h2 onClick={() => { setActiveIndex(index); selectedIndex(index) }} className={`flex items-center gap-2 p-2 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-blue-700 hover:text-white ${activeIndex == index && 'bg-blue-700 text-white'}`} key={ele.id}>
        <ele.icon></ele.icon>{ele.name}
      </h2>
    })}</div >
  )
}

export default SideNav