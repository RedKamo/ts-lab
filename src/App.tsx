import { Bmi } from './components/Bmi'

function App() {
//console.log(process.argv)

  return (
  <main className=' bg-slate-800 min-h-screen flex flex-col items-center'>
    <h1 className='text-2xl text-slate-400'>TS - FullstackOpen</h1>
    <section className=' w-full p-4'>

    <Bmi/>
    </section>
  </main>
  )
}

export default App
