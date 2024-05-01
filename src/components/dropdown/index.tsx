import './style.css';
import { collections, styles } from '../../types/typescript';
import React, { ReactNode } from 'react';

type props = {
    children: ReactNode[]
    callback?: (x:collections)=> void
} & styles

function DropDown({ children, callback, style }: props) {

    function Handler(x: React.ChangeEvent<HTMLSelectElement>) {
        const target = x.target
        callback && callback(target.value as collections)
    }

    return (
        <select style={{...style}} onChange={Handler} className='DropDown' name="" id="">
            {children}
        </select>
    );
}

export default DropDown;