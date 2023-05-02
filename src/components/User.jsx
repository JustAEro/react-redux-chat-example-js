import { useDispatch, useSelector } from "react-redux";
import { changeCurrentUser } from "../redux/slices/usersSlice";

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
            <li id={props.id}  style={{border: '1px solid black', cursor:'pointer', backgroundColor: currentUser.id === props.id ? "yellow" : ""}}
            onClick={selectUserAsCurrent}>
                <span>{props.username}</span>
                <img style={{width: '50px', height: '50px'}}
                    src={props.image} 
                    alt="user-avatar"
                />
            </li>
        </>
    );
}