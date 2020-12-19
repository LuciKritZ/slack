import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";

import db from "../../services/firebase";
import Message from "../message";
import ChatInput from "../chatInput";
import "./style.css";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState();
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
            ));
        }

        db.collection("rooms").doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    }, [roomId]);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header-left">
                    <h4 className="chat__channel-name">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__header-right">
                    <p><InfoOutlined /> Details</p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({message, timestamp, user, userImage}, index) => (
                    <Message
                        key={index}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
                <ChatInput
                    channelName={roomDetails?.name}
                    channelId={roomId}
                />
            </div>
        </div>
    )
}

export default Chat;
