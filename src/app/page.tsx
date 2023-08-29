import Image from 'next/image'
import TodoApp from './TodoApp'
import Footer from './footer'
export default function Home() {
  return (
    <><div className='flex justify-center h-screen'>
      <TodoApp />
    </div><div>
        <Footer />
      </div></>
  )
}
