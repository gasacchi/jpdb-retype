import "./app.css"
import * as app from "./app"
import { get_element } from "./lib/common"


const inject_css = () => {
  //@ts-ignore
  const css = GM_getResourceText("CSS");

  //@ts-ignore
  GM_addStyle(css);
}


const restyle = () => {
  const body = get_element("body");

  // force style
  body?.setAttribute("style", "margin: auto !important; background: #11111b !important")
}

const detect_front_review = () => {
  const show_answer_button = get_element("#show-answer", false)

  if (show_answer_button) return [true, show_answer_button];

  return [false, null]
}

const detect_back_review = () => {
  const grade_button = get_element("input#grade-5", false)

  return grade_button !== null
}

const skip_front_review = (button: HTMLInputElement) => {
  button.click()
}


const main = () => {
  inject_css();
  restyle();

  const [front_review_detected, front_review_button] = detect_front_review()

  if (front_review_detected) {
    skip_front_review(front_review_button as HTMLInputElement)
  }

  if (detect_back_review()) {
    app.render()
  }
}

main();
