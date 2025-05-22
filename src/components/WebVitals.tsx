'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    webVitals?: {
      onCLS: (callback: (metric: any) => void) => void
      onFID: (callback: (metric: any) => void) => void
      onFCP: (callback: (metric: any) => void) => void
      onLCP: (callback: (metric: any) => void) => void
      onTTFB: (callback: (metric: any) => void) => void
    }
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log)
        onFID(console.log)
        onFCP(console.log)
        onLCP(console.log)
        onTTFB(console.log)
      })
    }
  }, [])

  return null
}