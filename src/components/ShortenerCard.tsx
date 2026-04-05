import { useState } from 'react'
import ResultModal from './ResultModal'

export default function ShortenerCard() {
  // tạo state - theo dõi nội dung user typing in
  const [urlInput, setUrlInput] = useState('')

  // trigger result layer
  const [isModalOpen, setIsModalOpen] = useState(false)
  // passing variable for creating short URL
  const [shortUrl, setShortUrl] = useState('')

  const handleShorten = async () => {
    try {
      // gửi request POST xuống Backend
      const response = await fetch('http://localhost:3000/api/urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl: urlInput }), // gửi long URL xuống Backend
      })

      const data = await response.json()
      console.log('Server trả về:', data) // in ra console để check

      // link rút gọn
      setShortUrl(`http://localhost:3000/${data.shortCode}`)
      // chuyển state
      setIsModalOpen(true)
    } catch (error) {
      console.log('Lỗi gửi dữ liệu:', error)
    }
  }

  // nếu ko chứa kí tự nào thì sẽ trigger các css disable
  const isButtonDisabled = urlInput.trim().length === 0

  return (
    <main className="pt-[250px] min-h-full fixed inset-0">
      <div className="flex flex-col justify-center items-center text-center gap-[15px]">
        <h1 className="text-[70px] text-[#0B2878] font-bold">Devcamp URL Shortener</h1>
        <p className="text-[28px] text-[#0B2878]">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        {/**the box - 2 row*/}
        <div className="w-full max-w-[1100px] mt-[30px] rounded-lg border border-solid border-[#7e7e7e4d] bg-white px-[30px] pt-[20px] pb-[30px] shadow-[0px_10px_50px_rgba(11,40,120,0.4)]">
          {/*row 1*/}
          <p className="text-left font-semibold text-[28px] text-[#0B2878] mb-2">
            Your long URL
          </p>{' '}
          {/*row 2 - input và icon*/}
          <div className="flex flex-row gap-6 ">
            {/**link icon và input */}
            <div className="flex flex-row rounded-lg pl-3 h-10 w-full items-center gap-3 border border-solid border-[3px] border-[#7e7e7e4d] text-black focus-within:border-[#000000a0]">
              <div className="">
                <img src="/link-icon.svg" alt="link icon" />
              </div>
              {/**the thin line */}
              <div className="h-2/3 w-[2.5px] bg-[#7e7e7e4d]"></div>

              <input
                type="text"
                placeholder="Input the URL you want to shorten"
                className="h-full grow outline-none placeholder:text-royal-300 pe-2.5 transition-all "
                tabIndex={1}
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
              />
            </div>
            {/**button */}
            <button
              className="flex flex-row items-center justify-center bg-[#0B2878ce] text-white rounded-[15px] font-bold text-[18px] px-[25px] hover:bg-[#0B2878ff] cursor-pointer disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-[#9da9c9] duration-200"
              disabled={isButtonDisabled}
              onClick={handleShorten}
            >
              Shorten
            </button>
          </div>
        </div>
      </div>

      {/**result after pressing button */}
      {isModalOpen && <ResultModal shortUrl={shortUrl} onclose={() => setIsModalOpen(false)} />}
    </main>
  )
}
