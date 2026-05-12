import { SectionTitle } from "@/components/invitation";
import { familyCards } from "../data";

const FamilyCard = ({ side, parentLabel, parents, address }) => {
  return (
    <div className="group rounded-3xl border border-[#710001]/10 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8f5757]">{side}</p>
      <div className="mx-auto my-4 h-px w-12 bg-[#710001]/20" />
      <p className="mb-3 text-sm text-[#a06666]">{parentLabel}</p>
      {parents.map((parent) => (
        <p key={parent} className="mt-1 text-xl font-bold text-[#710001] first:mt-0">
          {parent}
        </p>
      ))}
      <div className="mt-5 border-t border-[#710001]/10 pt-4">
        {address.map((line) => (
          <p key={line} className="text-sm text-[#7b3d3d]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const CeremonyCard = () => {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#f6d9c9]/30 bg-gradient-to-br from-[#710001] via-[#8a1f1f] to-[#b14b38] p-8 text-center text-white shadow-[0_26px_70px_rgba(113,0,1,0.28)] transition-all duration-500 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(255,230,219,0.18),_transparent_36%)]" />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.28em] text-[#f3d5c8]">Lễ thành hôn</p>
        <p className="mt-1 text-xs uppercase text-[#f5ddd2]">Thứ Bảy, 13 Tháng 06, 2026</p>
        <div className="my-6">
          <span className="text-7xl font-bold md:text-8xl">09:00</span>
        </div>
        <p className="text-sm text-[#f3d5c8]/80">(Tức ngày 28/04 năm Bính Ngọ)</p>
        <div className="my-6 flex justify-center gap-3">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xl">❦</span>
          <div className="h-px w-12 bg-white/30" />
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#f3d5c8]">Trân trọng kính mời</p>
      </div>
    </div>
  );
};

export const FamilySection = () => {
  return (
    <section className="px-6 pb-12 md:px-10">
      <SectionTitle>Thông Tin Lễ Cưới</SectionTitle>
      <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr_1fr]">
        <FamilyCard {...familyCards[0]} />
        <CeremonyCard />
        <FamilyCard {...familyCards[1]} />
      </div>
    </section>
  );
};
