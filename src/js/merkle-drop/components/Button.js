import React from "react"

function Button(props) {
  return (
    <button
      {...props}
      className={`button is-fullwidth is-rounded has-text-weight-bold ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button
