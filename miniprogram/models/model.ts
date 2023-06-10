type Prompt = {
  title: string;
  name: string;
  content: string;
  description: string;
  checked: boolean;
};

const emptyPromptArray: Prompt[] = []

type ChatMessage = {
  id: number,
  role: string,
  content: string
}

const emptyChatMessageArray: ChatMessage[] = []

export { Prompt, emptyPromptArray, ChatMessage, emptyChatMessageArray }