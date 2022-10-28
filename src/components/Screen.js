import React from 'react'
import '../App.css'

function Screen(props) {

    return (
        <div>
            <div className='screen'>
                <input className='screen-result' value={props.result} readOnly/>
            </div>
        </div>
    )
}

export default Screen