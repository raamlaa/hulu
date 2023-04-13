import {
    BadgeCheckIcon,
    HomeIcon,  
   CollectionIcon,
   LightBulbIcon,
   SearchIcon,
   UserIcon,
} from "@heroicons/react/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import React from "react"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 
    justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Title='HOME' Icon={HomeIcon}/>
        <HeaderItem Title='TRENDING' Icon={LightBulbIcon}/>
        <HeaderItem Title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem Title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem Title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem Title='ACCOUNT' Icon={UserIcon}/>
      </div>
      <Image className="object-contain"
       src="https://links.papareact.com/ua6" 
      width={200} 
      height= {100}/> 
    </header>
  )
}

export default Header
