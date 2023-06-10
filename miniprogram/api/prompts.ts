import { Prompt } from "~/models/model"

const ChatGptPrompt: Prompt = {
  title: 'default',
  name: 'ChatGPT',
  content: '',
  description: '一个 AI 语言模型，可以回答问题的人工智能程序。',
  checked: true
}

const defaultPrompt: Prompt = ChatGptPrompt

export { defaultPrompt }