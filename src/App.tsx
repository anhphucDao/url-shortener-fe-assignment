function App() {
  return (
    <main className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className="w-[1920px] h-[980px] bg-white relative">
        <h1 className="absolute top-[132px] left-[600px] text-3xl font-bold text-primary-500">
          Devcamp URL Shortener
        </h1>

        <p className="absolute top-[184px] left-[585px] text-2xl text-primary-500">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
        <div className="absolute top-[249px] left-[565px] w-[800px] h-[119px] bg-white rounded-xl shadow flex justify-center items-center">
          <h1 className="absolute top-[22px] left-[36px] w-[124px] h-[29px] text-1xl font-bold text-primary-500">
            Your long URL
          </h1>
          <div className="abosolute top-[30px] left-[11px] w-[608px] h-[42px] bg-white rounded-xl shadow ">
            <h1>Input the URL you want to shorten </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
