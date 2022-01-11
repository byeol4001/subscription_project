import React from "react"

export default function BasicButton(props) {
  // ? props.color ( 버튼 배경색 )
  // : 'main' > MainBlue Color

  const buttonClass = `c-basic-button ${props.color}`
  return <div className={buttonClass}>{props.text}</div>
}
