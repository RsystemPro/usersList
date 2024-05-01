import './style.css';
import TextBox_Picture from '../Textbox_picture';
import SimpleButton from '../simpleButton';
import { useAppDispatch, useAppSelector } from '../../rtk/tsHook';
import { setListData_both } from '../../rtk/general';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addUser } from '../../types/typescript';
import MyMap from '../myMap';

function ReadUser() {

    const formRef = useRef<HTMLFormElement>(null)
    const param = useParams()
    const listData = useAppSelector(state => state.general.listData_per)
    const [userData, setUserData] = useState<addUser | undefined>(() => listData.find(x => x.id.toString() === param.id))
    const [showMap, setShowMap] = useState<boolean>(false)

    return (
        <>
        <Outlet/>
        <form ref={formRef} className='readUser'>
            <div>
                <h5>{'نام'}</h5>
                <h5>{`:${'\u00A0'}`}</h5>
                <h5>{userData?.name}</h5>
            </div>
            <div>
                <h5>{'نام خانوادگی'}</h5>
                <h5>{`:${'\u00A0'}`}</h5>
                <h5>{userData?.lastName}</h5>
            </div>
            <div>
                <h5>{'کد ملی'}</h5>
                <h5>{`:${'\u00A0'}`}</h5>
                <h5>{userData?.meli}</h5>
            </div>
            <div>
                <h5>{'تاریخ عضویت'}</h5>
                <h5>{`:${'\u00A0'}`}</h5>
                <h5>{userData?.date && new Date(userData?.date).toLocaleDateString()}</h5>
            </div>

            <Link to={`/view/${param.id}/location`} id='form_Link'>مشاهده مکان از روی نقشه</Link>
        </form>
        </>
    );
}

export default ReadUser;