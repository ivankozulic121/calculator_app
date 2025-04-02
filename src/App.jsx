import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import './styles.css';

const Output = ({output}) =>{

  return (
    <div style={{backgroundColor:'rgb(24, 31, 50)'}} className="w-120 h-32 rounded-lg font-spartan text-right text-white text-6xl flex flex-row justify-end items-center pr-8 mt-5">{output}</div>
  )
}

const Header = () => {
  return (
  <div className="text-base flex flex-row justify-between">
    <p className="text-3xl">calc</p>
  <div className="flex flew-row justify-between items-center">
    <p className="text-xs">THEME</p>
    <p>toggle</p>
  
  </div>
  </div>)
}

const ButtonContainer = ({handleClick}) => {
  return (
    <div style={{backgroundColor:'rgb(37, 45, 68)'}} className="w-120 h-120 mt-5 p-8 rounded-xl grid grid-cols-4 gap-6" >
        <Button text="7" handleClick={handleClick}/>
        <Button text="8" handleClick={handleClick}/>
        <Button text="9" handleClick={handleClick}/>
        <Button text="DEL" fontStyle='24px' textColor='white' bgColor='rgb(162, 179, 225)' bShadow= '0px 3px 0px 0px #3b4664' handleClick={handleClick}/>
        <Button text="4" handleClick={handleClick}/>
        <Button text="5" handleClick={handleClick}/>
        <Button text="6" handleClick={handleClick}/>
        <Button text="+" handleClick={handleClick}/>
        <Button text="1" handleClick={handleClick}/>
        <Button text="2" handleClick={handleClick}/>
        <Button text="3" handleClick={handleClick}/>
        <Button text="-" handleClick={handleClick}/>
        <Button text="." handleClick={handleClick}/>
        <Button text="0" handleClick={handleClick}/>
        <Button text="/" handleClick={handleClick}/>
        <Button text="x" handleClick={handleClick}/>
        <Button className="col-span-2" text="RESET" fontStyle='24px' bgColor='rgb(162, 179, 225)' textColor='white' bShadow= '0px 3px 0px 0px #3b4664' handleClick={handleClick}/>
        <Button className="col-span-2" text="=" fontStyle='30px' bgColor ='rgb(249, 108, 91)' textColor='white' bShadow=' 0px 3px 0px 0px rgb(144, 35, 23)' handleClick={handleClick}/>
    </div>
  )
}

const Button = ({text, className, fontStyle, bgColor, textColor, bShadow, handleClick}) => {
  return (
    <button style={{backgroundColor: bgColor ? bgColor :'rgb(234, 227, 219)',boxShadow: bShadow ? bShadow : '0px 3px 0px 0px gray', fontSize:fontStyle, color: textColor ? textColor : '#3d4450'}} className={`w-full h-14 rounded-xl text-3xl ${className}`} onClick={handleClick} value={text}>{text}</button>
  )
}

const App = () => {


  const [output, setOutput] = useState('');
  const [operationState, setOperationState] = useState('+');
  const [operationClicked, setOperationClicked] = useState(false);
  const [result, setResult] = useState(0);

 
  
  if( operationState === '=') {
      setOutput(result);
      setOperationState('')
      setOperationClicked(false)
  }    
    const handleClick = (event) => {

    if( Number(event.target.value) || Number(event.target.value) === 0 ) {
      
      
      if( operationClicked || !output ) {
        setOutput((event.target.value))
        setOperationClicked(false)
      }

      else setOutput(output.concat(event.target.value))
}
    else if ( (event.target.value === '+' || event.target.value === '-' || event.target.value === '/' || event.target.value === 'x' || event.target.value === '=') && output )
    {
      if ( operationState === '+') setResult( result + Number(output)) 
      if ( operationState === '-') setResult( result - Number(output))
      if ( operationState === 'x') setResult( result  * Number(output))
      if ( operationState === '/') setResult( result / Number(output))
      if ( operationState === '') setResult(Number(output));
      
      setOperationState(event.target.value);
      setOperationClicked(true);
      
    
    }
  
    else if (event.target.value === '.' && output) setOutput(output.concat(event.target.value))
    else if ( event.target.value === 'DEL') setOutput(output.slice(0,output.length-1));
    else setOutput('');    


}


  return (
    <>
   <Header/>
   <Output output={output}/>
   <ButtonContainer handleClick={handleClick}/>
   
   </>
  )
}

export default App
