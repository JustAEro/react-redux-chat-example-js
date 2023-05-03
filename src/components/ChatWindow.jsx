import SendMessageForm from "./SendMessageForm";
import UsersList from "./UsersList";
import ThemeChanger from "./ThemeChanger";
import Messages from "./Messages";

import cn from 'classnames'
import styles from "../scss/ChatWindow.module.scss"

export default function ChatWindow() {
   
    return (
        <>
        <div className={cn(
            styles.chatWindow,
        )}>
            <div>
                <ThemeChanger />
                <UsersList />
            </div>
            <div>
                <Messages />
                <SendMessageForm />
            </div>
            
        </div>
        </>
    );
}