import { Outlet } from "react-router";
import AuthorizationNavigation from "./Authorization_navigation";

function AuthorizationForm():JSX.Element{
    return(
        <div className="authorizationForm">
            <AuthorizationNavigation />
            <Outlet />
        </div>
    );
}

export default AuthorizationForm;