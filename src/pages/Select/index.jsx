import React from "react"
import MainTextBox from "../../components/Box/MainTextBox"
import SelectServiceBox from "../../components/Box/SelectServiceBox"

import "./select.scss"

export default function Select() {
  return (
    <div>
      <MainTextBox name="음악 스트리밍 서비스" />
      <div className="select-service-wrap">
        <SelectServiceBox />
      </div>
    </div>
  )
}
