import React from 'react'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 justify-center items-center">
      <h1 className="text-2xl flex-wrap sm:text-4xl lg:text-5xl lg:font-bold flex justify-center gap-3 text-white italic font-medium">
        <span className="text-yellow-400">Vite</span>
        <span className="text-cyan-500">Tailwind</span>
        <span className="text-purple-500">Eslint</span>
        <span className="text-pink-500 italic">Airbnb Styleguide</span>
        <span className="text-black font-normal">Starter</span>
      </h1>
      <a
        href="https://github.com/Abdelmuttalib"
        className="text-black hover:text-opacity-80 font-medium"
      >
        Abdelmuttalib Ahmed
      </a>
    </div>
  )
}

export default App
