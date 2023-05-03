import { useDispatch, useSelector } from "react-redux";
import { changeCurrentUser } from "../redux/slices/usersSlice";

import cn from 'classnames';
import styles from "../scss/User.module.scss"

export default function User(props) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser)

    const selectUserAsCurrent = (event) => {
        const { id } = event.currentTarget;
        const numberId = +id;
        dispatch(changeCurrentUser(numberId));
    }

    return (
        <>
            <li className={
                cn(styles.user,
                   currentUser.id === props.id && styles.current )
            } id={props.id}
            onClick={selectUserAsCurrent}>
                <img className={styles.img}
                    src={props.image} 
                    alt="user-avatar"
                />
                <div>{props.username}</div>
            </li>
        </>
    );
}