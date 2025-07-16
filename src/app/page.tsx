'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import PriceCalculator from '@/components/pages/priceCalculator'


const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PriceCalculator />
    </QueryClientProvider>
  )
}
