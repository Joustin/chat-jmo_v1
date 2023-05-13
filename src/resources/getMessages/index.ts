import { OAI_Completions } from "../endpoints";
import { GetMessagesResponse } from "./types";

export const getMessages = async (value: string) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OA_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: value,
        },
      ],
      max_tokens: 100, // 100?
    }),
  };
  try {
    const response = await fetch(OAI_Completions, options);

    const data: GetMessagesResponse = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.log(error);
  }
};
