import { shortenUrl } from '../services/shorten-api'
interface UrlModalProps {
  inputUrl: string
  setInputUrl: React.Dispatch<React.SetStateAction<string>>
  isLoading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
  setResponseData: React.Dispatch<React.SetStateAction<string | null>>
}
function UrlModal({
  inputUrl,
  setInputUrl,
  isLoading,
  setLoading,
  setError,
  setResponseData,
}: UrlModalProps) {
  const handleShorten = async () => {
    setLoading(true)
    setError(false)
    try {
      const shortenurl = await shortenUrl(inputUrl)
      setResponseData(shortenurl)
    } catch {
      setError(true)
    }
  }
  const isDisabled = isLoading || inputUrl == ''
  return (
    <>
      <div className=" flex flex-col md:flex-row items-start bg-white shadow-[0_0_30px] shadow-primary-100/50 rounded-md w-[90%] md:w-[42%] p-5  mt-8 mb-2 md:min-w-187 text-start gap-5">
        <div className="grow w-full flex flex-col md:block px-2">
          <h2 className="text-primary-500 text-xl font-semibold mb-2 self-center md:self-start">
            Your long URL
          </h2>
          <div className="w-full flex grow h-11 items-center border border-primary-100/30 rounded-md focus-within:border-primary-500">
            <div className="flex h-[90%] items-center">
              <img src="../public/link.svg" className="pl-2 h-5" />
              <div className="h-2/3  w-px bg-primary-100 mx-2"></div>
            </div>
            <input
              required
              onChange={e => setInputUrl(e.target.value)}
              type="text"
              placeholder="Input the URL you want to shorten"
              className="focus:outline-none overflow-hidden grow h-full placeholder:text-primary-300"
            ></input>
          </div>
        </div>
        <button
          disabled={isDisabled}
          onClick={handleShorten}
          className="md:ml-2 hover:cursor-pointer self-center  md:self-start mt-4 md:mt-0 w-fit h-11 md:relative top-9 items-center rounded-lg py-2 px-6 mr-2 text-shade-white font-bold  bg-primary-500 disabled:bg-primary-300"
        >
          Shorten
        </button>
      </div>
    </>
  )
}
export default UrlModal
