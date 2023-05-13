export type ChatMessage = {
  content: string;
  role: string;
};

export type PreviousChatsProps = ChatMessage & {
  title: string | null;
};

export type ChatFeedProps = {
  previousChats: PreviousChatsProps[];
  currentTitle: string | null;
};
