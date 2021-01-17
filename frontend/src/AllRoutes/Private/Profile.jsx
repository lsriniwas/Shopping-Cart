import { Divider } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogout } from '../../Redux/isAuth/actions'
import "../../Styles/Profile/Profile.module.css"
import styles from "../../Styles/Profile/Profile.module.css"
export const Profile = () => {
    const dispatch = useDispatch();
    const profile=useSelector(state=>state.authReducer.profile)
    
    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `User Profile |Taza Chocolate `
      }, [])

    const handleLogout = () => {
        dispatch(userLogout())
    }
    
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div>
                    <h1>MY ACCOUNT</h1>
                </div>
            </div>
            <div className={styles.profile_wrapper}>
                <div>
                    <h1>ORDERS HISTORY</h1>
                    <p>You haven't placed any orders yet.</p>
                </div>
                <div>
                    <div>
                        <h1>ACCOUNT DETAILS</h1>
                        <h4>Sriniwas</h4>
                    </div>
                    <Divider />
                    <div className={styles.address_signout}>
                        <div>View Addresses</div>
                        <div>
                            {`>`}
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.address_signout} onClick={() => handleLogout()}>
                        <div>Sign Out</div>
                        <div>{`>`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
