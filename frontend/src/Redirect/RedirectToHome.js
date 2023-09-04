
import { useNavigate } from 'react-router-dom';

const RedirectToHome = () => {
    const navigate = useNavigate();
    return navigate('/'); // Replace '/home' with the actual path to your home component

}

export default RedirectToHome