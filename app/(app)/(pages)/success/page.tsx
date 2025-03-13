import { Button } from '@/components/ui/button';
import NavBar from '@/components/wrapper/navbar';
import Link from 'next/link';

export default async function SuccessPage() {
  // Mock subscription status for development
  const hasActiveSubscription = true;

  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <NavBar />
      {hasActiveSubscription ? <h1 className="mt-[35vh] mb-3 scroll-m-20  text-5xl font-semibold tracking-tight transition-colors first:mt-0">
        Subscription Successful 🎉
      </h1> : <h1 className="mt-[35vh] mb-3 scroll-m-20  text-5xl font-semibold tracking-tight transition-colors first:mt-0">
        You Can Subscribe Now
      </h1>}
      <Link href={hasActiveSubscription ? "/dashboard" : "/pricing"} className='mt-4'>
        <Button>{hasActiveSubscription ? "Access Dashboard" : "View Pricing"}</Button>
      </Link>
    </main>
  )
}
