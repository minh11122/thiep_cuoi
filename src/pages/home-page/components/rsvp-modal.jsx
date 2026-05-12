export const RsvpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl animate-scaleUp"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8f5757]">RSVP</p>
            <h3 className="mt-1 text-2xl font-bold text-[#710001]">Xác nhận tham dự</h3>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full border border-[#710001]/20 text-[#710001] transition hover:bg-[#fff0e7]"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <input
            className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 outline-none transition focus:border-[#710001] focus:ring-1 focus:ring-[#710001]"
            placeholder="Họ tên của bạn"
          />
          <input
            className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 outline-none transition focus:border-[#710001]"
            placeholder="Số lượng khách"
          />
          <textarea
            rows="3"
            className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 outline-none transition focus:border-[#710001]"
            placeholder="Lời nhắn đến cô dâu chú rể"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-[#710001] px-6 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:bg-[#5e0000]"
          >
            Gửi xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};
