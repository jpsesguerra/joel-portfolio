import Image from 'next/image'

interface TechStackLogoProps {
  src: string
  alt: string
}

export function TechStackLogo({ src, alt }: TechStackLogoProps) {
  return (
    <div className="w-[57px] h-8 flex items-center justify-center">
      <Image src={src} alt={alt} width={57} height={32} className="max-w-full max-h-full object-contain" />
    </div>
  )
}
