

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
                <p className="text-xs text-outColor mb-[4px]">THEME</p>
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

export default Header