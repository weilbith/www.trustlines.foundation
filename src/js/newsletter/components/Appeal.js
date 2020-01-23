import React from "react"

export default function Appeal(props) {
  return (
    <p {...props} className={`title is-5 ${props.className}`}>
      {props.children}
    </p>
  )
}
