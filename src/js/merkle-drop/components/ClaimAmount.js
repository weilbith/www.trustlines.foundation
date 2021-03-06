import React, { useCallback } from "react"

import Button from "./Button"
import RetryButton from "./RetryButton"
import { CHAIN_STATE } from "../state/chainState"

function ClaimAmount({
  proof,
  originalAmount,
  currentAmount,
  onClaim,
  reset,
  chainState,
}) {
  const handleClaim = useCallback(() => {
    onClaim(proof, originalAmount)
  }, [onClaim, proof, originalAmount])

  const canClaim =
    chainState === CHAIN_STATE.CONNECTED ||
    chainState === CHAIN_STATE.CHAIN_UNKNOWN

  return (
    <div className="columns is-centered">
      <div className="column is-four-fifths">
        <div className="box has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-2">
              <span className="icon is-medium title">
                <i className="fas fa-check-circle" />
              </span>
            </div>
            <div className="column has-text-left">
              <span className="title is-6 has-text-grey-lighter">
                Yes, this address is eligible for a token claim.
              </span>
              <br />
              <span className="subtitle is-6 has-text-weight-bold">
                {parseTokenAmount(currentAmount)} TLN claimable out of
                original&nbsp;{parseTokenAmount(originalAmount)} TLN
              </span>
            </div>
          </div>
          {chainState === CHAIN_STATE.DISCONNECTED && (
            <p className="has-text-left has-text-grey">
              To claim your tokens, please browse this site with a Web3 enabled
              browser, install the Metamask plugin and set up your account.
            </p>
          )}
          {chainState === CHAIN_STATE.WRONG_CHAIN && (
            <p className="has-text-left has-text-grey">
              In order to claim your Tokens directly, you need to connect to
              the&nbsp;{process.env.REACT_APP_CHAIN_NAME}!
            </p>
          )}
          {chainState === CHAIN_STATE.CHAIN_UNKNOWN && (
            <p className="has-text-left has-text-grey">
              We were unable to check the chain you are connected to, please
              make sure you are connected to the&nbsp;
              {process.env.REACT_APP_CHAIN_NAME} before proceeding.
            </p>
          )}
        </div>
        <div className="columns is-desktop">
          <div className="column is-half-desktop">
            <RetryButton reset={reset} className="is-outlined is-primary" />
          </div>
          <div className="column is-half-desktop">
            <Button
              onClick={handleClaim}
              className="has-text-white is-background-gradient-dark"
              disabled={!canClaim}
            >
              Claim tokens now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function parseTokenAmount(amount) {
  return (
    parseInt(amount) / Math.pow(10, process.env.REACT_APP_TOKEN_DECIMALS)
  ).toFixed(process.env.REACT_APP_SHOW_DECIMALS)
}

export default ClaimAmount
