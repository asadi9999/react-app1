import Card from '../../img/sports_band.jpg'
import '../../css/Content.css'

function Content() {
    return (
        <>
            <script async src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
            <script async src='node_modules/@material-tailwind/html/scripts/ripple.js'></script>
            <div className="wrapper grid md:grid-cols-4 gap-0">
                <div className="sidebar-left">
                    <h3><a href="http://">other Services</a> </h3>
                    <h3><a href="http://">our address</a> </h3>
                    <h3><a href="http://">social network</a> </h3>
                    <button
                        type="button"
                        data-ripple-light="true"
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    >
                        Button
                    </button>
                </div>
                <div className="main md:col-span-3 p-3">
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="card">
                            <img src={Card} alt="sports_band" className='object-cover w-full sm:h-48 overflow-hidden md:w-3/4' />
                            <div className="m-4">
                                <span>Smart Watch 6</span>
                                <span className="block text-sm text-gray-400">Company:Apple</span>
                            </div>
                            <div className="badge">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=''>New Apple Watch</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Card} alt="sports_band" className='object-cover w-full sm:h-48' />
                            <div className="m-4">
                                <span>Smart Watch 6</span>
                                <span className="block text-sm text-gray-400">Company:Apple</span>
                            </div>
                            <div className="badge">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=''>New</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Card} alt="sports_band" className='object-cover w-full sm:h-48' />
                            <div className="m-4">
                                <span>Smart Watch 6</span>
                                <span className="block text-sm text-gray-400">Company:Apple</span>
                            </div>
                            <div className="badge">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=''>New</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Card} alt="sports_band" className='object-cover w-full sm:h-48' />
                            <div className="m-4">
                                <span>Smart Watch 6</span>
                                <span className="block text-sm text-gray-400">Company:Apple</span>
                            </div>
                            <div className="badge">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=''>New</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Card} alt="sports_band" className='object-cover w-full sm:h-48' />
                            <div className="m-4">
                                <span>Smart Watch 6</span>
                                <span className="block text-sm text-gray-400">Company:Apple</span>
                            </div>
                            <div className="badge">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=''>New</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Card} alt="sports_band" className='object-cover w-full sm:h-48' />
                            <div className="m-4">
                                <span>Smart Watch 6</span>
                                <span className="block text-sm text-gray-400">Company:Apple</span>
                            </div>
                            <div className="badge">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=''>New</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Content