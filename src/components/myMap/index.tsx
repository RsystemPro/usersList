import './style.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addUser, data } from '../../types/typescript';
import { useAppSelector } from '../../rtk/tsHook';
import GoogleMapReact from 'google-map-react';
import { useDispatch } from 'react-redux';
import { SetLocationCenter } from '../../rtk/general';

interface locationProps {
    center: { lat: number, lng: number }
    zoom: number
}

interface props {
    location?: locationProps
    getDataMode?: boolean
}

function MyMap({ location, getDataMode }: props) {

    const param = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listData = useAppSelector(state => state.general.listData_per)
    const [userData, setUserData] = useState<data | undefined>(() => listData.find(x => x.id.toString() === param.id))

    function GetCenter({ lat, lng }: any) {
        dispatch(SetLocationCenter({ lng, lat }))
        getDataMode && navigate(-1)
    }

    const defaultProps = {
        center: {
            lat: userData?.location.latitude || 31.148912418120513,
            lng: userData?.location.longitude || 52.957843664170326
        },
        zoom: getDataMode ? 5 : 11
    };

    return (
        <div className='MyMap'>
            {userData?.name && <h5>نقشه ادرس  کاربر  <span style={{ color: '#3F83F8' }}>{userData?.name + ' ' + userData?.lastName}</span></h5>}
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={location ? location.center : defaultProps.center}
                defaultZoom={location ? location.zoom : defaultProps.zoom}
                onClick={GetCenter}
            >
            </GoogleMapReact>
        </div>
    );
}

export default MyMap;