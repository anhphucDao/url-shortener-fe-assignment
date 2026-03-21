import { X, Copy } from 'lucide-react'
import { useState } from 'react'

export default function Output_card() {
  const [result_url] = useState('https://furl.one/myshortenlink')
  return (
    <>
      {/* inset-0 và clip-path mới gặp */}
      <div className="bg-[rgb(0,0,0,0.3)] z-30 fixed inset-0 flex items-center justify-center">
        <div className="relative w-100 h-117 z-31 bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px]">
          {/* Phần xanh xanh */}
          <div className="w-100 h-49 bg-primary-500 rounded-t-[10px] [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]" />
          <X
            className="absolute right-3 top-3 bg-neutral-100 rounded-full w-8 h-8 hover:cursor-pointer"
            onClick={() => {}}
          />

          <div className="absolute z-32 w-55 aspect-square rounded-[10px] bg-white shadow-[0px_0px_60px_rgba(0,0,0,0.25)] top-10 justify-self-center">
            <img className="object-contain rounded-[10px]" src="/mock_QR.jpg" alt="QR Code" />
          </div>
          <div className="mt-25 mx-9">
            <div className="text-center text-[24px] text-primary-500 font-bold">Link shortend!</div>
            <div className="text-center text-[14px] text-primary-500 font-medium">
              Access the “My URL” page to view statistics <br /> on your shortened links
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                value={result_url[0]}
                readOnly
                className="h-10 w-69 focus:border-none border border-primary-500 rounded-[5px] font-sans p-3"
              />
              <Copy
                className="h-10 w-10 rounded-[5px] bg-primary-500 text-white ml-1 p-2"
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(result_url[0])
                    alert('Shorten link is copied !')
                  } catch (err) {
                    console.error('Copy errer: ', err)
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
