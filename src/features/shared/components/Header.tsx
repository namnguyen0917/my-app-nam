export default function Header() {
  
    return (
        <>
        {/* NAV */}
            <header className="w-full py-4 glass">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center text-neutral-900 font-bold">📜</div>
                        <div>
                            <div className="text-lg font-semibold">Tàng Kinh Các TLBB</div>
                            <div className="text-xs text-amber-200/60">Tổng quan, class, build, quest</div>
                        </div>
                    </div>
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-6 text-sm">
                        <a href="#overview" className="hover:underline">Tổng Quan</a>
                        <a href="#builds" className="hover:underline">Builds</a>
                        <a href="#classes" className="hover:underline">Trang Bị</a>
                        <a href="#quests" className="hover:underline">Nhiệm Vụ</a>
                        <a href="#maps" className="hover:underline">Bản Đồ</a>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex gap-3">
                        {/* <button className="px-4 py-2 rounded-md border border-amber-700/30">Đăng Ký</button> */}
                        <button className="px-4 py-2 rounded-md bg-amber-400 text-neutral-900 font-semibold">Đăng Nhập</button>
                    </div>

                    {/* Mobile Toggle */}
                    <button id="menu-toggle" className="md:hidden text-2xl">☰</button>
                </div>
                {/* Mobile Menu */}
                <div id="mobile-menu" className="md:hidden hidden flex-col gap-4 mt-4 px-6 text-sm">
                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                        <a href="#overview" className="block py-2 px-3 rounded-md hover:bg-amber-400/10">Tổng Quan</a>
                        <a href="#classes" className="block py-2 px-3 rounded-md hover:bg-amber-400/10">Trang Bị</a>
                        <a href="#builds" className="block py-2 px-3 rounded-md hover:bg-amber-400/10">Builds</a>
                        <a href="#quests" className="block py-2 px-3 rounded-md hover:bg-amber-400/10">Nhiệm Vụ</a>
                        <a href="#maps" className="block py-2 px-3 rounded-md hover:bg-amber-400/10">Bản Đồ</a>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-3 mt-3">
                        {/* <button className="flex-1 px-4 py-2 rounded-md border border-amber-700/30">Đăng Ký</button> */}
                        <button className="flex-1 px-4 py-2 rounded-md bg-amber-400 text-neutral-900 font-semibold">Đăng Nhập</button>
                    </div>
                </div>
            </header>
        </>
    );
}
