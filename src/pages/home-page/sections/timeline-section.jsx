import { SectionTitle } from "@/components/invitation";
import { timeline } from "../data";

export const TimelineSection = () => {
  return (
    <section className="bg-white/30 px-6 py-14 md:px-10">
      <SectionTitle>Lịch Trình Ngày Cưới</SectionTitle>
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#710001]/10 bg-white/80 p-6 shadow-md">
        {timeline.map((item, index) => (
          <div key={item.time} className="group flex items-start gap-5 py-2">
            <div className="w-24 text-right text-sm font-bold text-[#710001] md:text-base">{item.time}</div>
            <div className="relative flex flex-col items-center">
              <div className="z-10 mt-2 h-3 w-3 rounded-full bg-[#710001] ring-4 ring-[#f3d5c8]" />
              {index < timeline.length - 1 && <div className="absolute top-6 h-16 w-0.5 bg-[#710001]/20" />}
            </div>
            <div className="flex-1 py-1 text-sm font-medium text-[#710001] transition group-hover:translate-x-1 md:text-base">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
