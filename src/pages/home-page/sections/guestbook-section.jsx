import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { RevealBlock, SectionTitle } from "@/components/invitation";

export const GuestbookSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-12 md:px-10">
      <SectionTitle>Sổ Lưu Bút</SectionTitle>

      <RevealBlock className="mx-auto mt-8 max-w-2xl" delay={0.08}>
        {/* Input */}
        <input
          className="w-full rounded-2xl border border-[#710001]/40 bg-white/40 px-5 py-4 text-[#710001] outline-none backdrop-blur-sm placeholder:text-[#b07b7b] focus:border-[#710001]"
          placeholder="Nhập tên của bạn*"
        />

        {/* Textarea */}
        <textarea
          rows="5"
          className="mt-7 w-full rounded-2xl border border-[#710001]/40 bg-white/40 px-5 py-4 text-[#710001] outline-none backdrop-blur-sm placeholder:text-[#b07b7b] focus:border-[#710001]"
          placeholder="Nhập lời chúc của bạn*"
        />

        {/* Bottom */}
        <div className="mt-7 flex items-center justify-between">
          {/* Magic icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 15 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5e5df] text-[#710001] shadow-sm"
          >
            <Sparkles size={18} />
          </motion.button>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-full bg-[#710001] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition"
          >
            Gửi lời chúc
          </motion.button>
        </div>

        {/* Empty text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-lg text-[#b06c6c]"
        >
          Chưa có lời chúc nào. Hãy là người đầu tiên!
        </motion.p>
      </RevealBlock>
    </section>
  );
};
