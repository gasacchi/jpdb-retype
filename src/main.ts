import "./styles.css"
import * as back_card from "./back_card"
import * as front_card from "./front_card"

function inject_css(): void
{
    //@ts-ignore
    const css = GM_getResourceText("CSS");

    //@ts-ignore
    GM_addStyle(css);
}


function detect_front_review (): boolean
{
    const show_answer_button = document.querySelector("#show-answer");

    if (show_answer_button) return true;

    return false
}

function detect_back_review(): boolean
{
    const okay_grade_button = document.querySelector("#grade-4");

    if (okay_grade_button) return true;
    
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
        console.error("Error when trying to render front card");
    }

    window.addEventListener("urlchange", () => {
        if (detect_back_review())
        {
            back_card.render();
        }
        else
        {
            console.error("Error when trying to render back card");
        }
    });
};



main();
