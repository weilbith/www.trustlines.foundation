import getWeb3 from "../../common/web3"
import MerkleDropABI from "../../abi/merkle-drop.json"

export async function claimTokens(
  address,
  value,
  proof,
  onSign,
  onConfirmation
) {
  const merkleDropContract = getMerkleDropContract()

  try {
    return await merkleDropContract.methods
      .withdraw(value, proof)
      .send({
        from: address,
      })
      .on("transactionHash", hash => onSign && onSign(hash))
      .on(
        "confirmation",
        (confirmationNumber, receipt) =>
          onConfirmation && onConfirmation(confirmationNumber, receipt)
      )
  } catch (error) {
    // As there seem to be no common error format, this is the best we can do
    if (error.message.includes("revert")) {
      throw new TransactionRevertedError(error.message)
    } else if (error.message.includes("denied")) {
      throw new UserRejectedError(error.message)
    } else {
      throw new Error(error.message)
    }
  }
}

export async function getClaimedTokenAmountByReceipt(receipt) {
  const merkleDropContract = getMerkleDropContract()
  const eventFilter = {
    fromBlock: receipt.blockNumber,
    transactionHash: receipt.transactionHash,
  }
  const withdrawEvents = await merkleDropContract.getPastEvents(
    "Withdraw",
    eventFilter
  )

  if (withdrawEvents.length !== 1) {
    throw new ParseWithdrawEventError(
      "Could not find withdraw event for given receipt."
    )
  } else {
    return parseWithdrawEventTokenAmount(withdrawEvents[0])
  }
}

function getMerkleDropContract() {
  const web3 = getWeb3()
  // TODO: Theoretically, web3 could be undefined here. Should not happen, but might. Handle?
  const contract = new web3.eth.Contract(
    MerkleDropABI,
    process.env.REACT_APP_MERKLE_DROP_ADDRESS
  )
  return contract
}

function parseWithdrawEventTokenAmount(withdrawEvent) {
  // This event argument has the type BigNumber.
  // We convert it to a String for an unified handling of amount values
  // (like by the backend) to enable further processing.
  return withdrawEvent.returnValues.value.toString()
}

export const USER_REJECTED_ERROR_CODE = "USER_REJECTED_ERROR"
export const TRANSACTION_REVERTED_ERROR_CODE = "TRANSACTION_REVERTED_ERROR"
export const PARSE_WITHDRAW_EVENT_ERROR_CODE = "PARSE_WITHDRAW_EVENT_ERROR"

class UserRejectedError extends Error {
  constructor(...args) {
    super(...args)
    this.code = USER_REJECTED_ERROR_CODE
  }
}

class TransactionRevertedError extends Error {
  constructor(...args) {
    super(...args)
    this.code = TRANSACTION_REVERTED_ERROR_CODE
  }
}

class ParseWithdrawEventError extends Error {
  constructor(...args) {
    super(...args)
    this.code = PARSE_WITHDRAW_EVENT_ERROR_CODE
  }
}
