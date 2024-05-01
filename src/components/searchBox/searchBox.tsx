import React, { useState, useRef, useEffect } from 'react';
import './style.css';
// import searchIco from '../../../../documents/icons2/search_normal_gray.svg'
import closeIco from './icons/close_circle_gray.svg'
import searchIcoDarkSearch from './icons/search_normal_gray-search.svg'

interface props {
    // TextCallback: React.Dispatch<React.SetStateAction<string>>
    TextCallback?: (text: string) => void
    style?: React.CSSProperties
    children?: string
}

function SearchBox({ TextCallback, style, children }: props) {
    const inputContainer = useRef<HTMLDivElement>(null)
    const inputChange = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('')
    const [showClose, setShowClose] = useState<boolean>(false)

    useEffect(() => {
        if (value) {
            setShowClose(true);
        } else {
            setShowClose(false);
        }

        if (TextCallback)
            value ? TextCallback(value) : TextCallback('')

    }, [value])

    function ClearAll() {
        setValue('');
    }

    function FocusHandler() {
        inputContainer.current?.classList.toggle('LB_CL_Se_GreenTheme');
    }

    return (
        <div
            ref={inputContainer}
            onFocus={FocusHandler}
            onBlur={FocusHandler}
            className='LB_CL_Se_Container'
            style={style}
        >

            <img src={searchIcoDarkSearch} alt="" />

            <input
                type="text"
                ref={inputChange}
                onChange={(x: any) => setValue(x.target.value)}
                placeholder={children}
                value={value}
            />

            {showClose && <img onClick={ClearAll} src={closeIco} alt="" />}

        </div>
    );
}

export default SearchBox;