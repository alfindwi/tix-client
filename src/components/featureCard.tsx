type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-6 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col gap-3 relative">
        <div className="absolute w-16 h-16 bg-[#1932b9]/50 blur-2xl rounded-full top-0 left-0 -translate-x-2 -translate-y-2"></div>

        <img src={icon} alt={title} className="w-10 h-10 relative z-10" />
        <h4 className="font-semibold text-lg text-gray-800 text-start">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed text-start">{description}</p>
      </div>
    </div>
  );
}
