import React, { useState } from "react"

const questions = [
  {
    question: `What is the Trustlines Merkle drop?`,
    answer: `The Trustlines Merkle drop is a smart contract deployed on the Ethereum blockchain that contains a list of addresses and claimable Trustlines Network Tokens per address in the form of a Merkle root. People can provide a Merkle proof to this contract and claim the tokens they are entitled to.`,
  },
  {
    question: "What can you do with TLN?",
    answer: `Claimed Trustlines Network Tokens (TLN) can be bridged to the Trustlines Blockchain to produce Trustlines Network Coins (TLC). TLC is used to pay for transactions on the Trustlines Blockchain and can be used to create trustlines with your friends. The Trustlines Network Token is an ERC20 token on Ethereum.`,
  },
]

function IntroParagraph() {
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  return (
    <div className="columns">
      <div className="column is-5">
        {questions.map(({ question }, index) => (
          <div key={index}>
            <button
              onClick={() => setSelectedQuestion(index)}
              className="borderless-button is-paddingless"
            >
              <h5
                className={
                  "title is-5 " +
                  (selectedQuestion === index
                    ? "has-text-weight-bold"
                    : "has-text-weight-light")
                }
              >
                <span
                  className={
                    "icon is-medium " +
                    (selectedQuestion !== index ? "has-opacity-zero" : "")
                  }
                >
                  <i className="fas fa-arrow-right" />
                </span>
                {question}
              </h5>
            </button>
          </div>
        ))}
      </div>
      <div className="is-divider-vertical" />
      <div className="column">
        <p className="has-text-justified">
          {questions[selectedQuestion].answer}
        </p>
      </div>
    </div>
  )
}

export default IntroParagraph
