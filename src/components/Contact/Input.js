import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { useTheme } from "styled-components"
function Input({ type, name, label, textarea = false }) {
  const theme = useTheme()
  const [value, setValue] = useState("")
  const [{ y, color }, set] = useSpring(() => ({
    y: 170,
    color: theme.label,
  }))

  const handleChange = e => {
    setValue(e.target.value)
  }

  const moveUp = () => {
    set({ y: 0, color: "#e80583" })
  }

  const moveDown = () => {
    if (value === "") {
      set({ y: 170, color: theme.label })
    }
  }

  return (
    <div onBlur={moveDown} onFocus={moveUp} role="presentation">
      <animated.label
        style={{
          transform: y.interpolate(v => `translateY(${v}%`),
          color: color,
        }}
      >
        {label}
      </animated.label>
      {textarea ? (
        <textarea name={name} value={value} onChange={handleChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={handleChange} />
      )}
    </div>
  )
}

export default Input
