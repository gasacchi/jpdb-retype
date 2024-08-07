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

export function clockify_send(descriptions: descriptions): void
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
          console.info("Request success", JSON.parse(response.response))
        },
        onerror: function(error: any) {
          console.info("Request failed", error)
        }
    })
}
