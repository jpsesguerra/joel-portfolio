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
          <div className="h-3 w-24 bg-[var(--color-system-background-02)] animate-pulse rounded" />
          <div className="h-3 w-3 bg-[var(--color-system-background-02)] animate-pulse rounded" />
          <div className="h-3 w-56 bg-[var(--color-system-background-02)] animate-pulse rounded" />
        </div>

        {/* Body: chapter nav + content */}
        <div className="pl-[40px] pt-[40px]">
          <div className="flex gap-[40px] items-start">
            {/* Chapter nav */}
            <div className="w-[160px] shrink-0 flex flex-col gap-3">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="h-3 bg-[var(--color-system-background-02)] animate-pulse rounded" style={{ width: `${55 + i * 8}%` }} />
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 max-w-[842px] flex flex-col gap-6 pr-8">
              {/* Hero: meta chips */}
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-[var(--color-system-background-02)] animate-pulse rounded-full" />
                <div className="h-3 w-28 bg-[var(--color-system-background-02)] animate-pulse rounded" />
              </div>
              {/* Title */}
              <div className="h-12 w-2/3 bg-[var(--color-system-background-02)] animate-pulse rounded" />
              {/* Hero image */}
              <div className="h-[320px] w-full bg-[var(--color-system-background-02)] animate-pulse rounded-xl" />
              {/* Meta cards row */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-[var(--color-system-background-02)] animate-pulse rounded-lg" />
                ))}
              </div>
              {/* KPI result cards */}
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 h-24 bg-[var(--color-system-background-02)] animate-pulse rounded-lg" />
                ))}
              </div>
              {/* Overview section */}
              <div className="pt-6 border-t border-[var(--color-system-border)] flex flex-col gap-4">
                <div className="h-3 w-24 bg-[var(--color-system-background-02)] animate-pulse rounded" />
                <div className="h-8 w-1/2 bg-[var(--color-system-background-02)] animate-pulse rounded" />
                <div className="h-5 w-full bg-[var(--color-system-background-02)] animate-pulse rounded" />
                <div className="h-5 w-4/5 bg-[var(--color-system-background-02)] animate-pulse rounded" />
                <div className="h-5 w-full bg-[var(--color-system-background-02)] animate-pulse rounded" />
              </div>
              {/* Role contribution tiles */}
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-20 bg-[var(--color-system-background-02)] animate-pulse rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
