import React from "react"

function ColumnsWrapper({ headline, children }) {
  return (
    <div className="columns">
      <div className="column is-5">
        {headline && (
          <h5 className="title is-5 has-text-weight-bold">
            <span className="icon is-medium">
              <i className="fas fa-arrow-right" />
            </span>
            {headline}
          </h5>
        )}
      </div>
      <div className="is-divider-vertical" />
      <div className="column">{children}</div>
    </div>
  )
}

export default ColumnsWrapper
