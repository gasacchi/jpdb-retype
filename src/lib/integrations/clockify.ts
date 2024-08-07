import { writable } from "svelte/store";

type descriptions =
{
    api_key: string;
    start: string;
    end: string;
    task_id: string;
    project_id: string;
    workspace_id: string;
    description: string;
}

export function clockify_send(descriptions: descriptions): boolean
{
    const {
        api_key,
        start,
        end,
        task_id,
        project_id,
        workspace_id,
        description,
    } = descriptions;

    const url = `https://api.clockify.me/api/v1/workspaces/${workspace_id}/time-entries`;
    
    const body =
    {
        billable: false,
        description,
        start,
        end,
        projectId: project_id,
        taskId: task_id,
        type: "REGULAR",
    };

    let error: boolean = false;

    //@ts-ignore
    GM_xmlhttpRequest({
        method: "POST",
        headers: {
          "X-Api-Key": api_key,
          "Content-Type": "application/json"
        },
        url,
        data: JSON.stringify(body),
        onload: function(response: any) {
            console.log("Request success", response.response);
            error = false;
        },
        onerror: function(error: any) {
          console.info("Request failed", error);
          error = true;
        }
    })

    return error;

}
