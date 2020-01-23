import React from "react"

export default function CloseButton(props) {
  return (
    <button
      {...props}
      className={`button is-text is-paddingless has-text-light ${props.className}`}
    >
      No thanks
    </button>
  )
}
