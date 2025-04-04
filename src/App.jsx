import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import './styles.css';
import { useTheme } from './contexts/ThemeContext';

const Output = ({output}) =>{

  return (
    <div className="w-120 h-32 rounded-lg font-spartan text-right bg-output text-6xl text-outputText flex flex-row justify-end items-center pr-8 mt-5">{output}</div>
  )
}

const Header = ({handleToggleClick, theme}) => {
    

    //const handleToggleClick = () => {
      //setToggleState(toggleState+1)
    //}
    //const togglePosition =
    //toggleState === 0 ? 'after:translate-x-0' :
    //toggleState === 1 ? 'after:translate-x-1/2' :
    //'after:translate-x-full';
    //((const { theme, setTheme } = useTheme();
    return (
        <div className="flex flex-row justify-between items-end">
            <p className="text-outColor text-3xl">calc</p>
            <div className="flex flex-row justify-end items-end gap-4">
                <p className="text-xs text-outColor">THEME</p>
                <div className="flex flex-col justify-end items-end">
                    <div className="pl-2 pr-2 flex flex-row justify-between w-full">
                        <p className="text-outColor font-mediun">1</p>
                        <p className="text-outColor font-medium">2</p>
                        <p className="text-outColor font-medium">3</p>
                    </div>
                    
                    
                    <label className="flex flex-col items-center cursor-pointer" >
          <input type="checkbox" value="" className="sr-only peer" ></input>
          <div className={`relative min-w-[68px] h-6 bg-buttonContainer overflow-visible   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 ${theme === 'first' ? "after:translate-x-0" : theme === 'second' ? "after:translate-x-[20px]" : "after:translate-x-[40px]"}  peer-checked:after:border-white after:content-[""] after:absolute after:top-[4px] after:start-[4px] after:bg-button_equal after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600`} onClick={handleToggleClick}></div>
        </label>


                    


                </div>
            </div>
        </div>
    )
}
const ButtonContainer = ({handleClick}) => {
    return (
        <div className="w-120 h-120 mt-5 p-8 rounded-xl bg-buttonContainer grid grid-cols-4 gap-6">
            <Button className="bg-button_num text-buttonColorGroupOne shadow-number" text="7" handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="8" handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="9" handleClick={handleClick}/>
            <Button className="bg-button_text text-buttonColorGroupTwo shadow-text" text="DEL" fontStyle='24px' textColor='white' bgColor='rgb(162, 179, 225)'
                    bShadow='0px 3px 0px 0px #3b4664' handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="4" handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="5" handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="6" handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="+" handleClick={handleClick}/>
            <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="1" handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="2" handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="3" handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="-" handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="." handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="0" handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="/" handleClick={handleClick}/>
        <Button className="bg-button_num text-buttonColorGroupOne  shadow-number" text="x" handleClick={handleClick}/>
        <Button className="col-span-2 bg-button_text text-buttonColorGroupTwo shadow-text" text="RESET" fontStyle='24px' bgColor='rgb(162, 179, 225)'   handleClick={handleClick}/>
        <Button className="col-span-2 bg-button_equal text-buttonColorGroupThree shadow-equal" text="=" fontStyle='30px' bgColor ='rgb(249, 108, 91)' handleClick={handleClick}/>
    </div>
  )
}

const Button = ({text, className, fontStyle, bgColor, textColor, bShadow, handleClick}) => {
  return (
    <button style={{fontSize:fontStyle}} className={`w-full h-14 rounded-xl text-3xl ${className}`} onClick={handleClick} value={text}>{text}</button>
  )
}

const App = () => {


  const [output, setOutput] = useState('');
  const [operationState, setOperationState] = useState('+');
  const [operationClicked, setOperationClicked] = useState(false);
  const [result, setResult] = useState(0);
  //const [toggleState, setToggleState] = useState(0);

  const {theme, setTheme} = useTheme();

  //if(toggleState === 0) setTheme('first')
  //if(toggleState ===1) setTheme('second')
  //if(toggleState === 2) setTheme('third')




  const handleToggleClick = () => {
    if (theme === 'first') setTheme('second')
    if( theme === 'second') setTheme('third')
      if( theme === 'third') setTheme('first')
  }
 
  
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
        <Header handleToggleClick={handleToggleClick} theme={theme} />
   <Output output={output}/>
   <ButtonContainer handleClick={handleClick}/>
   
   
   </>
  )
}

export default App
