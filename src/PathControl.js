import {useRecoilState} from "recoil";
import {useLocation, Navigate} from "react-router-dom";
import {authSelector} from "./recoil/atomStore";
import {useCheckTokenData} from "./hooks/useRSVPData";


export const AuthenticationCheck = ({ children }) => {
    const [auth, setAuth] = useRecoilState(authSelector)
    const location = useLocation()

    const onSuccess = ({data}) => {
        setAuth(data)
        return children
    }

    const onError = () => {
        window.localStorage.removeItem('token')
        return (<Navigate to='/accounts/login' state={{ path: location.pathname }} />)
    }

    const {mutate, isSuccess, isError} = useCheckTokenData(onSuccess, onError)
    const extraStep = (token) => mutate(token)


    {/* Main */}
    if (!auth.token) {
        const localStorageToken = window.localStorage.getItem('token') || null

        if (localStorageToken) {
            extraStep(localStorageToken)
        }
        else if (!localStorageToken) {
            return <Navigate to='/' state={{path: location.pathname}}/>
        }
    } else {
        return children
    }
    return (isSuccess && children) || (isError && (<Navigate to='/' state={{ path: location.pathname }} />))

}

