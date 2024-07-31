import { writable } from "svelte/store"
import { get_element } from "./common"


const get_answer = () => {
  const correct_answer = get_element(".subsection-pitch-accent .subsection>div>div", false)?.textContent
  return correct_answer || ""
}

type app_store =
  {
    is_answered: boolean
    is_correct: boolean
    is_reveal: boolean
    correct_answer: string
    user_answer: string
  }


export const app_state = writable<app_store>({
  is_answered: false,
  is_correct: false,
  is_reveal: false,
  correct_answer: get_answer(),
  user_answer: ""
})
