import { NextResponse } from 'next/server'

import { BASE_API_URL } from '@/constants'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const path = searchParams.get('path')
  if (!path) {
    return NextResponse.json({ error: 'Path is required' }, { status: 400 })
  }

  const apiUrl = new URL(`${BASE_API_URL}/${path}`)

  searchParams.forEach((value, key) => {
    if (key !== 'path') {
      apiUrl.searchParams.append(key, value)
    }
  })

  try {
    const response = await fetch(apiUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data from the API', detail: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function POST(_req: Request) {
  return NextResponse.json({ error: 'Nice Try!' }, { status: 200 })
}

export async function PUT(_req: Request) {
  return NextResponse.json({ error: 'Nice Try!' }, { status: 200 })
}

export async function DELETE(_req: Request) {
  return NextResponse.json({ error: 'Nice Try!' }, { status: 200 })
}
