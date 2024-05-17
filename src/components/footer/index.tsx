import { META_TITLE } from '@/constants'

export default function Footer() {
  return (
    <footer className='flex justify-center items-center py-1.5'>
      <p className='font-light'>
        Copyright 2024 &copy; <span className='font-medium'>{META_TITLE}</span>
      </p>
    </footer>
  )
}
