import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../store/store";

interface PropType {
  component: React.FC;
  roles?: number;
}

const PrivateRoute: FC<PropType> = ({ component: Component, roles }) => {
  const {
    userStore: { user },
  } = useStore();
  if (!user) return <Navigate to="/sign-in" />;
  if (roles !== undefined && roles !== user.role) {
    return <Navigate to="/" />;
  }
  return <Component />;
};

export default PrivateRoute;
