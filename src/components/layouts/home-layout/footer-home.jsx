import { Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

export const FooterHome = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + social */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">ZOZO</h2>
          <p className="text-sm">© 2017 Zozo. Powered By INET</p>
          <div className="flex gap-3">
            <div className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 cursor-pointer">
              <Youtube size={18} />
            </div>
          </div>
        </div>

        {/* Services */}
        <FooterCol
          title="Dịch Vụ"
          items={[
            "Thiết kế Website Bán hàng",
            "Thiết kế Website Doanh nghiệp",
            "Thiết kế Website Thời trang",
            "Thiết kế Website Du lịch",
            "Thiết kế Website Bất động sản",
            "Thiết kế Website Nhà hàng",
            "Thiết kế Website Nội thất",
            "Thiết kế Website Mỹ phẩm",
          ]}
        />

        {/* Info */}
        <FooterCol
          title="Thông Tin"
          items={[
            "Về chúng tôi",
            "Bảng giá",
            "Kho giao diện",
            "Chính sách bảo mật",
            "Quy định sử dụng",
            "Mẫu hợp đồng",
            "Zozo Profile 2023",
          ]}
        />

        {/* Support */}
        <FooterCol
          title="Hỗ Trợ"
          items={[
            "Đăng ký Tên miền",
            "Bảng giá Tên miền",
            "Hướng dẫn thanh toán",
            "Trung tâm hỗ trợ",
            "Video hướng dẫn",
            "Zozo Blog",
            "Liên hệ",
          ]}
        />

        {/* Partner */}
        <FooterCol
          title="Hợp Tác"
          items={[
            "Chương trình Đối tác",
            "Cộng tác viên bán hàng",
            "Liên hệ hợp tác",
          ]}
        />
      </div>

      {/* Contact section */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-white font-semibold">TP Hà Nội</h3>
            <p className="flex items-start gap-2 text-sm">
              <MapPin size={16} />
              Tầng 6, Tòa nhà iNET, Số 247 Cầu Giấy, Phường Cầu Giấy
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail size={16} /> contact@zozo.vn
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone size={16} /> 0936.377.226
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold">TP Hồ Chí Minh</h3>
            <p className="flex items-start gap-2 text-sm">
              <MapPin size={16} />
              Tầng 1 Tòa nhà Arrow, Số 40 Hoàng Việt, Phường Tân Sơn Nhất
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail size={16} /> contact@zozo.vn
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone size={16} /> 0904.886.094
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 text-center text-xs py-4 text-slate-400">
        © Copyright 2017 Zozo. Công ty Cổ phần Phần Mềm Zozo
      </div>
    </footer>
  );
};

const FooterCol = ({ title, items }) => (
  <div>
    <h3 className="text-white font-semibold mb-3">{title}</h3>
    <ul className="space-y-2 text-sm">
      {items.map((item, i) => (
        <li key={i} className="hover:text-white cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
