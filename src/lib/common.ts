// export const get_word_from_element = (word_element: element): string | null => {
//   const ruby = word_element?.querySelectorAll("ruby")
//   ruby?.forEach(rb => {
//     const rt = rb.querySelectorAll("rt")
//     rt?.forEach(r => {
//       r.parentElement?.removeChild(r)
//     })
//   })
//   if (ruby) {
//     const word = Array.from(ruby).map(rb => rb.textContent).join("")
//     return word
//   }

//   return null
// }

// export const get_datetime = () => {
//   // const utc_time = new Date().toString().split("GMT")[0] + " UTC"
//   // const time = new Date(utc_time).toISOString()
//   // return time
//   // TODO: there is no need to convert to utf-8 ????
//   return new Date().toISOString()
// }

// type descriptions = {
//   api_key: string
//   start: string,
//   end: string,
//   task_id: string,
//   project_id: string,
//   workspace_id: string,
//   description: string,
// }

// export const clockfy_send = (descriptions: descriptions) => {
//   const { start, end, task_id, workspace_id, api_key, description, project_id } = descriptions
//   const url = `https://api.clockify.me/api/v1/workspaces/${workspace_id}/time-entries`

//   const body = {
//     billable: false,
//     description,
//     start,
//     end,
//     projectId: project_id,
//     taskId: task_id,
//     type: "REGULAR"
//   }

//   //@ts-ignore
//   GM_xmlhttpRequest({
//     method: "POST",
//     headers: {
//       "X-Api-Key": api_key,
//       "Content-Type": "application/json"
//     },
//     url,
//     data: JSON.stringify(body),
//     onload: function(response: any) {
//       console.info("Request success", JSON.parse(response.response))
//     },
//     onerror: function(error: any) {
//       console.info("Request failed", error)
//     }
//   })
// }
