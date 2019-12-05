import React from "react"
import Notification from "react-notify-toast"
import ClaimFlow from "./ClaimFlow"

function MerkleDropApp() {
  return (
    <div className="container">
      <ClaimFlow />
      <Notification />
    </div>
  )
}

export default MerkleDropApp
