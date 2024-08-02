import "./styles.css"
import * as back_card from "./back_card"
import * as front_card from "./front_card"
import { get_element } from "./lib/common"


// const inject_css = () => {
//   //@ts-ignore
//   const css = GM_getResourceText("CSS");

//   //@ts-ignore
//   GM_addStyle(css);
// }

function inject_css(): void
{
    //@ts-ignore
    const css = GM_getResourceText("CSS");

    //@ts-ignore
    GM_addStyle(css);
}

// const restyle = () => {
//   const body = get_element("body");

//   // force style
//   body?.setAttribute("style", "margin: auto !important; background: #11111b !important")
// }

function detect_front_review (): boolean
{
    const show_answer_button = get_element("#show-answer", {log: false})

    if (show_answer_button) return true;

    return false
}

function detect_back_review(): boolean
{
    return false
}

function main(): void
{

    inject_css();
    
    if (detect_front_review())
    {
        front_card.render();
    }

    else if (detect_back_review())
    {
        back_card.render();
    }
    else
    {
        console.error("Something wrong with main function!")
    }
}


main();



// const main = () => {
//   // inject_css();
//   // restyle();

//   if (detect_front_review()) {
//   }

//   // const [front_review_detected, front_review_button] = detect_front_review()

//   // if (front_review_detected) {
//   //   // skip_front_review(front_review_button as HTMLInputElement)
//   //   front_card.render()
//   // }

//   // if (detect_back_review()) {
//   //   app.render()
//   // }
// }

// main();
