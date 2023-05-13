import { PreviousChatsProps, ChatMessage, ChatFeedProps } from "./types";
import { getMessages } from "../../resources/getMessages";

export const scrollToBottom = (ref: React.RefObject<HTMLDivElement>) => {
  setTimeout(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

export const getMessageData = (
  value: string,
  setMessage: React.Dispatch<React.SetStateAction<ChatMessage | null>>
) => {
  getMessages(value).then(function (result) {
    if (result) {
      setMessage(result);
    }
  });
};

const currentChat = (
  previousChats: PreviousChatsProps[],
  currentTitle: string | null
) => {
  return previousChats.filter((prevChat) => prevChat.title === currentTitle);
};

const ChatFeed = ({
  previousChats,
  currentTitle,
}: ChatFeedProps): JSX.Element => {
  return (
    <ul className="feed">
      {currentChat(previousChats, currentTitle)?.map((chatMessage, index) => {
        return (
          <li key={index} className={chatMessage.role}>
            <p className="role">{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ChatFeed;
