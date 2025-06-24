import './App.css'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleButton = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="flex flex-col min-h-screen p-12 bg-white dark:bg-neutral-900">
        <nav className="grid grid-cols-2 items-center">
          <h1 className="text-xl dark:text-white text-amber-950 font-semibold ">
            Experimental
          </h1>
          <button
            onClick={toggleButton}
            className="justify-self-end p-4 bg-blue-600 dark:bg-purple-700 text-white rounded-xl font-semibold transition-colors duration-300"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </nav>
        <section className="w-[90%] max-w-3xl mx-auto mt-40 flex flex-col gap-8">
          <h1 className="text-blue-600 dark:text-white text-7xl font-semibold">
            A design conference for the dark side.
          </h1>
          <p className="text-sky-800 text-2xl tracking-wide leading-relaxed dark:text-neutral-300">
            The next generation of web users are tech-savvy and suspicious. They
            know how to use dev tools, they can detect a phishing scam from a
            mile away, and they certainly aren't accepting any checks from
            Western Union.
          </p>
          <p className="text-black dark:text-white text-2xl tracking-wide leading-relaxed">
            At DesignConference you'll learn about the latest dark patterns
            being developed to trick even the smartest visitors, and you'll
            learn how to deploy them without ever being detected.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
