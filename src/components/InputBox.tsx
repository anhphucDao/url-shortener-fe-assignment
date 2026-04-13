import { useState } from 'react'

import URLInput from './URLInput'
import ShortenButton from './ShortenButton'
import Result from './Result/Result'

function InputBox() {
  const [url, setUrl] = useState('')
  const [showResult, setShowResult] = useState(false)
  return (
    // shadow-[x_y_blur_spread_color]; rgba(11,40,120,0.3) = 0B2878 30% opacity
    <div className="w-[800px] h-[119px] px-[28px] py-[20px] shadow-[0_4px_47px_rgba(11,40,120,0.3)] rounded-lg flex flex-col gap-[8px]">
      <h2 className="text-xl font-semibold text-primary-500">Your long URL</h2>
      <div className="w-[744px] h-[42px] flex gap-[38px]">
        <URLInput value={url} onChange={setUrl} />
        <ShortenButton onClick={() => setShowResult(true)} disabled={!url} />
      </div>
      {showResult && <Result onClose={() => setShowResult(false)} />}
    </div>
  )
}
export default InputBox
