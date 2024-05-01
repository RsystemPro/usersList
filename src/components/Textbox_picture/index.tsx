import {  useState, useEffect } from 'react'
import './style.css'
import user from './icons/profile.png'
import email from './icons/email.png'
import pass from './icons/pass.png'
import phone from './icons/phone.png'
import show from './icons/show.png'
import hide from './icons/hide.png'
import card from './icons/card.png'
import identity from './icons/identitty.png'

interface textbox {
    type?: 'user' | 'pass' | 'email' | 'number' | 'card' | 'identity'
    placeholder?: string
    callback?: (value: string) => void
    customImage?: string
    style?: React.CSSProperties
    className?: string
    value?: string
    name: string
}
function TextBox_Picture({ type = 'user', placeholder, callback, customImage, style, className, value, name }: textbox) {
    const [image, setImage] = useState<string>()
    const [iType, setIType] = useState<string>()
    const [watchPass, setWatchPass] = useState<boolean>(false)
    
    useEffect(() => {
        switch (type) {
            case 'user':
                setImage(user)
                setIType('text')
                break;
            case 'email':
                setImage(email)
                setIType('email')
                break;
            case 'pass':
                setImage(pass)
                setIType('password')
                break;
            case 'number':
                setImage(phone)
                setIType('number')
                break;
            case 'card':
                setImage(card)
                setIType('number')
                break;
            case 'identity':
                setImage(identity)
                setIType('number')
                break;

            default:
                break;
        }
    })
    function TextContent(x: React.FormEvent<HTMLInputElement>) {
        callback && callback(x.currentTarget.value)
    }
    return (
        <div className={'textbox_container ' + className} style={{ ...style }}>
            <img src={customImage ? customImage : image} alt="" />
            <input
                name={name}
                onChange={TextContent}
                type={watchPass === false ? iType : 'text'}
                placeholder={placeholder}
                value={value}
            />
            {type === 'pass' && <img onClick={() => setWatchPass(!watchPass)} src={watchPass === true ? show : hide} alt="" />}
        </div>
    );
}

export default TextBox_Picture;