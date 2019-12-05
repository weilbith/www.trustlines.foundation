import Button from "./Button"
import React from "react"

function RetryButton(props) {
  const classNames =
    props.className || "is-background-gradient-dark has-text-white"

  return (
    <div className="field">
      <div className="control has-text-centered">
        <Button onClick={props.reset} className={classNames}>
          Enter different address
        </Button>
      </div>
    </div>
  )
}

export default RetryButton
