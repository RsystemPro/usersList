import './style.css';
import { styles } from '../../types/typescript';

type props = {
    children: string
    callback?: ()=>void
    type?: 'cyan' | 'gray' | 'red'
} & styles

function SimpleButton({ children, style, className, callback, type = 'cyan' }: props) {
    const classs = 'SimpleButton ' + 'SimpleButton_' + type + ' ' + className
    return (
        <button onClick={callback} style={{...style}} className={classs}>
            {children}
        </button>
    );
}

export default SimpleButton;