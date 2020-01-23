/*
 * The user who has already subscribed to the newsletter or stated that he do
 * not want to should not be prompted again. Therefore this state is stored to
 * the local storage of the user.
 */

const SUBSCRIPTION_STATE_KEY = "userHasSubscribedOrClosedBanner"

function hasUserSubscribedOrClosedBanner() {
  const state = window.localStorage.getItem(SUBSCRIPTION_STATE_KEY)
  return parseSubscriptionState(state)
}

function parseSubscriptionState(state) {
  const value = JSON.parse(state)
  return value === null ? false : value
}

function setUserHasSubscribedOrClosedBanner() {
  setSubscriptionState(true)
}

function setSubscriptionState(state) {
  window.localStorage.setItem(SUBSCRIPTION_STATE_KEY, state)
}

export { hasUserSubscribedOrClosedBanner, setUserHasSubscribedOrClosedBanner }
