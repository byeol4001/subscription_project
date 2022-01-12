import React from "react"
import {Link} from "react-router-dom"

export default function BasicButton({color, text, move}) {
  // ? props.color ( 버튼 배경색 )
  // : 'main' > MainBlue Color

  const buttonClass = `c-basic-button ${color}`
  return (
    <Link to={move} className={buttonClass}>
      {text}
    </Link>
  )
}
