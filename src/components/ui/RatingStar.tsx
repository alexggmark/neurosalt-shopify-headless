import Image from 'next/image';

export default function StarRating({ rating }: { rating: number }) {
  const roundedRating = Math.round(Math.min(rating, 5) * 2) / 2;
  const percentage = (roundedRating / 5) * 100;

  return (
    <div className="relative flex h-5 items-center">
      {/* Empty stars */}
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative w-5 h-5 inline-block">
            <Image
              src="/images/star.svg"
              fill
              alt="empty star"
              className="opacity-20 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Filled stars */}
      <div
        className="absolute top-0 left-0 flex"
        style={{
          clipPath: `inset(0 ${100 - percentage - 1}% 0 0)`,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative w-5 h-5 inline-block">
            <Image
              src="/images/star.svg"
              fill
              alt="filled star"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
