import React, {useState} from "react";

import db, {firebaseTimestamp} from "../../services/firebase";
import {useStateValue} from "../../state/StateProvider";
import "./style.css";

function ChatInput({channelName, channelId}) {
	const [input, setInput] = useState("");
	const [{user}] = useStateValue();

	const sendMessage = (e) => {
		e.preventDefault();
		if (channelId) {
			db.collection("rooms")
				.doc(channelId)
				.collection("messages")
				.add({
					message: input,
					timestamp: firebaseTimestamp,
					user: user.displayName,
					userImage: user.photoURL,
				});
			setInput("");
		}
	};

	return (
		<div className="chat-input">
			<form>
				<input
					value={input}
					placeholder={`Message #${channelName?.toLowerCase()}`}
					type="text"
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit" onClick={sendMessage}>
                    Send
				</button>
			</form>
		</div>
	);
}

export default ChatInput;
