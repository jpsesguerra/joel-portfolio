'use client'

import dynamic from 'next/dynamic'

const LanyardCard3D = dynamic(
  () => import('@/components/LanyardCard3D').then((m) => ({ default: m.LanyardCard3D })),
  { ssr: false }
)

interface LanyardCard3DWrapperProps {
  cardImageSrc?: string
  clipColor?: string
  startPosition?: string
  gravity?: number
  cameraDistance?: number
  lightingIntensity?: number
  interactive?: boolean
}

export function LanyardCard3DWrapper(props: LanyardCard3DWrapperProps) {
  return <LanyardCard3D {...props} />
}
