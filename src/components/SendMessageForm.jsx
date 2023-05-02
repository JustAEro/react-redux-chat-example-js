import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slices/messagesSlice";

export default function SendMessageForm() {
    const initialMessageText = ""
    const [messageText,setMessageText] = useState(initialMessageText);

    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    const handleSendMessage = (event) => {
        event.preventDefault();

        if (messageText !== "" && currentUser.id !== null) {
            const message = {
                text: messageText,
                sender: currentUser,
            }
            dispatch(addMessage(message));
            setMessageText(initialMessageText);
        }
    }

    return (
        <>
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={messageText}
                    placeholder="Enter the message"
                    onChange={(event) => setMessageText(event.target.value)}
                />
                <input type="submit" value="Send message" />
            </form>
        </>
    );
}