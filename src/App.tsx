import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class='w-96 rounded-xl border border-red-500'>
      <h1 class='text-xl'>Title</h1>
      <div class="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        </div>
    </div>
  )
}

export default App
