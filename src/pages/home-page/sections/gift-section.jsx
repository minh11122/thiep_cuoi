import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";
import { SectionTitle } from "@/components/invitation";
import chuHyImage from "@/assets/CHU HY.webp";

export const bankAccounts = [
  {
    qrImage: chuHyImage,
  },
  {
    qrImage: chuHyImage,
  },
];

const BankInfoCard = ({ item }) => {
  const downloadQr = () => {
    const link = document.createElement("a");

    // item.qrImage => ảnh qr trong data
    // ví dụ: "/images/qr-groom.png"
    link.href = item.qrImage;

    link.download = `${item.name}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rounded-3xl border border-[#710001]/10 bg-[#fffaf7] p-5 shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8f5757]">
        {item.role}
      </p>

      <h3 className="mt-1 text-2xl font-bold text-[#710001]">
        {item.name}
      </h3>

      {/* QR IMAGE */}
      <div className="my-5 overflow-hidden rounded-2xl bg-white p-3 shadow-inner">
        <img
          src={item.qrImage}
          alt={item.name}
          className="mx-auto w-full max-w-[220px] rounded-xl object-cover"
        />
      </div>

      <p className="text-lg font-bold text-[#710001]">{item.bank}</p>

      <p className="mt-1 font-mono text-sm text-[#7b3d3d]">
        {item.account}
      </p>

      {/* DOWNLOAD */}
      <button
        onClick={downloadQr}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#710001] py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#8d0001]"
      >
        <Download size={18} />
        Tải mã QR
      </button>
    </div>
  );
};

export const GiftSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 py-14 md:px-10">
      <SectionTitle>Hộp Mừng Cưới</SectionTitle>

      {/* LÌ XÌ */}
      <div className="flex justify-center">
        <motion.div
          animate={{
            rotate: [0, -6, 6, -6, 6, 0],
            y: [0, -4, 4, -4, 4, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setOpen(true)}
          className="relative mt-4 flex cursor-pointer flex-col items-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-200/40 blur-3xl" />

          {/* Coins */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -left-6 top-14 h-8 w-8 rounded-full bg-yellow-400 shadow-lg"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="absolute -right-5 top-8 h-7 w-7 rounded-full bg-yellow-300 shadow-lg"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="absolute bottom-16 -right-7 h-8 w-8 rounded-full bg-yellow-400 shadow-lg"
          />

          {/* BAO LÌ XÌ */}
          <div className="relative flex h-[230px] w-[165px] items-center justify-center rounded-[28px] border-[4px] border-yellow-400 bg-gradient-to-b from-red-600 to-red-700 shadow-2xl">
            {/* Pattern */}
            <div className="absolute inset-0 rounded-[24px] opacity-10">
              <div className="h-full w-full bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:18px_18px]" />
            </div>

            {/* Corner */}
            <div className="absolute left-3 top-3 h-5 w-5 border-l-4 border-t-4 border-yellow-300" />
            <div className="absolute right-3 top-3 h-5 w-5 border-r-4 border-t-4 border-yellow-300" />
            <div className="absolute bottom-3 left-3 h-5 w-5 border-b-4 border-l-4 border-yellow-300" />
            <div className="absolute bottom-3 right-3 h-5 w-5 border-b-4 border-r-4 border-yellow-300" />

            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-yellow-200 bg-yellow-100 text-4xl font-bold text-red-700 shadow-lg">
              囍
            </div>
          </div>

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-5 text-sm font-medium text-[#8f5757]"
          >
            Nhấn để mở
          </motion.p>
        </motion.div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white p-6 shadow-2xl"
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-xl text-[#710001] transition hover:bg-red-100"
              >
                ✕
              </button>

              <h2 className="mb-8 text-center text-3xl font-bold text-[#710001]">
                Mừng Cưới ❤️
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <BankInfoCard item={bankAccounts[0]} />
                <BankInfoCard item={bankAccounts[1]} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
