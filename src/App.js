import React from 'react';
import './App.css';
import Screen from './components/Screen';
import ToogleButton from './components/ToogleButton';
import Buttons from './components/Buttons';

function App() {
  const [result, setResult] = React.useState("")
  const [theme, setTheme] = React.useState(1)

  React.useEffect(()=> {
    let localStorageTheme = localStorage.getItem('theme_calculator')
    if(isNaN(localStorageTheme) !== true && localStorageTheme !== null){
      setTheme(parseInt(localStorageTheme))
    }else{
      localStorage.setItem('theme_calculator', 1)
      setTheme(1)
    }
  }, [])

  function changeTheme(){
    let localStorageTheme = localStorage.getItem('theme_calculator')
    let next = parseInt(localStorageTheme) + 1
    if(parseInt(localStorageTheme) === 3){
      localStorage.setItem('theme_calculator', 1)
    }else{
      localStorage.setItem('theme_calculator', next)
    }
    
    setTheme(prevValue => {
      if(prevValue===3){
        return 1
      }else{
        return prevValue + 1
      }
    })
  }

  function addCharacter(current){
    if(current === "Backspace") current = 'DEL'
    if(current === "Enter") current = '='
    let allCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '+', '.', 'RESET', 'DEL', '=']
    
    if (allCharacters.includes(current)) {
      // console.log(current)
      let characters = ['x','/','+','-']
      let solve = false
      setResult(prevValue => {
        // console.log(prevValue)
        for(let i = 0; i < prevValue.length; i++){
          if(characters.includes(prevValue[i])){
            solve = true
          }
        }

        if (prevValue.length === 11) {
          if(current === "DEL"){
            let deleting = prevValue.slice(0, -1)
            return deleting
          }else if(current === "RESET"){
            return "0"
          }else{
            return prevValue
          }
        }else if(solve && characters.includes(current)){
          return math(prevValue) + current
        }else{
          if(prevValue === "0" && current !== "RESET"){
            return current
          }else if(current === "DEL"){
            let deleting = prevValue.toString().slice(0, -1)
            return deleting
          }else if(current === "RESET"){
            return "0"
          }else if(current === "="){
            return math(prevValue)
          }else{
            return prevValue + `${current}`
          }
        }
      })      
    }
  }

  function math(result){
    let operation = result;
    console.log(result)

    // const regExp = new RegExp(/[0-9.]+/, 'g')

    const regExp = new RegExp(/[0-9.]+|[+-x/]/, 'g')
    let arrOperation = operation.match(regExp)
    let answer = 0

    for(let i = 0; i < arrOperation.length; i++){
      switch(arrOperation[i]){
        case '+':
          answer = parseFloat(arrOperation[i-1]) + parseFloat(arrOperation[i+1])
        break;
        case '-':
          answer = parseFloat(arrOperation[i-1]) - parseFloat(arrOperation[i+1])
        break;
        case 'x':
          answer = parseFloat(arrOperation[i-1]) * parseFloat(arrOperation[i+1])
        break;
        case '/':
          answer = parseFloat(arrOperation[i-1]) / parseFloat(arrOperation[i+1])
        break;
        default:
        break;
      }
    }
    console.log(answer)
    return answer
  }
  
  const style = () => {
    let result 
    switch(theme){
      case 1:
        result = "App1"
      break;
      case 2:
        result = "App2"
      break;
      case 3:
        result = "App3"
      break;
      default:
        
      break;
    }
    return result
  }
  // console.log(style())

  return (
    <div className={style()}tabIndex={0} onKeyDown={(event) => addCharacter(event.key)}>
      <div className='calculator'>
      <div className='top-calculator'>
        <h2 className='title'>Calculator</h2>
        <ToogleButton 
          change={changeTheme}
          theme={theme}
        />
      </div>
      <Screen
        result={result}
      />
      <Buttons
        addCharacter={addCharacter}
        math={math}
      />
      </div>
    </div>
  );
}

export default App;
