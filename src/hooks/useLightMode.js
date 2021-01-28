import { useState, useEffect } from "react"

export const useLightMode = (state = "dark") => {
  const [theme, setTheme] = useState(state)
  const [mountedComponent, setMountedComponent] = useState(false)
  // set localStorage and theme
  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    // if localTheme exists set theme to localTheme
    localTheme && setTheme(localTheme)
    setMountedComponent(true)
  }, [])

  return [theme, toggleTheme, mountedComponent]
}
