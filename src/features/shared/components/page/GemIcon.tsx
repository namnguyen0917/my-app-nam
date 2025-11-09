import Image from "next/image";

interface GemIconProps {
  index: number; // 0–15 tương ứng vị trí trong sprite 4x4
  size?: number; // kích thước hiển thị (px)
  src?: string;  // đường dẫn ảnh sprite
}

export default function GemIcon({
  index,
  size = 64,
  src = "/assets/icons/Gem1_1.jpg",
}: GemIconProps) {
  const cols = 4; // số cột trong sprite
  const rows = 4;
  const spriteSize = 260; // kích thước tổng thể ảnh (width & height)
  const cellSize = spriteSize / cols; // kích thước mỗi viên

  // Tính vị trí x,y
  const x = (index % cols) * cellSize;
  const y = Math.floor(index / cols) * cellSize;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${src})`,
        backgroundPosition: `-${x}px -${y}px`,
        backgroundSize: `${spriteSize}px ${spriteSize}px`,
        backgroundRepeat: "no-repeat",
      }}
      className="rounded-lg shadow-md border border-amber-400/30"
    />
  );
}
