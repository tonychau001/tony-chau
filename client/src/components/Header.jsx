import React from "react";

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center sm:px-8 px-4 py-4">
            <div>
                <div className="w-28 h-8 object-contain font-mono text-[#2DD4BF] text-[20px] hover:opacity-50">
                Tony_Chau
                <div className="inline text-white">.</div>
                <div className="inline text-[#E879F9]">dev</div>
                </div>
            </div>

            <div className="flex sm:justify-center space-x-4 mx-auto">
            {[
            ['Home', '/', 1],
            ['About me', '/aboutme', 2],
            ['Expertise', '/exoertise', 3],
            ['Experience', '/Experience', 4],
            ['Contact', '/contact', 5]
            ].map(([title, url, index]) => (
            <a key={index} href={url} className="rounded-lg px-3 py-2 text-white font-small hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
            </div>
        </header>
    );
}

export default Header;