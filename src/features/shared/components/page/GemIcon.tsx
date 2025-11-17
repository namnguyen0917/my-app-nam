interface GemIconProps {
  index?: number; // 0–15 tương ứng vị trí trong sprite 4x4
  size?: number; // kích thước hiển thị (px)
  nameImages?: string;  // Tên ảnh
  nameFolder?: string;  // Tên folder chứa ảnh
  spriteSize?: number;  // kích thước tổng thể ảnh (width & height)
  cols?: number; // số cột trong sprite
}

export default function GemIcon({
  index = 0,
  size = 52,
  spriteSize = 200,
  nameImages ="Gemjiankang",
  nameFolder = "icons",
  cols = 4
}: GemIconProps) {
  
  const cellSize = spriteSize / cols; // kích thước mỗi viên
  
  // Tính vị trí x,y
  const x = (index % cols) * cellSize;
  const y = Math.floor(index / cols) * cellSize;

  //đường dẫn img
  const src = "/assets/"+ nameFolder +"/"+ nameImages +".jpg";

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
