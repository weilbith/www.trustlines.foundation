import React from "react"

export default function EmailInput(props) {
  return (
    <div className="control is-fullwidth">
      <input
        {...props}
        type="email"
        defaultValue=""
        name="EMAIL"
        placeholder="Email address"
        className={`input has-text-light has-placeholder-light has-background-black has-shadow-dark is-rounded ${props.className}`}
      />
    </div>
  )
}
