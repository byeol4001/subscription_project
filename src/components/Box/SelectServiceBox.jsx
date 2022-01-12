import React from "react"

export default function SelectServiceBox() {
  return (
    <div className="c-select-service-box">
      <div className="select-service-box-title">youtube</div>
      <div className="select-service-box-contents">
        <p className="content-title">Music Premium⁠</p>
        <p className="content-sub-title">음악듣기만 프리미엄 결제한 경우 선택</p>
        <div className="cotent-price-wrap">
          <p className="content-price">7,900 </p>
          <p>
            실결제금액 <br />( VTA포함 )
          </p>
          <p className="content-price-vta">8,690</p>
        </div>
      </div>
    </div>
  )
}
