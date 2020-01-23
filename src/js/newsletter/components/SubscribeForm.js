import React, { useState, useCallback } from "react"
import EmailInput from "./EmailInput"
import SubscribeButton from "./SubscribeButton"
import ConditionsCheckbox from "./ConditionsCheckbox"

function SubscribeForm({ onSubscriptionSend }) {
  const [conditionsAcknowledged, setConditionsAcknowledged] = useState(false)

  const toggleConditionsAcknowledged = useCallback(() => {
    setConditionsAcknowledged(!conditionsAcknowledged)
  }, [conditionsAcknowledged, setConditionsAcknowledged])

  const submitUrl = process.env.REACT_APP_MAILCHIMP_URL

  return (
    <form
      action={submitUrl}
      method="post"
      target="_blank"
      onSubmit={onSubscriptionSend}
      className="has-controls-top"
    >
      <div className="field has-addons">
        <EmailInput />
        <SubscribeButton disabled={!conditionsAcknowledged} />
      </div>
      <div className="field">
        <ConditionsCheckbox onClick={toggleConditionsAcknowledged} />
      </div>
    </form>
  )
}

export default SubscribeForm
