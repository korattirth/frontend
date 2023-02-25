import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useStore } from '../store/store';

interface PropType {
    component: React.FC;
    roles? : number
}

const PrivateRoute: FC<PropType> = ({ component: Component , roles }) => {
    const { userStore : {user} } = useStore();

    if (!user) return <Navigate to='/sign-in' />;
    if (roles && !(roles === user.role)) {
        // toast.error("Not authorised to access this area");
        return <Navigate to='/'/>;
    }
    return <Component />;
};

export default PrivateRoute;