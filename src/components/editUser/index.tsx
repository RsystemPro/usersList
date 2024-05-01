import './style.css';
import TextBox_Picture from '../Textbox_picture';
import SimpleButton from '../simpleButton';
import { useAppDispatch, useAppSelector } from '../../rtk/tsHook';
import { setListData_both } from '../../rtk/general';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addUser } from '../../types/typescript';

function EditUser() {

    const dispatch = useAppDispatch()
    const formRef = useRef<HTMLFormElement>(null)
    const param = useParams()
    const listData = useAppSelector(state => state.general.listData_per)
    const [empty, setEmpty] = useState<boolean>(false)
    const [added, setAdded] = useState<boolean>(false)
    const [userData, setUserData] = useState<addUser | undefined>(() => listData.find(x => x.id.toString() === param.id))

    //fill fields
    useEffect(() => {
        const children = formRef.current as HTMLFormElement;
        const inputs: NodeListOf<HTMLInputElement> = children.querySelectorAll('input');
        inputs[0] && (inputs[0].value = userData?.name || '')
        inputs[1] && (inputs[1].value = userData?.lastName || '')
        inputs[2] && (inputs[2].value = userData?.meli.toString() || '')
    }, [userData])

    //edit
    function Submit(x: React.FormEvent) {
        setAdded(false)
        setEmpty(false)
        x.preventDefault()
        let FD = new FormData(x.target as HTMLFormElement)
        let oldObj: any = {...listData.find(x => x.id.toString() === param.id)};
        for (const [key, value] of FD) {
            if (value === '') {
                return setEmpty(true)
            }
            oldObj[key] = value
        }
        const oldObjIndex: any = listData.findIndex(x => x.id.toString() === param.id);
        const newData = [...listData];
        newData.splice(oldObjIndex, 1, oldObj)
        dispatch(setListData_both(newData))
        setAdded(true)
    }

    return (
        <form ref={formRef} className='myForm' onSubmit={Submit}>
            {empty && <h5 style={{ color: 'red' }}>لطفا همه فیلد ها را پر کنید</h5>}
            {added && <h5 style={{ color: 'lime' }}>کاربر با موفقیت ویرایش شد</h5>}
            <TextBox_Picture name='name' type='user' placeholder='نام' />
            <TextBox_Picture name='lastName' type='user' placeholder='نام خانوادگی' />
            <TextBox_Picture name='meli' type='identity' placeholder='کد ملی' />
            <Link to={'/edit/:id/location'} id='form_Link'>انتخاب ادرس از روی نقشه</Link>
            <div className='myForm_buttons'>
                <SimpleButton>ویرایش</SimpleButton>
            </div>
        </form>
    );
}

export default EditUser;