import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { useTheme } from "styled-components"
import { useToggle } from "../../hooks/useToggle"
function Input({ type, name, label, textarea = false }) {
  const theme = useTheme()
  const [value, setValue] = useState("")
  const [toggle, handleToggle] = useToggle(false)

  const styles = useSpring({
    color: toggle ? "#e80583" : theme.label,
    transform: toggle ? "translateY(0%)" : "translateY(170%)",
  })

  const handleChange = e => {
    setValue(e.target.value)
  }

  const moveUp = () => {
    if (!toggle) {
      handleToggle(true)
    }
  }

  const moveDown = () => {
    if (value === "") {
      handleToggle(false)
    }
  }

  return (
    <div onFocus={moveUp} onBlur={moveDown} role="presentation">
      <animated.label style={styles}>{label}</animated.label>
      {textarea ? (
        <textarea name={name} value={value} onChange={handleChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={handleChange} />
      )}
    </div>
  )
}

export default Input
