import { useSelector } from "react-redux";
import SendMessageForm from "./SendMessageForm";
import UsersList from "./UsersList";

export default function ChatWindow() {
    const messages = useSelector(state => state.messages.value);
    const currentUser = useSelector(state => state.users.currentUser)

    return (
        <>
            <UsersList />
            {
                messages.map((message, messageIndex)=>
                    <div key={messageIndex} style={{border: '1px solid black', backgroundColor: currentUser.id === message.sender.id ? "lightblue" : ""}}>
                        <img style={{width: '50px', height: '50px', }}
                            src={message.sender.image}
                            alt="sender-avatar"
                        />
                        {`${message.text}`}
                    </div>
                )
            }
            <SendMessageForm />
        </>
    );
}