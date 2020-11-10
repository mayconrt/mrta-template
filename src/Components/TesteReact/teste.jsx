import React, { Fragment } from 'react'

function CurrencySource(props) {

    return (
        <Fragment>
            <label name={props.name}>
                {props.title}
            </label>
            <input
                name={props.name}
                className="currency-source"
                type={props.type}
                maxlength={props.maxlength}
            />
        </Fragment>
    )

}

export default CurrencySource