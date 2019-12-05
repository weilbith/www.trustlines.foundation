import React from "react"

function AddressDisplay(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-four-fifths">
        <form>
          <div className="field">
            <label
              className="label has-text-weight-light has-text-grey"
              htmlFor="address"
            >
              ETH address
            </label>
            <div className="control has-icons-right">
              <input
                autoComplete="off"
                spellCheck="false"
                id="address"
                className="input has-text-weight-bold has-text-grey"
                type="text"
                value={props.address}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddressDisplay
