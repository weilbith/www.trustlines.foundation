import React from "react"

function WaitCard({ title, children }) {
  return (
    <div className="box has-text-centered">
      <h1 className="subtitle is-2 has-text-weight-bold">{title}</h1>
      <div className="spinner-wrapper">
        <div className="spinner" />
      </div>
      <div className="has-text-grey has-text-centered">{children}</div>
    </div>
  )
}

export default WaitCard
