import { useSelector } from "react-redux";
import cn from 'classnames';
import styles from "../scss/Messages.module.scss"

export default function Messages() {
    const messages = useSelector(state => state.messages.value);
    const currentUser = useSelector(state => state.users.currentUser)

    return (
        <>
        <div className={cn(
            styles.messages
        )}>
        {
            messages.map( (message, messageIndex) =>
                <div key={messageIndex}
                 className={cn(
                    styles.message,
                    currentUser.id === message.sender.id && styles.current,
                 )}
                >
                    <img style={{width: '50px', height: '50px', }}
                        src={message.sender.image}
                        alt="sender-avatar"
                    />
                    <div>{message.text}</div>
                </div>
            )
        }
        </div>
        </>
    );
}