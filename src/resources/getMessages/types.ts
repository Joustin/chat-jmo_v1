import { ChatMessage } from "../../components/ChatJmo/types";

export type ChatUsage = {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
};

export type ChatChoices = {
  finish_reason: string;
  index: number;
  message: ChatMessage;
};

export type GetMessagesResponse = {
  choices: ChatChoices[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: ChatUsage;
};
