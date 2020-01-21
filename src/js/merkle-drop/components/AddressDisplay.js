import React from "react"

function AddressDisplay(props) {
  return (
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
  )
}

export default AddressDisplay
