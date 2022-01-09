import React from 'react'

function Person() {
    return (
        <div>
            Person components
            {/* To generate an error in the components */}
            {props.data.splice()}
        </div>
    )
}

export default Person
