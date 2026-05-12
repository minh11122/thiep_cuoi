export const QrModal = ({ qrOpen, onClose }) => {
  if (!qrOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative rounded-3xl bg-white p-8 animate-scaleUp"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white text-[#710001] shadow-md hover:text-[#5e0000]"
        >
          ×
        </button>
        <div className="flex flex-col items-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-gray-100">
            <div className="grid grid-cols-9 gap-1">
              {Array.from({ length: 81 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded ${Math.floor(index / 9) % 2 === 0 ? "bg-[#710001]" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-[#710001]">
            Mã QR - {qrOpen === "groom" ? "Chú rể" : "Cô dâu"}
          </p>
        </div>
      </div>
    </div>
  );
};
