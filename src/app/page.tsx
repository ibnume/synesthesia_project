import Wrapper from '@/components/wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <Wrapper>
      <section className='flex h-screen items-center justify-center'>
        <h1 className='text-4xl font-bold uppercase md:text-9xl'>Hello</h1>
      </section>
      <section className='flex h-screen items-center justify-center bg-foreground text-background'>
        <h1 className='text-4xl font-bold uppercase md:text-9xl'>Bang Jali</h1>
      </section>
    </Wrapper>
  )
}
