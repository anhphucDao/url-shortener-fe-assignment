import Button from './Button'
interface UrlModalProps {
  isLoading: boolean
  onShorten: () => void
  setInputUrl: React.Dispatch<React.SetStateAction<string>>
  inputUrl: string
}
function UrlModal({ isLoading, onShorten, setInputUrl, inputUrl }: UrlModalProps) {
  const isDisabled = isLoading || inputUrl == ''
  return (
    <>
      <div className=" flex flex-col md:flex-row items-start bg-white shadow-[0_0_30px] shadow-primary-100 /50 rounded-md w-[90%] md:w-[42%] p-5  mt-8 mb-2 md:min-w-187 text-start gap-5">
        <div className="grow w-full flex flex-col md:block px-2">
          <h2 className="text-primary-500 text-xl font-semibold mb-2 self-center md:self-start">
            Your long URL
          </h2>
          <div className="w-full flex grow h-10 items-center border border-primary-100/30 rounded-md focus-within:border-primary-500">
            <div className="flex h-[90%] items-center">
              <img src="./link.svg" className="pl-2 h-5" />
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
        <Button
          disabled={isDisabled}
          onClick={onShorten}
          className="md:ml-2 self-center md:self-start mt-4 md:mt-0 md:relative top-9 mr-2 text-primary-0  bg-primary-500 disabled:bg-primary-300"
          size="md"
          width="fit"
          shape="square"
        >
          Shorten
        </Button>
      </div>
    </>
  )
}
export default UrlModal
