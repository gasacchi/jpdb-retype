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
    timer_start: string,
    timer_end: string
  }

type app_settings = {
  clockify: {
    api_key: string
    project_id: string,
    workspace_id: string,
    task_id: string,
  }
}


export const app_state = writable<app_store>({
  is_answered: false,
  is_correct: false,
  is_reveal: false,
  correct_answer: get_answer(),
  user_answer: "",
  timer_start: "",
  timer_end: "",
})

export const app_settings = writable<app_settings>({
  clockify: {
    api_key: "YzZlNTY5MWEtNjQ5ZC00NzY2LTgwZjctMjI1YWIwODkwYTMz",
    project_id: "66ab0751af6ad5487b4f1c3b",
    workspace_id: "666909c81f97f50b4260c863",
    task_id: "66ab1130b48f5a264a53cbdd"
  }
})
