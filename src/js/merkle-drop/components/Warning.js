import React from "react"

function Warning({ message }) {
  return (
    <div className="box has-text-centered">
      <div className="columns is-vcentered">
        <div className="column is-2">
          <span className="icon is-medium title">
            <i className="fas fa-exclamation-circle" />
          </span>
        </div>
        <div className="column has-text-left">
          <span className="title is-6">{message}</span>
        </div>
      </div>
    </div>
  )
}

export default Warning
