import './style.css';
import TextBox_Picture from '../Textbox_picture';
import SimpleButton from '../simpleButton';
import { useAppDispatch, useAppSelector } from '../../rtk/tsHook';
import { setListData_both } from '../../rtk/general';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addUser, data } from '../../types/typescript';
import Chart from 'chart.js/auto';

function MyChart() {

    const chartContainer = useRef<HTMLCanvasElement>(null);
    const param = useParams()
    const listData = useAppSelector(state => state.general.listData_per)
    const [userData, setUserData] = useState<data | undefined>(() => listData.find(x => x.id.toString() === param.id))

    useEffect(() => {

        if(!chartContainer.current) return

        const logins = userData?.logins
        const ctx = chartContainer.current.getContext('2d') as CanvasRenderingContext2D;
        

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['شنبه', 'یکشسنه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه'],
                datasets: [{
                    label: 'Data',
                    data: [logins?.day1, logins?.day2, logins?.day3, logins?.day4, logins?.day5, logins?.day6, logins?.day7],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return (
        <div className='myChart'>
            <h5>نمودار تعداد دفعات ورود کاربر  <span style={{ color: '#3F83F8' }}>{userData?.name + ' ' + userData?.lastName}</span> به سایت</h5>
            <canvas className='myChart_canvas' ref={chartContainer} height='400' width='400' />
        </div>
    );
}

export default MyChart;