import { SectionTitle } from "@/components/invitation";
import { QrModal } from "../components";
import { bankAccounts } from "../data";

const BankCard = ({ item, type, onOpenQr }) => {
  return (
    <div className="rounded-3xl border border-[#710001]/10 bg-white/80 p-7 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8f5757]">{item.role}</p>
      <h3 className="mb-5 mt-1 text-2xl font-bold text-[#710001]">{item.name}</h3>
      <button
        onClick={() => onOpenQr(type)}
        className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-2xl bg-gray-50 shadow-inner transition hover:scale-105 hover:shadow-lg"
      >
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 49 }).map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded ${(index + item.name.length) % 3 === 0 ? "bg-[#710001]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </button>
      <p className="text-lg font-bold text-[#710001]">{item.bank}</p>
      <p className="mb-5 font-mono text-sm text-[#7b3d3d]">{item.account}</p>
      <button
        onClick={() => onOpenQr(type)}
        className="w-full rounded-full border-2 border-[#710001] py-2.5 font-semibold text-[#710001] transition hover:bg-[#710001] hover:text-white"
      >
        Xem mã QR
      </button>
    </div>
  );
};

export const GiftSection = ({ qrOpen, onCloseQr, onOpenQr }) => {
  return (
    <section className="px-6 py-14 md:px-10">
      <SectionTitle>Hộp Mừng Cưới</SectionTitle>

      <QrModal qrOpen={qrOpen} onClose={onCloseQr} />

      <div className="grid gap-8 md:grid-cols-2">
        <BankCard item={bankAccounts[0]} type="groom" onOpenQr={onOpenQr} />
        <BankCard item={bankAccounts[1]} type="bride" onOpenQr={onOpenQr} />
      </div>
    </section>
  );
};
