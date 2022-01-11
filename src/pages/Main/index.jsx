import React, {useEffect} from "react"
import BasicButton from "../../components/Button/BasicButton"
import "./main.scss"

export default function Main() {
  return (
    <div className="main-wrap">
      <div className="main-inner">
        <h1>
          Price of
          <br /> Subscribe
        </h1>
        <div className="main-inner-subtext">
          <p className="bold">달마다 조용히 나가는 돈 ?!</p>
          <p>구독 서비스 월결제 금액 계산해보기</p>
        </div>
        <BasicButton text="확인하러 가기" move="/" color="main" />
        <span className="main-inner-ver">ver 0.1</span>
      </div>
    </div>
  )
}
