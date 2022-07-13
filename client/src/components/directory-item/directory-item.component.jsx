import {useNavigate} from 'react-router-dom';
import './directory-item.style.css';

const DirectoryItem = ({category}) => {

    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route)
    }

    return (
        <div className='directory-item-container' onClick={onNavigateHandler} >
             <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="body">
                <h2>{title.toUpperCase()}</h2>
                <p>Prenota ora</p>
            </div>

        </div>
    )
}

export default DirectoryItem;