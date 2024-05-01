import './style.css';
import TextBox_Picture from '../Textbox_picture';
import SimpleButton from '../simpleButton';
import { useAppDispatch, useAppSelector } from '../../rtk/tsHook';
import { CloseModal, setListData_both } from '../../rtk/general';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addUser } from '../../types/typescript';

const removeSVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 16.99V17m0-10v7m9-2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
</svg>

function RemoveUser() {

    const dispatch = useAppDispatch()
    const param = useParams()
    const listData = useAppSelector(state => state.general.listData_per)
    const formRef = useRef<HTMLFormElement>(null)
    const [userData, setUserData] = useState<addUser | undefined>(() => listData.find(x => x.id.toString() === param.id))

    //edit
    function Submit(x: React.FormEvent) {
        x.preventDefault()
        const oldObjIndex: any = listData.findIndex(x => x.id.toString() === param.id);
        const newData = [...listData];
        newData.splice(oldObjIndex, 1)
        dispatch(setListData_both(newData))
        dispatch(CloseModal('remove'))
    }

    return (
        <form ref={formRef} className='removeItem' onSubmit={Submit}>
            {removeSVG}
            <h5>ایا مایل به حذف کاربر <span style={{ color: 'red', textDecoration: 'underLine' }}>{userData?.name + ' ' + userData?.lastName}</span> هستید؟</h5>
            <div className='removeItem_buttons'>
                <SimpleButton type='red'>حذف</SimpleButton>
            </div>
        </form>
    );
}

export default RemoveUser;