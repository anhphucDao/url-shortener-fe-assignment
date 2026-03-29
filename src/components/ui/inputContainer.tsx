interface placeholderInput {
  text: string
  img_src: string
}

export function InputContainer({ text, img_src }: placeholderInput) {
  return (
    <div className="relative flex h-11 w-full items-center overflow-hidden rounded-lg border text-black focus-within:border-black border-[#7e7e7e4d]">
      <div className="absolute flex h-2/3 items-center">
        <img alt="link" className="me-0.5 ms-1.5 size-7.5 p-1.5" src={img_src} />
        <div className="h-2/3 w-px bg-[#7e7e7e4d]"></div>
      </div>
      <input
        type="url"
        className="h-full grow py-2 outline-none placeholder:text-royal-300 ps-12 pe-2.5"
        placeholder={text}
        required
      />
    </div>
  )
}
