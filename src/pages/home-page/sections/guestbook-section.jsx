import { SectionTitle } from "@/components/invitation";

export const GuestbookSection = () => {
  return (
    <section className="bg-white/40 px-6 py-14 md:px-10">
      <SectionTitle>Sổ Lưu Bút</SectionTitle>
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#710001]/10 bg-white/90 p-6 shadow-md">
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 outline-none focus:border-[#710001]"
            placeholder="Tên của bạn"
          />
          <input
            className="rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 outline-none focus:border-[#710001]"
            placeholder="Số điện thoại"
          />
        </div>
        <textarea
          rows="4"
          className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 outline-none focus:border-[#710001]"
          placeholder="Lời chúc phúc..."
        />
        <div className="mt-5 flex justify-end">
          <button className="rounded-full bg-[#710001] px-7 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:bg-[#5e0000]">
            Gửi lời chúc
          </button>
        </div>
      </div>
    </section>
  );
};
