import './index.css'
import Searchbox from "../search/Searchbox"
import Logo from "../logo/Logo"
import { useState } from "react";
function Menusbar() {
    let menusItems = [
        { id: 1, title: 'home' },
        { id: 2, title: 'products' },
        { id: 3, title: 'about us' },
        { id: 4, title: 'contact us' },
    ]
    const [showburger, setShowburger] = useState('show');
    return (
        <>
            <div className="main">
                <div className=" bg-black flex justify-start items-center ">
                    <ul className="md:hidden flex flex-row justify-between  items-center gap-5 bg-black text-white h-10 p-3">
                        <li className=" text-red-500 flex flex-col" onClick={() => setShowburger(showburger === 'hide' ? 'show' : "hide")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <ul className={showburger}>
                    <li className=" text-white"><Logo className='text-white' /></li>
                    {menusItems.map((item) => {
                        return <li key={item.id} className=' text-white list-none'>{item.title}</li>
                    })
                    }
                </ul>
            </div>
        </>


    )
}
export default Menusbar


