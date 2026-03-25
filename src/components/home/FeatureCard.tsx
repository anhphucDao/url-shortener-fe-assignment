// src/components/home/FeatureCard.tsx

// 1. Định nghĩa kiểu dữ liệu cho Props bằng TypeScript
interface FeatureCardProps {
  title: string
  description: string
  iconSrc: string // Đường dẫn đến icon
}

export const FeatureCard = ({ title, description, iconSrc }: FeatureCardProps) => {
  return (
    // 2. Container chính: Căn giữa nội dung, thêm hiệu ứng Hover
    <div className="my-10 flex flex-col items-center text-center px-4 group hover:scale-105 transition-transform duration-300">
      {/* 3. Icon Container: Đảm bảo icon luôn căn giữa và có kích thước chuẩn */}
      <div className="flex items-center justify-center mb-5 min-h-[80px]">
        <img alt={title} className="size-auto h-20 w-auto object-contain" src={iconSrc} />
      </div>

      {/* 4. Tiêu đề */}
      <h4 className="mb-2 text-2xl font-bold text-primary-500 font-sans">{title}</h4>

      {/* 5. Mô tả */}
      <p className="max-w-[320px] text-neutral-800 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
