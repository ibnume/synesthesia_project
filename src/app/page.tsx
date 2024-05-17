import Wrapper from '@/components/wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <Wrapper>
      <section className='flex justify-center items-center h-screen'>
        <h1 className='font-bold text-4xl md:text-9xl uppercase'>Hello</h1>
      </section>
      <section className='flex justify-center items-center bg-foreground h-screen text-background'>
        <h1 className='font-bold text-4xl md:text-9xl uppercase'>Bang Ibnu</h1>
      </section>
    </Wrapper>
  )
}
