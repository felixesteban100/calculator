import React from 'react'
import '../App.css'

function ToogleButton(props) {
    return (
        <div>
            <div className='toogle'>
                <div className='toogle-text'>THEME</div>
                <div className='tooglebutton'>
                    <div className={`toogle--circle position${props.theme}`} onClick={props.change}></div>
                </div>
            </div>
        </div>
    )
}

export default ToogleButton