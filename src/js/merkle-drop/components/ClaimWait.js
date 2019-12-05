import React from "react"

import * as blockexplorer from "../../common/blockexplorer"
import WaitCard from "./WaitCard"

function ClaimWait({ txHash }) {
  return (
    <WaitCard title="Waiting for confirmations">
      Your transaction has been sent and we are waiting for confirmation.
      <br />
      Check status on &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={blockexplorer.generateTransactionUrl(txHash)}
      >
        Etherscan
      </a>
      .
    </WaitCard>
  )
}

export default ClaimWait
