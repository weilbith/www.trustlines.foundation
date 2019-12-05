import React from "react"
import RetryButton from "./RetryButton"

function Error({ errorMessage, reset }) {
  return (
    <div>
      <div className="box has-text-centered is-background-gradient-light">
        <h1 className="subtitle is-2 has-text-weight-bold">
          &nbsp;Oops, something went wrong.
          <br />
          <span className="icon is-large">
            <i className="fas fa-exclamation-triangle fa-lg" />
          </span>
        </h1>
        <div className="has-text-grey has-text-centered">{errorMessage}</div>
      </div>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <RetryButton reset={reset} />
        </div>
      </div>
    </div>
  )
}

export default Error
