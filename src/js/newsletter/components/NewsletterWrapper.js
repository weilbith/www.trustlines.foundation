import React from "react"

export default function NewsletterWrapper(props) {
  return (
    <section
      {...props}
      className={`newsletter is-marginless has-text-left ${props.className}`}
    >
      <div className="container">{props.children} </div>
    </section>
  )
}
