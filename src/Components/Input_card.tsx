import { Link2 } from 'lucide-react'
import { useState } from 'react'

export default function Input_card() {
  const [input_url, setInput_url] = useState('')
  return (
    <div className="w-208 h-38 shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px] flex items-center justify-center py-2">
      <div className=" w-186">
        <p className="font-semibold text-[20px] text-primary-500">Your long URL</p>
        <div className="flex flex-row py-2">
          <div className="flex flex-row items-center px-1  w-152 border rounded-[10px] border-gray-400 divide-x divide-gray-400">
            <Link2
              className="w-12 flex-none mr-1 my-2"
              onClick={async () => {
                try {
                  setInput_url(await navigator.clipboard.readText())
                  alert('Link is pasted from clipboard!')
                } catch (err) {
                  console.error('Paste errer: ', err)
                }
              }}
            />
            <input
              className="w-1 flex-1 mx-1 my-2 focus:outline-none"
              value={input_url}
              placeholder="Input the URL you want to shorten"
            />
          </div>
          <button
            className="w-24.5 mx-auto rounded-[10px] bg-primary-500 font-bold font-sans text-white hover:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]"
            onClick={() => {}}
          >
            Shorten
          </button>
        </div>
      </div>
    </div>
  )
}
