import Button from "./Button.jsx"

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

export default ButtonContainer