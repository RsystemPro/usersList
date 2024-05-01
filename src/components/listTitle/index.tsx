import './style.css';
import { order, styles } from '../../types/typescript';
import { useState } from 'react';

const arrowDown = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5 14.5C15.4015 14.5005 15.3038 14.4813 15.2128 14.4435C15.1218 14.4057 15.0392 14.3501 14.97 14.28L11.97 11.28L8.96999 14.28C8.82472 14.3502 8.6607 14.3716 8.50227 14.3411C8.34385 14.3107 8.19947 14.23 8.09056 14.111C7.98165 13.9919 7.91402 13.841 7.89771 13.6805C7.88139 13.52 7.91726 13.3585 7.99999 13.22L11.5 9.72001C11.6406 9.57956 11.8312 9.50067 12.03 9.50067C12.2287 9.50067 12.4194 9.57956 12.56 9.72001L16.06 13.22C16.2004 13.3606 16.2793 13.5513 16.2793 13.75C16.2793 13.9488 16.2004 14.1394 16.06 14.28C15.9873 14.3539 15.8998 14.4116 15.8034 14.4495C15.7069 14.4874 15.6035 14.5046 15.5 14.5Z" fill="#000000"></path> </g></svg>

const arrowUp = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5 14.5C15.4015 14.5005 15.3038 14.4813 15.2128 14.4435C15.1218 14.4057 15.0392 14.3501 14.97 14.28L11.97 11.28L8.96999 14.28C8.82472 14.3502 8.6607 14.3716 8.50227 14.3411C8.34385 14.3107 8.19947 14.23 8.09056 14.111C7.98165 13.9919 7.91402 13.841 7.89771 13.6805C7.88139 13.52 7.91726 13.3585 7.99999 13.22L11.5 9.72001C11.6406 9.57956 11.8312 9.50067 12.03 9.50067C12.2287 9.50067 12.4194 9.57956 12.56 9.72001L16.06 13.22C16.2004 13.3606 16.2793 13.5513 16.2793 13.75C16.2793 13.9488 16.2004 14.1394 16.06 14.28C15.9873 14.3539 15.8998 14.4116 15.8034 14.4495C15.7069 14.4874 15.6035 14.5046 15.5 14.5Z" fill="#000000"></path> </g></svg>


type props = {
    titles: string[]
    callback: (x: string) => void
    order?: (x: order) => void
} & styles

function ListTitle({ titles, callback, order }: props) {

    const [orderName, setOrder] = useState<string>(titles[0])
    const [ascending, setAscending] = useState<boolean>(true)

    function Title_Clicked(tr: React.MouseEvent<HTMLTableRowElement>) {
        const td = tr.target as HTMLDivElement
        const text = td.textContent?.trim();
        if (text) {
            callback(text)
            if (orderName !== text) {
                setOrder(text)
                setAscending(true)
                order && order({ order: text, ascendign: true })
            } else {
                setAscending(!ascending)
                order && order({ order: text, ascendign: !ascending })
            }
        }
    }

    return (
        <tr onClick={Title_Clicked} className='list_title_tr'>
            {titles.map((x, y) =>
                <th key={y} className='list_title_th'>
                    <div className='list_title_arrow'>
                        {x === orderName && (!ascending ? arrowUp : arrowDown)}
                        {x}
                    </div>
                </th>
            )}
        </tr>
    );
}

export default ListTitle;