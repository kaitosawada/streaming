import { NextResponse } from 'next/server'
import type { FormData } from '@/types/form'

export async function GET() {
  // 3秒のダミー遅延
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const data: FormData = {
    categories: ['Technology', 'Design', 'Marketing', 'Sales'],
    optionalItems: ['Premium Support', 'Extended Warranty', 'Custom Setup']
  }
  
  return NextResponse.json(data)
}