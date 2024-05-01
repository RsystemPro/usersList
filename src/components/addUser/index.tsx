import './style.css';
import TextBox_Picture from '../Textbox_picture';
import SimpleButton from '../simpleButton';
import { useAppDispatch, useAppSelector } from '../../rtk/tsHook';
import { SetSaveValues, setListData_both } from '../../rtk/general';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function AddUser() {

    const formRef = useRef<HTMLFormElement>(null)
    const dispatch = useAppDispatch()
    const listData = useAppSelector(state => state.general.listData_per)
    const center = useAppSelector(state => state.general.location_center)
    const name = useAppSelector(state => state.general.name)
    const lastName = useAppSelector(state => state.general.lastName)
    const meli = useAppSelector(state => state.general.meli)
    const [empty, setEmpty] = useState<boolean>(false)
    const [added, setAdded] = useState<boolean>(false)

    //recover values
    useEffect(() => {
        const children = formRef.current as HTMLFormElement;
        const inputs: NodeListOf<HTMLInputElement> = children.querySelectorAll('input');
        inputs[0] && (inputs[0].value = name || '')
        inputs[1] && (inputs[1].value = lastName || '')
        inputs[2] && (inputs[2].value = meli || '')
    }, [])

    //save values
    function SaveValues(x:any) {
        const children = formRef.current as HTMLFormElement;
        const inputs: NodeListOf<HTMLInputElement> = children.querySelectorAll('input');
        let myArray = [inputs[0].value,inputs[1].value,inputs[2].value]
        dispatch(SetSaveValues(myArray))
    }

    //add user
    function Submit(x: React.FormEvent) {
        setAdded(false)
        setEmpty(false)
        x.preventDefault()
        let FD = new FormData(x.target as HTMLFormElement)
        let formData = {} as any
        for (const [key, value] of FD) {
            if (value === '' || !center?.lat) {
                return setEmpty(true)
            }
            formData[key] = value
        }
        const id = Math.floor(1000000000 + Math.random() * 9000000000);
        dispatch(setListData_both([{ id, ...formData, date: Date.now(), location: { latitude: center?.lat, longitude: center?.lng } }, ...listData]))
        setAdded(true)
    }

    return (
        <form ref={formRef} className='myForm' onSubmit={Submit}>
            {empty && <h5 style={{ color: 'red' }}>لطفا همه فیلد ها را پر کنید</h5>}
            {added && <h5 style={{ color: 'lime' }}>کاربر با موفقیت اضافه شد</h5>}
            <TextBox_Picture name='name' type='user' placeholder='نام' />
            <TextBox_Picture name='lastName' type='user' placeholder='نام خانوادگی' />
            <TextBox_Picture name='meli' type='identity' placeholder='کد ملی' />
            <Link onClick={SaveValues} to={'/addUser/location'} id='form_Link'>انتخاب ادرس از روی نقشه</Link>
            {center && <h5 style={{ color: 'lightgray' }}>{center.lat + '-' + center.lng}</h5>}
            <div className='myForm_buttons'>
                <SimpleButton>افزودن</SimpleButton>
            </div>
        </form>
    );
}

export default AddUser;