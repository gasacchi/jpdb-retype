// getTasks.js

//@ts-ignore
import { fetch } from "bun";

const API_KEY = "YzZlNTY5MWEtNjQ5ZC00NzY2LTgwZjctMjI1YWIwODkwYTMz";
const WORKSPACE_ID = "666909c81f97f50b4260c863";
const PROJECT_ID = "66ab0751af6ad5487b4f1c3b";

async function getTasks() {
    const url = `https://api.clockify.me/api/v1/workspaces/${WORKSPACE_ID}/projects/${PROJECT_ID}/tasks`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "X-Api-Key": API_KEY,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        console.error(`Error fetching tasks: ${response.statusText}`);
        return;
    }

    const tasks = await response.json();
    tasks.forEach(task => {
        console.log(`Task Name: ${task.name}, Task ID: ${task.id}`);
    });
}

getTasks();
