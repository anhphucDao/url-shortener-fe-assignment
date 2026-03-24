import { useState, type FormEvent } from 'react'

export default function CheckerForm() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: gọi API kiểm tra
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Hero text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-500 mb-2">TikTok Video Fact Checker</h1>
        <p className="text-neutral-500 text-base">
          Dán link video TikTok để kiểm tra độ tin cậy và tính xác thực của nội dung
        </p>
      </div>

      {/* Input card */}
      <form
        onSubmit={handleSubmit}
        className="bg-shade-white rounded-2xl border border-neutral-100 shadow-sm p-6"
      >
        <label htmlFor="tiktok-url" className="block text-sm font-semibold text-neutral-700 mb-2">
          Link video TikTok
        </label>

        <div className="flex items-center gap-3 border border-neutral-200 rounded-xl px-4 py-3 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all bg-neutral-50">
          {/* TikTok icon inline */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="6" fill="#0b2878" />
            <path
              d="M22 8h-3.5v10.5a3 3 0 1 1-3-3c.17 0 .34.01.5.04V12a6.5 6.5 0 1 0 6.5 6.5V13.5a8.97 8.97 0 0 0 5 1.5V11.5A5.5 5.5 0 0 1 22 8z"
              fill="white"
            />
          </svg>

          <input
            id="tiktok-url"
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/@user/video/..."
            className="flex-1 bg-transparent outline-none text-sm text-neutral-800 placeholder:text-neutral-400"
          />
        </div>

        <button
          type="submit"
          disabled={!url.trim()}
          className="mt-4 w-full bg-primary-500 hover:bg-primary-300 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors text-sm"
        >
          Kiểm tra ngay
        </button>
      </form>

      {/* Result placeholder */}
      <ResultPlaceholder />
    </div>
  )
}

function ResultPlaceholder() {
  return (
    <div className="mt-6 bg-shade-white rounded-2xl border border-neutral-100 shadow-sm p-6">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">
        Kết quả phân tích
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <ScoreCard label="Độ tin cậy" value="—" color="text-neutral-300" />
        <ScoreCard label="Nguồn gốc" value="—" color="text-neutral-300" />
        <ScoreCard label="Nội dung" value="—" color="text-neutral-300" />
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center py-8 text-neutral-300">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="mb-3"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M16.5 16.5L21 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M11 8v3m0 3h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p className="text-sm">Nhập link video để bắt đầu phân tích</p>
      </div>
    </div>
  )
}

function ScoreCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col items-center bg-neutral-50 rounded-xl py-4 px-2">
      <span className={`text-2xl font-bold ${color}`}>{value}</span>
      <span className="text-xs text-neutral-500 mt-1 text-center">{label}</span>
    </div>
  )
}
