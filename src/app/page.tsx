'use client'
import PriceCalculator from '@/components/pages/priceCalculator'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PriceCalculator />
    </QueryClientProvider>
  )
}
