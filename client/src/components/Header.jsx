import React, { useState } from "react";

const Header = () => {
    const [collapseButton, setCollapseButton] = useState(false);
    const [navClassName, setNavClassName] = useState(["rounded-lg px-3 py-2 text-white font-medium font-mono",
                                                            "rounded-lg px-3 py-2 text-white font-medium font-mono",
                                                            "rounded-lg px-3 py-2 text-white font-medium font-mono",
                                                            "rounded-lg px-3 py-2 text-white font-medium font-mono",
                                                            "rounded-lg px-3 py-2 text-white font-medium font-mono"]);

    const handleCollapseButton = () => {
        setCollapseButton(prev => !prev);
    }

    const handleHoverNav = (e) => {
        const id = e.target.id;

        setNavClassName(prev => {
            return prev.map((but, index) => {
                if (index == id) {
                    return "rounded-lg px-3 py-2 text-white font-medium font-mono";
                } else {
                    return "rounded-lg px-3 py-2 text-white font-medium font-mono opacity-50 transition-opacity";
                }
            });
        });
    }

    const handleLeaveNav = () => {
        setNavClassName(prev => {
            return prev.map(() =>  "rounded-lg px-3 py-2 text-white font-medium font-mono opacity-100 transition-opacity");
        });
    }

    return (
        <header className="w-full flex justify-between items-center sm:px-8 px-4 py-4 bg-[#151019]">    
            <div>
                <div className="w-28 h-8 object-contain font-mono font-bold text-[#6be4ff] text-[24px] hover:opacity-50 transition-opacity">
                Tony_Chau
                <div className="inline text-white">.</div>
                <div className="inline text-[#FF55BB]">dev</div>
                </div>
            </div>

            <div className="invisible lg:visible flex sm:justify-center space-x-1 mx-auto">
            {[
            ['// Home', '/', 0],
            ['// About me', '/aboutme', 1],
            ['// Expertise', '/exoertise', 2],
            ['// Experience', '/Experience', 3],
            ['// Contact', '/contact', 4]
            ].map(([title, url, index]) => (
            <a key={index} id={index} href={url} className={navClassName[index]} onMouseOver={handleHoverNav} onMouseLeave={handleLeaveNav}>{title}</a>
            ))}
            </div>
            
            <nav className="lg:hidden grid items-center sticky right-10 justify-items-end flex-wrap ">
                <div className="block">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:opacity-50" onClick={handleCollapseButton}>
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
               { collapseButton &&
                    <div className="bg-white/5 rounded-lg w-[180px] pb-5 pt-2">
                        <div className="text-sm grid justify-items-center">
                        {[
                                ['// Home', '/', 0],
                                ['// About me', '/aboutme', 1],
                                ['// Expertise', '/expertise', 2],
                                ['// Experience', '/Experience', 3],
                                ['// Contact', '/contact', 4]
                                ].map(([title, url, index]) => (
                                <a key={index} id={index} href={url} className="block mt-4 text-white hover:opacity-50 transition-opacity" onMouseOver={handleHoverNav} onMouseLeave={handleLeaveNav}>{title}</a>
                                ))}
                        </div>
                    </div>}
            </nav>      
                        
        </header>
    );
}

export default Header;