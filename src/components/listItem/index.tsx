import './style.css';
import { actions, data, styles } from '../../types/typescript';
import { useAppDispatch } from '../../rtk/tsHook';
import { setActionType } from '../../rtk/general';
import { useNavigate } from 'react-router-dom';


const editC = <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    viewBox="0 0 1024 1024"
    id='edit'
>
    <g>
        <path
            id='edit'
            fill="#3688FF"
            d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z"
        ></path>
        <path
            id='edit'
            fill="#5F6379"
            d="M483 756.5c-1.8 0-3.5-.1-5.3-.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5zm-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z"
        ></path>
    </g>
</svg>
const locationC = <svg id='location' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
    <g>
        <path
            id='location'
            fill="#feb420"
            d="M21 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zM16 1c6.08 0 11 4.92 11 11 0 9-11 19-11 19S5 21 5 12C5 5.92 9.92 1 16 1z"
        ></path>
        <path
            id='location'
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 28c4-4 8-10.553 8-16 0-6.075-4.925-11-11-11S5 5.925 5 12c0 9 11 19 11 19M5 31h22m-6-19a5 5 0 00-5-5 5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5z"
        ></path>
    </g>
</svg>
const chartC = <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="1.5"
    clipRule="evenodd"
    viewBox="0 0 2253 2253"
    id='chart'
>
    <g>
        <path id='chart' fill="none" d="M0.676 0.431H2250.676V2250.431H0.676z"></path>
        <path
            id='chart'
            fill="#3050f3"
            stroke="#000"
            strokeWidth="66.67"
            d="M396.509 396.264H709.009V1854.594H396.509z"
        ></path>
        <path
            id='chart'
            fill="#4dbe4b"
            stroke="#000"
            strokeWidth="66.67"
            d="M917.343 1021.26H1229.8429999999998V1854.5929999999998H917.343z"
        ></path>
        <path
            id='chart'
            fill="#308df8"
            stroke="#000"
            strokeWidth="66.67"
            d="M1438.18 604.598H1750.68V1854.598H1438.18z"
        ></path>
        <path id='chart' d="M288.176 387.931l-100-200-100 200h200zM1863.18 1962.93l200 100-200 100v-200z"></path>
        <path
            id='chart'
            fill="none"
            stroke="#000"
            strokeWidth="66.67"
            d="M188.176 347.931v1715h1715"
        ></path>
    </g>
</svg>
const removeC = <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    strokeWidth="0.01"
    className="icon"
    viewBox="0 0 1024 1024"
    id='remove'
>
    <g>
        <path
            id='remove'
            fill="#ff2424"
            d="M779.5 1002.7h-535c-64.3 0-116.5-52.3-116.5-116.5V170.7h768v715.5c0 64.2-52.3 116.5-116.5 116.5zM213.3 256v630.1c0 17.2 14 31.2 31.2 31.2h534.9c17.2 0 31.2-14 31.2-31.2V256H213.3z"
        ></path>
        <path
            id='remove'
            fill="#600"
            d="M917.3 256H106.7C83.1 256 64 236.9 64 213.3s19.1-42.7 42.7-42.7h810.7c23.6 0 42.7 19.1 42.7 42.7S940.9 256 917.3 256zM618.7 128H405.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h213.3c23.6 0 42.7 19.1 42.7 42.7S642.2 128 618.7 128zM405.3 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7S448 403 448 426.6v256c0 23.6-19.1 42.7-42.7 42.7zm213.4 0c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v256c-.1 23.6-19.2 42.7-42.7 42.7z"
        ></path>
    </g>
</svg>
const viewC = <svg
    id='view'
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="#000"
    stroke="#000"
    strokeWidth="0.451"
    version="1.1"
    viewBox="0 0 56.372 56.372"
    xmlSpace="preserve"
>
    <g>
        <path
            id='view'
            fill="#E7ECED"
            d="M56.372 28.284l-7.234 7.234c-11.517 11.517-30.19 11.517-41.707 0L0 28.087l7.234-7.234c11.517-11.517 30.19-11.517 41.707 0l7.431 7.431z"
        ></path>
        <circle id='view' cx="28.158" cy="28.156" r="12" fill="#3083C9"></circle>
        <path
            id='view'
            fill="#FFF"
            d="M21.158 28.156a1 1 0 01-1-1c0-3.86 3.14-7 7-7a1 1 0 010 2c-2.757 0-5 2.243-5 5a1 1 0 01-1 1z"
        ></path>
    </g>
</svg>

type props = {
    data: data
    callback: (x: data) => void
    order: number
} & styles

function ListItem({ data, callback, order }: props) {
    const navigate = useNavigate()
    // const dispatch = useAppDispatch()

    function IconsClicked(x: React.MouseEvent<HTMLTableCellElement>) {
        x.stopPropagation()
        const icon = x.target as HTMLImageElement
        let address: string = `/${icon.id}/${data.id}`
        navigate(address, { replace: true })
    }

    return (
        <tr onClick={() => callback(data)}>
            <td>{order}</td>
            <td>{new Date(data.date).toLocaleDateString()}</td>
            <td>{data.name}</td>
            <td>{data.lastName}</td>
            <td>{data.meli}</td>
            <td className='list_item_actions' onClick={IconsClicked}>
                {viewC}
                {editC}
                {locationC}
                {chartC}
                {removeC}
            </td>
        </tr>
    );
}

export default ListItem;