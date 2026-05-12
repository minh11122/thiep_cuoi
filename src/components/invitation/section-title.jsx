export const SectionTitle = ({ eyebrow = "Wedding Invitation", children }) => {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[#b86b6b]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#710001] md:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-[#710001]/20" />
    </div>
  );
};
