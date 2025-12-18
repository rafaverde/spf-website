export default function NewsCarouselSkeleton() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-spf-green-100 col-span-1 hidden h-[380px] w-full animate-pulse rounded-2xl first:flex md:flex md:last:hidden lg:flex lg:last:flex"
          ></div>
        ))}
      </div>

      <div className="absolute right-1/2 -bottom-12 flex translate-x-1/2 gap-2">
        <div className="bg-spf-green-100 size-8 animate-pulse rounded-full"></div>
        <div className="bg-spf-green-100 size-8 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
}
