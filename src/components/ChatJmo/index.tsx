import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import { PreviousChatsProps, ChatMessage } from "./types";
import ChatFeed, { scrollToBottom, getMessageData } from "./helpers";

const ChatJmo = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState<ChatMessage | null>(null);
  const [previousChats, setPreviousChats] = useState<PreviousChatsProps[]>([]);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);

  const bottomInputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (value && message) {
      if (!currentTitle) {
        setCurrentTitle(value);
      }
      if (currentTitle) {
        setPreviousChats((previousChats) => [
          ...previousChats,
          { title: currentTitle, role: "user", content: value },
          {
            title: currentTitle,
            role: message?.role,
            content: message?.content,
          },
        ]);

        scrollToBottom(bottomInputRef);
      }
    }
  }, [message, currentTitle]);

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleChatClick = (title: string | null) => {
    setCurrentTitle(title);
    setMessage(null);
    setValue("");
    scrollToBottom(bottomInputRef);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMessageData(value, setMessage);
  };

  const uniqueTitles = Array.from(
    new Set(previousChats.map((prevCat) => prevCat.title))
  );

  return (
    <>
      <section className="side-bar">
        {!!previousChats.length && (
          <button onClick={() => createNewChat()}>Start New Chat</button>
        )}
        <ul className="chat-history">
          {uniqueTitles?.map((title, index) => (
            <li key={index} onClick={() => handleChatClick(title)}>
              {title}
            </li>
          ))}
        </ul>
      </section>

      <section className="content">
        <Header mainText="Chat~JMo" />
        {currentTitle && <p className="current-title">{currentTitle}</p>}

        <ChatFeed previousChats={previousChats} currentTitle={currentTitle} />
        <div className="input-container" ref={bottomInputRef}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="What's on your mind?"
              type="text"
              onChange={onInputChangeHandler}
              value={value}
            />
            <button id="submit">GO</button>
          </form>

          <p className="info" id="page-bottom">
            ChatGPT clone using "gpt-3.5-turbo". Chat~JMo may produce inaccurate
            information about people, places, or facts.
          </p>
        </div>
      </section>
    </>
  );
};

export default ChatJmo;
