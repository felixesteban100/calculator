import React from 'react'
import '../App.css'

function Buttons(props) {
    let keysCharacters = [7, 8, 9, 'DEL', 4, 5,6,'+',1,2,3,'-','.',0,'/','x']
    let bottombuttonschar = ['RESET', '=']
    let operationCharacters = ["+", '-', 'x', '/', '.']
    
    const numbersKeys = keysCharacters.map((current, index) => {
        // console.log(typeof current, current)
        if(typeof current === "number" || operationCharacters.includes(current)){ // yellow light (number)
            return (
                <div className='key number-or-operation' value={current} onClick={() => props.addCharacter(current)} key={index}>{current}</div>
            )
        }else{ // if(current === "DEL"){ // blue light ()
            return (
                <div className='key del' value={current} onClick={() => props.addCharacter(current)} key={index}>{current}</div>
            )
        }
    })

    const bottombuttons = bottombuttonschar.map((current, index) => {
        // console.log(typeof current, current)
        if(current === "="){ // red light / orange (=)
            return (
                <div className='key--bottom equal' value={current} onClick={() => props.addCharacter(current)} key={index}>{current}</div>
            )
        }else{
            return (
                <div className='key--bottom del' value={current} onClick={() => props.addCharacter(current)} key={index}>{current}</div>
            )
        }
    })

    return (
        <div>
            <div className='keyboard'>
                <div className='path-keys'>
                    <div className='keys'>
                        {numbersKeys}
                    </div>
                    <div className='keys--bottom'>
                        {bottombuttons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons