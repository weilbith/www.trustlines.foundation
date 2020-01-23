import ReactDOM from "react-dom"
import React from "react"
import NewsletterBanner from "./components/NewsletterBanner"
import NewsletterSection from "./components/NewsletterSection"

ReactDOM.render(
  <NewsletterSection />,
  document.getElementById("rootNewsletterSection")
)

// Since the newsletter section must appear on each subpage, this gets loaded
// always. But the banner is only once. It would be nonsensical to split it
// because of that.
const rootNewsletterBanner = document.getElementById("rootNewsletterBanner")

if (rootNewsletterBanner) {
  ReactDOM.render(<NewsletterBanner />, rootNewsletterBanner)
}
