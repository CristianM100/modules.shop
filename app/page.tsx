//import Image from 'next/image'
//import heroImage from '@/public/images/hero.jpg'
import Link from 'next/link'

const Page = () => {
  return (
    <section className='h-full'>
      <div className='relative isolate h-full overflow-hidden pt-14'>
        <div
          aria-hidden='true'
          className='fixed inset-0 -z-10 bg-black/90 bg-blend-multiply'
        />
        <div className='mx-auto max-w-2xl py-32 px-4 sm:py-48 md:px-6 lg:py-56 xl:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Online Programming Courses
            </h1>
            <p className='mt-6 text-lg leading-8 text-stone-300'>
              Online Software Development Courses for beginners
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/products'
                className='rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400'
              >
                Purchase Courses
              </Link>
              <Link
                href='#'
                className='text-sm font-semibold leading-6 text-white'
              >
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page


