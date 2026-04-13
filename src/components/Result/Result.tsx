import CloseButton from './CloseButton'
import BGResult from './BGResult'
import QRCode from './QRCode'
import CopyButton from './CopyButton'

function Result({ onClose }: { onClose?: () => void }) {
  const shortenedURL = 'https://furl.one/myshortenlink'
  return (
    <div className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center">
      <div
        className="w-[400px] h-[469px] relative bg-shade-white rounded-lg
        overflow-hidden flex gap-[38px]"
      >
        <CloseButton onClose={onClose} />
        <BGResult />
        <QRCode />
        <h1 className="text-center text-[24px] font-bold text-primary-500 absolute top-[292px] left-[115px]">
          Link shortened!
        </h1>
        <h2
          className="w-[260px] h-[42px] text-center text-[14px] text-primary-500 
        absolute top-[331px] left-[70px]"
        >
          Access the “My URL” page to view statistics on your shortened links
        </h2>

        <div className="w-[276px] h-[40px] absolute top-[389px] left-[38px] rounded-lg border border-primary-500 px-[12px] py-[8px] text-[16px] text-primary-500 font-medium">
          {shortenedURL}
        </div>
        <CopyButton shortenedURL={shortenedURL} />
      </div>
    </div>
  )
}
export default Result
