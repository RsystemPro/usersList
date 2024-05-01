import './style.css';
import ListItem from '../../components/listItem';
import { data, order } from '../../types/typescript';
import ListTitle from '../../components/listTitle';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../rtk/tsHook';

const titles = ['ردیف', 'تاریخ', 'نام', 'نام خانوادگی', 'کد ملی', 'گزینه ها']

function List() {

    const db = useAppSelector(state => state.general.listData_temp)
    const [order, setOrder] = useState<order>({ order: titles[0], ascendign: true })
    const [data, setData] = useState<data[]>()

    useEffect(() => {

        setData([])

        switch (order.order) {
            case 'ردیف':
                const myArray1 = [...db]
                setData(order.ascendign ? myArray1 : myArray1.reverse())
                break;
            case 'نام':
                const nameAsc = (a: data, b: data) => {
                    return a.name.localeCompare(b.name, 'fa', { sensitivity: 'base' });
                };
                const nameDes = (a: data, b: data) => {
                    return b.name.localeCompare(a.name, 'fa', { sensitivity: 'base' });
                };
                const myArray = [...db]
                const sort = order.ascendign ? myArray.sort(nameAsc) : myArray.sort(nameDes)
                setData(sort)
                break;
            case 'نام خانوادگی':
                const lastAsc = (a: data, b: data) => {
                    return a.lastName.localeCompare(b.lastName, 'fa', { sensitivity: 'base' });
                };
                const lastDes = (a: data, b: data) => {
                    return b.lastName.localeCompare(a.lastName, 'fa', { sensitivity: 'base' });
                };
                const myArray2 = [...db]
                const sort2 = order.ascendign ? myArray2.sort(lastAsc) : myArray2.sort(lastDes)
                setData(sort2)
                break;
            case 'تاریخ':
                const myArray3 = [...db]
                const sort3 = order.ascendign ? myArray3.sort((x, y) => x.date - y.date) : myArray3.sort((x, y) => y.date - x.date)
                setData(sort3)
                break;
            default:
                setData(db)
                break;
        }
    }, [db, order])

    function Title_Clicked(value: string) {
        // console.log(value);
    }
    function Item_Clicked(data: data) {
        console.log(data);
    }

    return (
        <div className="List">
            <div className='table-scroll'>
                <table className='table'>
                    <thead className='table_title'>
                        <ListTitle callback={Title_Clicked} titles={titles} order={(x) => setOrder(x)} />
                    </thead>
                    <tbody className='table_tbody'>
                        {data && data.map((x, y) =>
                            <ListItem key={y} data={x} order={order.order === 'ردیف' ? order.ascendign ? y+1 : data.length-(y) : y+1} callback={Item_Clicked} />
                        )}
                    </tbody>
                </table>
            </div>
            {data?.length === 0 && <h4 style={{ alignSelf: 'center' }}>موردی یافت نشد</h4>}
        </div>
    );
}

export default List;