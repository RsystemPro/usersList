import { useNavigate } from 'react-router-dom';
import AddButton from '../../components/addButton';
import './style.css';

function Header() {
    const navigate = useNavigate()

    function ClickHandler(x:string) {
        navigate('/addUser')
    }

    return (
        <div className="header">
            <h1>لیست کاربران</h1>
            <AddButton onClick={ClickHandler}>افزودن</AddButton>
        </div>
    );
}

export default Header;