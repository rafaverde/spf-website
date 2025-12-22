export default function NewsArchiveSkeleton() {
  return (
    <div className="space-y-12">
      {/* Grid skeleton */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="bg-muted relative h-[380px] w-full animate-pulse overflow-hidden rounded-2xl"
          >
            {/* image placeholder */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

            {/* text placeholders */}
            <div className="absolute bottom-0 z-10 w-full space-y-3 p-6">
              <div className="bg-muted-foreground/20 h-5 w-3/4 rounded" />
              <div className="bg-muted-foreground/20 h-4 w-full rounded" />
              <div className="bg-muted-foreground/20 h-3 w-1/3 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center gap-2">
        <div className="bg-muted h-9 w-20 animate-pulse rounded" />
        <div className="bg-muted h-9 w-9 animate-pulse rounded" />
        <div className="bg-muted h-9 w-9 animate-pulse rounded" />
        <div className="bg-muted h-9 w-20 animate-pulse rounded" />
      </div>
    </div>
  );
}
