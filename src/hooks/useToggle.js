import { useState } from "react"

export const useToggle = (state = false) => {
  const [toggle, setToggle] = useState(state)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return [toggle, handleToggle]
}
