import { NextResponse } from 'next/server'

export async function GET() {
  // 3秒のダミー遅延
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const optionalItems = ['Premium Support', 'Extended Warranty', 'Custom Setup']
  
  return NextResponse.json({ optionalItems })
}