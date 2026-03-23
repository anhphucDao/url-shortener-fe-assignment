import { useState } from 'react'
import './App.css'
function App() {
  const [inp, set] = useState('')
  const [res, scr] = useState('')
  const [cop, setcop] = useState(false)

  return (
    <>
      {cop && <div className="not">The link has been copied to the clipboard</div>}
      <main className="con">
        <h1 className="tit">URL Shortener</h1>
        <input
          type="text"
          placeholder="Please enter your URL ..."
          value={inp}
          onChange={eve => set(eve.target.value)}
          className="input"
        />
        <button
          className="but"
          onClick={() => {
            if (!inp) {
              return
            }
            const yea: number[] = []
            for (let a = 1930; a <= 2026; a += 4) {
              yea.push(a)
            }
            const ind = Math.floor(Math.random() * yea.length)
            const num = yea[ind]
            const lin = 'https://fifa.wc/' + num
            scr(lin)
            setcop(false)
          }}
        >
          Make it shorter
        </button>
        {res && (
          <div className="fra">
            <p className="ans">{res}</p>
            <button
              className="but2"
              onClick={() => {
                navigator.clipboard.writeText(res)
                setcop(true)
                setTimeout(() => {
                  setcop(false)
                }, 2000)
              }}
            >
              Copy
            </button>
          </div>
        )}
      </main>
    </>
  )
}
export default App
