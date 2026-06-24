export default function Loading() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      {/* Sidebar placeholder */}
      <div className="w-[240px] shrink-0 border-r border-[var(--color-system-border)] hidden lg:block" />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header bar */}
        <div className="h-[56px] border-b border-[var(--color-system-border)] px-10 flex items-center">
          <div className="h-4 w-32 bg-[var(--color-system-background-02)] animate-pulse rounded" />
        </div>

        {/* Breadcrumb */}
        <div className="px-10 py-4 border-b border-[var(--color-system-border)] flex items-center gap-2">
          <div className="h-3 w-20 bg-[var(--color-system-background-02)] animate-pulse rounded" />
          <div className="h-3 w-3 bg-[var(--color-system-background-02)] animate-pulse rounded" />
          <div className="h-3 w-48 bg-[var(--color-system-background-02)] animate-pulse rounded" />
        </div>

        {/* Hero section */}
        <div className="px-10 pt-10 pb-0 border-b border-[var(--color-system-border)]">
          {/* Meta chips */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-4 w-4 bg-[var(--color-system-background-02)] animate-pulse rounded-full" />
            <div className="h-3 w-32 bg-[var(--color-system-background-02)] animate-pulse rounded" />
          </div>
          {/* Title */}
          <div className="h-14 w-3/4 bg-[var(--color-system-background-02)] animate-pulse rounded mb-4" />
          {/* Description */}
          <div className="h-5 w-full bg-[var(--color-system-background-02)] animate-pulse rounded mb-2" />
          <div className="h-5 w-2/3 bg-[var(--color-system-background-02)] animate-pulse rounded mb-8" />
          {/* Hero image */}
          <div className="h-[380px] w-full bg-[var(--color-system-background-02)] animate-pulse rounded-t-lg mb-0" />
          {/* Meta row */}
          <div className="flex gap-12 py-8 border-t border-[var(--color-system-border)] mt-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col gap-1.5 flex-1">
                <div className="h-2 w-12 bg-[var(--color-system-background-02)] animate-pulse rounded" />
                <div className="h-4 w-24 bg-[var(--color-system-background-02)] animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 px-10 gap-4 py-8 border-b border-[var(--color-system-border)]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-[var(--color-system-background-02)] animate-pulse rounded-md h-28" />
          ))}
        </div>

        {/* Body: chapter nav + content */}
        <div className="pl-[40px] pt-[40px]">
          <div className="flex gap-[40px] items-start">
            {/* Chapter nav */}
            <div className="w-[160px] shrink-0 flex flex-col gap-3">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="h-3 bg-[var(--color-system-background-02)] animate-pulse rounded" style={{ width: `${60 + i * 10}%` }} />
              ))}
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 max-w-[842px] flex flex-col gap-8 pr-8">
              <div className="h-4 w-24 bg-[var(--color-system-background-02)] animate-pulse rounded" />
              <div className="h-9 w-2/3 bg-[var(--color-system-background-02)] animate-pulse rounded" />
              <div className="h-5 w-full bg-[var(--color-system-background-02)] animate-pulse rounded" />
              <div className="h-5 w-4/5 bg-[var(--color-system-background-02)] animate-pulse rounded" />
              <div className="h-5 w-full bg-[var(--color-system-background-02)] animate-pulse rounded" />
              <div className="h-[300px] w-full bg-[var(--color-system-background-02)] animate-pulse rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
