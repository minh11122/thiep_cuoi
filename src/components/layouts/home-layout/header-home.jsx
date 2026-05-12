import { useState } from "react";
import { ChevronDown, Menu, X, Search, User, ShoppingBag } from "lucide-react";

export const HeaderHome = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* TOP BAR */}
      <div className="bg-gray-100 text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <p className="text-gray-600">
            Thiết kế - sản xuất và lắp đặt sản phẩm inox
          </p>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-gray-700">inoxtrungquy@gmail.com</span>
            <span className="text-gray-700">0979.263.667</span>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded">
              LIÊN HỆ
            </button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 rounded-full border-4 border-yellow-500 flex items-center justify-center font-bold text-yellow-500 text-xl">
              TQ
            </div>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 font-medium">
            <a href="#" className="text-yellow-600">
              TRANG CHỦ
            </a>
            <a href="#" className="hover:text-yellow-600">
              GIỚI THIỆU
            </a>

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-yellow-600">
                DANH MỤC SẢN PHẨM <ChevronDown size={16} />
              </button>

              {openDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-50"
                  >
                    Sản phẩm inox 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-50"
                  >
                    Sản phẩm inox 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-50"
                  >
                    Sản phẩm inox 3
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-yellow-600">
              BẢNG GIÁ
            </a>
            <a href="#" className="hover:text-yellow-600">
              TIN TỨC
            </a>
            <a href="#" className="hover:text-yellow-600">
              LIÊN HỆ
            </a>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            <Search className="cursor-pointer" />
            <User className="cursor-pointer" />

            <div className="relative">
              <ShoppingBag className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="lg:hidden border-t">
            <div className="flex flex-col p-4 gap-3 font-medium">
              <a href="#">TRANG CHỦ</a>
              <a href="#">GIỚI THIỆU</a>
              <a href="#">DANH MỤC SẢN PHẨM</a>
              <a href="#">BẢNG GIÁ</a>
              <a href="#">TIN TỨC</a>
              <a href="#">LIÊN HỆ</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};