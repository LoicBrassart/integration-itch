import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SApp from "./style";

export default function Chat() {
  const [socket, setSocket] = useState({});
  const [messages, setMessages] = useState([]);
  const [formAuthor, setAuthor] = useState("");
  const [formMessage, setMsg] = useState("");
  const [showLogs, setShowLogs] = useState(false);
  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  useEffect(() => {
    const mySocket = socketIOClient(import.meta.env.VITE_BACKEND_URL);

    mySocket.on("listMsg", (data) => {
      setMessages(data);
    });

    setSocket(mySocket);

    return () => {
      mySocket.disconnect();
    };
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!formMessage) return;

    const newMsg = {
      author: formAuthor,
      content: formMessage,
    };
    socket.emit("sendMsg", newMsg);
    setMsg("");
  };

  return (
    <SApp>
      <ul>
        {messages.map(({ id, author, content, time }) => {
          let className = "alienMsg";
          if (author === "Big Brother") {
            className = "notice";
            if (!showLogs) {
              return null;
            }
          }
          if (author === formAuthor) {
            className = "ownMsg";
          }
          return (
            <li key={id} className={className}>
              <address>{author}</address>
              <p>{content}</p>
              <time>{time}</time>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formAuthor}
          onChange={(evt) => {
            setAuthor(evt.target.value);
          }}
        />
        <input
          type="text"
          name="msg"
          placeholder="Message"
          value={formMessage}
          onChange={(evt) => {
            setMsg(evt.target.value);
          }}
        />
        <input type="submit" value="Send" />
      </form>
      <div className="options">
        <label htmlFor="showLogs">
          Show Logs ?
          <input type="checkbox" checked={showLogs} onChange={toggleLogs} />
        </label>
      </div>
    </SApp>
  );
}
