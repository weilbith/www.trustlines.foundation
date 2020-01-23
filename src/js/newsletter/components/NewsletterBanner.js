import React, { useState, useCallback } from "react"
import NewsletterWrapper from "./NewsletterWrapper"
import Appeal from "./Appeal"
import CloseButton from "./CloseButton"
import SubscribeForm from "./SubscribeForm"
import {
  hasUserSubscribedOrClosedBanner,
  setUserHasSubscribedOrClosedBanner,
} from "../state/subscriptionState"

function NewsletterBanner() {
  // The subscription state is no interactively changing value, so there is no
  // need to use an effect.
  const [bannerVisible, setBannerVisible] = useState(
    !hasUserSubscribedOrClosedBanner()
  )

  const closeBanner = useCallback(() => {
    setUserHasSubscribedOrClosedBanner()
    setBannerVisible(false)
  }, [setBannerVisible])

  return (
    // Use a class to hide the component rather than an remove it from the DOM
    // to avoid bugs with the form when closing it while the subscription is
    // submitted.
    <NewsletterWrapper
      className={`has-background-dark has-text-light has-thin-padding ${
        bannerVisible ? "" : "is-hidden"
      }`}
    >
      <div className="columns">
        <div className="column is-5 is-offset-1">
          <Appeal className="has-text-light">
            Subscribe to our newsletter &amp; stay up to date
          </Appeal>
          <CloseButton onClick={closeBanner} />
        </div>
        <div className="column is-5">
          <SubscribeForm onSubscriptionSend={closeBanner} />
        </div>
      </div>
    </NewsletterWrapper>
  )
}

export default NewsletterBanner
