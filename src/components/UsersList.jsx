import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/usersSlice";
import User from "./User";

import cn from 'classnames';
import styles from "../scss/UsersList.module.scss";

export default function UsersList({ classname }) {

    const dispatch = useDispatch();

    const theme = useSelector(state => state.theme);

    const usersList = useSelector(state => state.users.usersList);
    const loadingState = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <>
        <div className={cn(
            classname,
            styles.root,
        )}>
            {
                loadingState === 'loading' 
                ?
                    <h1>Loading...</h1> 
                :
                loadingState === 'failed'
                ?
                    <>
                        <h1>{error.name}</h1>
                        <h2>{error.message}</h2>
                    </>
                : false
            }
            <ul className={cn(styles.ul)}>
                {usersList.map((user) => 
                    <User 
                        key={user.id} 
                        {...user} 
                    />   
                )}
            </ul>
        </div>
        </>
    );
}