import { motion } from "framer-motion";
import { SectionTitle } from "@/components/invitation";
import { timeline } from "../data";

export const TimelineSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-12 md:px-10">
      <SectionTitle>Lịch Trình Ngày Cưới</SectionTitle>

      <div className="relative mx-auto mt-8 max-w-xl">
        {/* Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#710001]/25" />

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* Time */}
              <div className="w-1/2 pr-5 text-right">
                <p className="text-lg font-semibold text-[#710001] md:text-xl">
                  {item.time}
                </p>
              </div>

              {/* Dot */}
              <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#710001] shadow">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              {/* Title */}
              <motion.div
                whileHover={{ x: 2 }}
                className="w-1/2 pl-5"
              >
                <p className="text-sm font-medium text-[#710001] md:text-base">
                  {item.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};