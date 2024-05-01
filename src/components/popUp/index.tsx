import { useEffect, useRef } from 'react';
import close from './close-thick.png';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../rtk/tsHook';
import { CloseModal, SetLocationCenter, SetSaveValues } from '../../rtk/general';

interface props {
    modalName: string
    title?: string
    theme?: 'white/gray'
    children?: React.ReactNode
    close_callback?: (x: boolean) => void
    background_style?: React.CSSProperties
    sub_style?: React.CSSProperties
    children_style?: React.CSSProperties
    backLocation?: boolean
}

function PopUp({ theme = 'white/gray', children, close_callback, background_style, sub_style, children_style, title, modalName, backLocation = false }: props) {
    const sub = useRef<HTMLDivElement>(null)
    const background = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    const close_modal = useAppSelector(state=>state.general.close_modal)
    const dispatch = useAppDispatch()

    //close modal by name
    useEffect(()=>{
        if(close_modal && close_modal === modalName) Close()
    },[close_modal])

    //animations
    useEffect(() => {
        setTimeout(() => {
            background.current && ((background.current as HTMLDivElement).style.opacity = '1')
            sub.current && ((sub.current as HTMLDivElement).style.transform = 'translateY(0px)')
            sub.current && ((sub.current as HTMLDivElement).style.opacity = '1')
        }, 50);
        switch (theme) {
            case 'white/gray':
                (background.current as HTMLDivElement).style.backgroundColor = '#80808012';
                (sub.current as HTMLDivElement).style.backgroundColor = 'white';
                break;
            default:
                break;
        }
    }, [theme])

    //close
    function Close() {
        (background.current as HTMLDivElement).style.opacity = '0'
        sub.current && ((sub.current as HTMLDivElement).style.transform = 'translateY(-200px)')
        setTimeout(() => {
            close_callback && close_callback(false)
            dispatch(SetSaveValues(['','','']))
            dispatch(SetLocationCenter(undefined))
            dispatch(CloseModal(''))
            backLocation ? navigate(-1) : navigate('/')
        }, 300);
    }

    return (
        <div ref={background} style={{ ...background_style }} className='popup_background' onClick={Close}>
            <div ref={sub} style={{ ...sub_style }} className='popup_sub' onClick={(x) => x.stopPropagation()}>
                <div className='popup_title'>
                    <h4>{title}</h4>
                    <img className='popup_close' src={close} onClick={Close} />
                </div>
                <div style={{ ...children_style }} className='popup_children'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PopUp;
