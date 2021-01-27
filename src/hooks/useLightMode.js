import { useState, useEffect } from "react"

export const useLightMode = (state = "dark") => {
  const [theme, setTheme] = useState(state)
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")

    localTheme && setTheme(localTheme)
    setMountedComponent(true)
  }, [])

  return [theme, toggleTheme, mountedComponent]
}
