interface TechStackLogoProps {
  src: string
  alt: string
}

export function TechStackLogo({ src, alt }: TechStackLogoProps) {
  return (
    <div className="w-[57px] h-8 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </div>
  )
}
