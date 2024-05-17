import ThemeToggler from '../ui/themeToggler'
import HeaderLogo from './headerLogo'

export default function Header() {
  return (
    <header
      role='navigation'
      className='top-0 left-0 sticky bg-background/20 shadow-sm backdrop-blur-sm backdrop-saturate-[180%] border-b border-border/20 w-full h-16'
    >
      <div className='mx-auto 2xl:max-w-screen-2xl size-full'>
        <nav className='flex justify-between items-center px-6 md:px-14 size-full'>
          <HeaderLogo className='text-xl' />

          <ThemeToggler />
        </nav>
      </div>
    </header>
  )
}
