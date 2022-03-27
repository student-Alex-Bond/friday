import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import {Test} from "../Test/Test";
import {Login} from "../Login/Login";
import {NewPassword} from "../NewPassword/NewPassword";
import {NotFound} from "../NotFound/NotFound";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {Profile} from "../Profile/Profile";
import {Registration} from "../Registration/Registration";
import styles from'./Navigation.module.css'

export const routes = [
    {to: '/login', element: Login, name: 'Login'},
    {to: '/profile', element: Profile, name: 'Profile'},
    {to: 'test', element: Test, name: 'Test'},
    {to: '/registration', element: Registration, name: 'Registration'},
    {to: '/new-password', element: NewPassword, name: 'NewPassword'},
    {to: 'password-recovery', element: PasswordRecovery, name: 'PasswordRecovery'},
    {to: '/not-found', element: NotFound, name: 'NotFound'},
]
type RoutesType = typeof routes

type NavigationPropsType = {
    routes: RoutesType
}

const Navigation: React.FC<NavigationPropsType> = ({routes}) => {


    return (
        <div className={styles.nav}>
            <div className={styles.link}>{
                routes.map((route, index) => {
                    return (
                        <NavLink className={({isActive})=> isActive? `${styles.active}` : ``}
                            key={index} to={route.to}>{route.name}</NavLink>
                    )
                })
            }</div>
            <Routes>
                {
                    routes.map((route, index)=>{
                        return (
                            <Route key={index} path={route.to} element={route.element()}/>
                        )
                    })
                }
            </Routes>



            {/*<NavLink to={'/login'}>Login--</NavLink>*/}
            {/*<NavLink to={'test'}>Test--</NavLink>*/}
            {/*<NavLink to={'/new-password'}>NewPassword--</NavLink>*/}
            {/*<NavLink to={'/not-found'}>Not Found--</NavLink>*/}
            {/*<NavLink to={'/password-recovery'}>Password Recovery--</NavLink>*/}
            {/*<NavLink to={'/profile'}>Profile--</NavLink>*/}
            {/*<NavLink to={'/registration'}>Registration--</NavLink>*/}


            {/*<Routes>*/}
            {/*    <Route path={'/test'} element={<Test/>}/>*/}
            {/*    <Route path={'/login'} element={<Login/>}/>*/}
            {/*    <Route path={'/new-password'} element={<NewPassword/>}/>*/}
            {/*    <Route path={'/not-found'} element={<NotFound/>}/>*/}
            {/*    <Route path={'/password-recovery'} element={<PasswordRecovery/>}/>*/}
            {/*    <Route path={'/profile'} element={<Profile/>}/>*/}
            {/*    <Route path={'/registration'} element={<Registration/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
};

export {Navigation};