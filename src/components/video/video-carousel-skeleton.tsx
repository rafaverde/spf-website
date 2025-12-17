export default function VideoCarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="bg-spf-green-100/50 h-[280px] animate-pulse rounded-4xl"
        />
      ))}
    </div>
  );
}
