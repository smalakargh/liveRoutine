import { FaGithubAlt } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiFramer, SiVite } from 'react-icons/si'

function App() {
  return (
    <>
     <div className='bg-zinc-900 h-screen w-screen text-white flex justify-center items-center font-[poppins] p-6'>
      <main className='p-6'>
        <div className='flex gap-2'>Idea By <a href='https://github.com/smalakargh' target='_blank' rel='noopener noreferrer' className='text-zinc-400 flex items-center gap-2'><FaGithubAlt fontSize={25}/>Smalakar</a></div>
        <div className='text-4xl font-bold flex flex-wrap gap-2 items-center mt-4'>
        React<RiReactjsLine className='text-blue-500' /> + Vite<SiVite className='text-green-500'/> + Framer-Motion<SiFramer className='text-purple-500' /> + Tailwind-CSS<RiTailwindCssFill className='text-blue-500' /> + React Icons<RiReactjsLine className='text-red-500' />
        </div>
      </main>
     </div>
    </>
  )
}

export default App
