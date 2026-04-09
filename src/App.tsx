import UserProfile from './components/UserProfile'
import InputBox from './components/InputBox'
function App() {
  return (
    <main className="w-screen min-h-screen relative flex items-center flex-col">
      <div className="w-screen h-[108px] px-[40px] bg-white flex justify-between items-center">
        <img src="public/images/devcamp_logo.svg" className="w-[96px] h-[74px]" />
        <UserProfile />
      </div>

      <div className="w-[832px] h-[301px] bg-white rounded-lg flex flex-col items-center gap-[10px]">
        <div className="w-[832px] h-[65px] justify-center items-center flex">
          <h1 className="text-6xl font-bold text-primary-500">Devcamp URL Shortener</h1>
        </div>

        <div className="w-[832px] h-[65px] justify-center items-center flex">
          <h2 className="text-[28px] text-primary-500">
            Simplify, Organize, and Share: URL Management Made Easy
          </h2>
        </div>

        <div className="w-[832px] h-[151px] justify-center items-center flex">
          <InputBox />
        </div>
      </div>
    </main>
  )
}

export default App
