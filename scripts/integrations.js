let favoriteBoxes = document.querySelector("#favorite-boxes");
let switchingBoxes = document.querySelector("#switching>div")


function showDivs(data, position){

    data.forEach(function(el, i){
        let div = document.createElement("div");
    
        let x = i%3;
        if(x%2 == 1){
            div.style.backgroundColor = "#fffafb"
        }else{
            div.style.backgroundColor = "#f7fbfd"
        }
    
        let image = document.createElement("img");
        image.src = el.Image;
    
        let h1 = document.createElement("h1");
        h1.innerText = el.heading;
    
        let description = document.createElement("p");
        description.innerText = el.desc;
    
        let link = document.createElement("a")
        link.href = "#";
        link.innerText = "Learn more"
    
        div.append(image, h1, description, link);
        position.append(div);
    })
}


let favoriteBoxesData = [
    {
        Image: "https://niftypm.com/_nuxt/img/harvest.1a8fd00.svg",
        heading: "Harvest",
        desc: "Easily track time spent across Nifty tasks without leaving Nifty, while managing reporting in Harvest.",
    },

    {
        Image: "https://niftypm.com/_nuxt/img/webex.28eb5a7.svg",
        heading: "Webex",
        desc: "Start Webex video meetings and screen sharing from project discussions and direct messages.",
    },

    {
        Image: "https://niftypm.com/_nuxt/img/zoomus.a7e48d7.svg",
        heading: "Zoom",
        desc: "Easily start Zoom video meetings and screen sharing from project discussions and direct messages.",
    },

    {
        Image: "https://niftypm.com/_nuxt/img/slack.48a3232.svg",
        heading: "Slack",
        desc: "Manage your team’s work seamlessly between Nifty and Slack, without having to constantly switch tools.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOEMwIDExLjU0IDIuMjkgMTQuNTMgNS40NyAxNS41OUM1Ljg3IDE1LjY2IDYuMDIgMTUuNDIgNi4wMiAxNS4yMUM2LjAyIDE1LjAyIDYuMDEgMTQuMzkgNi4wMSAxMy43MkM0IDE0LjA5IDMuNDggMTMuMjMgMy4zMiAxMi43OEMzLjIzIDEyLjU1IDIuODQgMTEuODQgMi41IDExLjY1QzIuMjIgMTEuNSAxLjgyIDExLjEzIDIuNDkgMTEuMTJDMy4xMiAxMS4xMSAzLjU3IDExLjcgMy43MiAxMS45NEM0LjQ0IDEzLjE1IDUuNTkgMTIuODEgNi4wNSAxMi42QzYuMTIgMTIuMDggNi4zMyAxMS43MyA2LjU2IDExLjUzQzQuNzggMTEuMzMgMi45MiAxMC42NCAyLjkyIDcuNThDMi45MiA2LjcxIDMuMjMgNS45OSAzLjc0IDUuNDNDMy42NiA1LjIzIDMuMzggNC40MSAzLjgyIDMuMzFDMy44MiAzLjMxIDQuNDkgMy4xIDYuMDIgNC4xM0M2LjY2IDMuOTUgNy4zNCAzLjg2IDguMDIgMy44NkM4LjcgMy44NiA5LjM4IDMuOTUgMTAuMDIgNC4xM0MxMS41NSAzLjA5IDEyLjIyIDMuMzEgMTIuMjIgMy4zMUMxMi42NiA0LjQxIDEyLjM4IDUuMjMgMTIuMyA1LjQzQzEyLjgxIDUuOTkgMTMuMTIgNi43IDEzLjEyIDcuNThDMTMuMTIgMTAuNjUgMTEuMjUgMTEuMzMgOS40NyAxMS41M0M5Ljc2IDExLjc4IDEwLjAxIDEyLjI2IDEwLjAxIDEzLjAxQzEwLjAxIDE0LjA4IDEwIDE0Ljk0IDEwIDE1LjIxQzEwIDE1LjQyIDEwLjE1IDE1LjY3IDEwLjU1IDE1LjU5QzEzLjcxIDE0LjUzIDE2IDExLjUzIDE2IDhDMTYgMy41OCAxMi40MiAwIDggMFoiIHRyYW5zZm9ybT0ic2NhbGUoNjQpIiBmaWxsPSIjMUIxRjIzIi8+Cjwvc3ZnPgo=",
        heading: "Github",
        desc: "Automatically track your commits, merges, and pull requests - all from within your task activity feeds.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMyI+PHBhdGggZmlsbD0iI2YzZjNmMyIgZD0iTTAgMGgyM3YyM0gweiIvPjxwYXRoIGZpbGw9IiNmMzUzMjUiIGQ9Ik0xIDFoMTB2MTBIMXoiLz48cGF0aCBmaWxsPSIjODFiYzA2IiBkPSJNMTIgMWgxMHYxMEgxMnoiLz48cGF0aCBmaWxsPSIjMDVhNmYwIiBkPSJNMSAxMmgxMHYxMEgxeiIvPjxwYXRoIGZpbGw9IiNmZmJhMDgiIGQ9Ik0xMiAxMmgxMHYxMEgxMnoiLz48L3N2Zz4=",
        heading: "Microsoft Suite",
        desc: "Upload files from OneDrive, import docs from 365, and sync your events as tasks from Outlook Calendar.",
    },

    {
        Image: "https://niftypm.com/_nuxt/img/google.b772794.svg",
        heading: "Google Drive & Calendar",
        desc: "Create and upload Google docs, spreadsheets, and files directly into your Nifty projects.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY0IiBoZWlnaHQ9IjE2NCIgdmlld0JveD0iMCAwIDE2NCAxNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNTEuNyAwSDEyLjNDNS41MDY5IDAgMCA1LjUwNjkgMCAxMi4zVjE1MS43QzAgMTU4LjQ5MyA1LjUwNjkgMTY0IDEyLjMgMTY0SDE1MS43QzE1OC40OTMgMTY0IDE2NCAxNTguNDkzIDE2NCAxNTEuN1YxMi4zQzE2NCA1LjUwNjkgMTU4LjQ5MyAwIDE1MS43IDBaIiBmaWxsPSIjRkZEMDJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEyLjIzIDIwSDk0LjA4TDEwOS4yMSA0Ni41N0w3NS45NCAyMEg1Ny43OUw3NC40MyA1Mi40OEwzOS42NSAyMEgyMS41TDM5LjY1IDYxLjMzTDIxLjUgMTQ0SDM5LjY1TDc0LjQzIDU1LjQzTDU3Ljc5IDE0NEg3NS45NEwxMDkuMjEgNDkuNTJMOTQuMDggMTQ0SDExMi4yM0wxNDUuNSA0MC42N0wxMTIuMjMgMjBaIiBmaWxsPSIjMDUwMDM4Ii8+Cjwvc3ZnPgo=",
        heading: "Miro",
        desc: "Embed and collaborate on Miro Whiteboards right inside Nifty Tasks, Docs, and Project views.",
    },

    {
        Image: "https://niftypm.com/_nuxt/img/typeform.464ca68.svg",
        heading: "Typeform",
        desc: "Use intake forms and turn submissions into new projects, tasks, and comments automatically.",
    }
]

showDivs(favoriteBoxesData, favoriteBoxes)

let switchingDataBoxesData = [
    {
        Image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA0NSA0MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNTAlIiBjeT0iNTQuNjUyJSIgZng9IjUwJSIgZnk9IjU0LjY1MiUiIHI9IjcwLjgzMyUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjkzNTQ4IDAgMCAxIC4wMzIgMCkiIGlkPSJhIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjkwMCIgb2Zmc2V0PSIwJSIvPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjk1RDhGIiBvZmZzZXQ9IjYwJSIvPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjk1MzUzIiBvZmZzZXQ9Ijk5LjkxJSIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggZD0iTTM1LjIxNCAyMi4yODZjLTUuNDA2IDAtOS43ODcgNC40MzUtOS43ODcgOS45MDUgMCA1LjQ3MSA0LjM4MSA5LjkwNiA5Ljc4NyA5LjkwNiA1LjQwNCAwIDkuNzg2LTQuNDM1IDkuNzg2LTkuOTA2IDAtNS40Ny00LjM4Mi05LjkwNS05Ljc4Ni05LjkwNXptLTI1LjQyNy4wMDFDNC4zODIgMjIuMjg3IDAgMjYuNzIxIDAgMzIuMTkyYzAgNS40NyA0LjM4MiA5LjkwNSA5Ljc4NyA5LjkwNSA1LjQwNSAwIDkuNzg3LTQuNDM1IDkuNzg3LTkuOTA1IDAtNS40NzEtNC4zODItOS45MDUtOS43ODctOS45MDV6bTIyLjUtMTIuMzgyYzAgNS40Ny00LjM4MiA5LjkwNi05Ljc4NyA5LjkwNi01LjQwNSAwLTkuNzg3LTQuNDM2LTkuNzg3LTkuOTA2QzEyLjcxMyA0LjQzNSAxNy4wOTUgMCAyMi41IDBjNS40MDUgMCA5Ljc4NiA0LjQzNSA5Ljc4NiA5LjkwNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLjcyNikiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K",
        heading: "Asana",
        desc: "Automatically bring in your Asana users, tasks and attachments for any and all selected projects.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA1NyA0NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZD0iTTI4LjUgMEMxMy4xNTkgMCAxLjEzOCAxOS4zMTMgMCAzNS42MjUgNC44MTUgNDMuODkyIDE2LjQyNiA0NyAyOC41MDEgNDcgNDAuNTc2IDQ3IDUyLjE4OCA0My44OTIgNTcgMzUuNjI1IDU1Ljg2MiAxOS4zMTMgNDMuODQ0IDAgMjguNTAxIDAiIGZpbGw9IiNCNkRFRkYiLz4KICAgIDxwYXRoIGQ9Ik01My42NTkgMzIuNDg2cy0zLjQzNy03LjMxLTYuOTMtMTEuNTc0QzQzLjIzMyAxNi42NDUgMzguOTY0IDEyIDM2LjQzOSAxMmMtMi41MjMgMC05LjU3NSAxMi4yODMtMTIuODEgMTIuMjgzLTMuMjM3IDAtNC45MTgtNS41NjgtOC44OTctNS41NjgtMy45OCAwLTEwLjMwNCAxMy40MjgtMTAuMzA0IDEzLjQyOEw0IDM0LjQxOVM2LjE5NyA0NCAyOS4xOCA0NCA1NCAzNC41NzYgNTQgMzQuNTc2bC0uMzQtMi4wOSIgZmlsbD0iIzZDNiIvPgogICAgPHBhdGggZD0iTTI0LjU0OSAyOWMtMy40MTkgMC01LjE3Mi0zLjU1OC02LjEyMi01Ljc1NS0uODU1LTEuOTc4LTEuMDAyLTUuMTAyLTMuNDI3LTUuMTkuMjM4LS4xLjQ2OC0uMTU4LjY4My0uMTU4IDMuODEgMCA1LjQyMSA1LjcyIDguNTIxIDUuNzIgMy4xIDAgOS44NTUtMTIuNjE3IDEyLjI3MS0xMi42MTcuNDU1IDAgLjk2OC4xNyAxLjUyNS40Ny0uNDEyLS4wNTYtLjk0LS4wMTYtMS4zNDYuNDE0QzM1Ljg3MiAxMi43MDggMjguNzgyIDI5IDI0LjU0OSAyOSIgZmlsbD0iIzE3QUQ0OSIvPgogIDwvZz4KPC9zdmc+Cg==",
        heading: "Basecamp",
        desc: "Quickly move all your Basecamp projects, members, tasks, and files into Nifty.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjE1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNjguMDElIiB5Mj0iNjguMDElIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iIzg5MzBGRCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM0OUNDRjkiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjY4LjAxJSIgeTI9IjY4LjAxJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjAyRjAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZDODAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0uNCAxMTkuMTJsMjMuODEtMTguMjRDMzYuODYgMTE3LjM5IDUwLjMgMTI1IDY1LjI2IDEyNWMxNC44OCAwIDI3Ljk0LTcuNTIgNDAuMDItMjMuOWwyNC4xNSAxNy44QzExMiAxNDIuNTIgOTAuMzQgMTU1IDY1LjI2IDE1NWMtMjUgMC00Ni44Ny0xMi40LTY0Ljg2LTM1Ljg4eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik02NS4xOCAzOS44NEwyMi44IDc2LjM2IDMuMjEgNTMuNjQgNjUuMjcuMTZsNjEuNTcgNTMuNTItMTkuNjggMjIuNjR6Ii8+PC9nPjwvc3ZnPg==",
        heading: "ClickUp",
        desc: "Move seamlessly from ClickUp to Nifty. Importing users, projects, tasks, comments and associated files will only take a moment.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjIuNTkgMCAyMTQuMDkxMDEwMDggMjI0IiB3aWR0aD0iMjM2MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjY0KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMDIuNCIgeDI9IjU2LjE1IiB5MT0iMjE4LjYzIiB5Mj0iMTcyLjM5Ij48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzAwNTJjYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2ODRmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMTE0LjY1IiB4Mj0iMTYwLjgxIiB4bGluazpocmVmPSIjYSIgeTE9Ijg1Ljc3IiB5Mj0iMTMxLjkyIi8+PHBhdGggZD0ibTIxNC4wNiAxMDUuNzMtOTYuMzktOTYuMzktOS4zNC05LjM0LTcyLjU2IDcyLjU2LTMzLjE4IDMzLjE3YTguODkgOC44OSAwIDAgMCAwIDEyLjU0bDY2LjI5IDY2LjI5IDM5LjQ1IDM5LjQ0IDcyLjU1LTcyLjU2IDEuMTMtMS4xMiAzMi4wNS0zMmE4Ljg3IDguODcgMCAwIDAgMC0xMi41OXptLTEwNS43MyAzOS4zOS0zMy4xMi0zMy4xMiAzMy4xMi0zMy4xMiAzMy4xMSAzMy4xMnoiIGZpbGw9IiMyNjg0ZmYiLz48cGF0aCBkPSJtMTA4LjMzIDc4Ljg4YTU1Ljc1IDU1Ljc1IDAgMCAxIC0uMjQtNzguNjFsLTcyLjQ3IDcyLjQ0IDM5LjQ0IDM5LjQ0eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im0xNDEuNTMgMTExLjkxLTMzLjIgMzMuMjFhNTUuNzcgNTUuNzcgMCAwIDEgMCA3OC44Nmw3Mi42Ny03Mi42M3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4=",
        heading: "JIRA",
        desc: "Import all your projects, issues, tasks, files, and comments into Nifty.",
    },

    {
        Image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA0MyA0MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iYSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDkxRTYiIG9mZnNldD0iMCUiLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwNzlCRiIgb2Zmc2V0PSIxMDAlIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZD0iTTggMGgyN2E4IDggMCAwIDEgOCA4djI3YTggOCAwIDAgMS04IDhIOGE4IDggMCAwIDEtOC04VjhhOCA4IDAgMCAxIDgtOHoiIGZpbGw9InVybCgjYSkiLz4KICAgIDxwYXRoIGQ9Ik0yNyA2aDdhMyAzIDAgMCAxIDMgM3YxM2EzIDMgMCAwIDEtMyAzaC03YTMgMyAwIDAgMS0zLTNWOWEzIDMgMCAwIDEgMy0zek05IDZoN2EzIDMgMCAwIDEgMyAzdjI0YTMgMyAwIDAgMS0zIDNIOWEzIDMgMCAwIDEtMy0zVjlhMyAzIDAgMCAxIDMtM3oiIGZpbGw9IiNGRkYiLz4KICA8L2c+Cjwvc3ZnPgo=",
        heading: "Trello",
        desc: "Import your Trello boards into Nifty. Bring over your users, tasks and attachments for one or multiple boards.",
    },

    {
        Image: "https://niftypm.com/_nuxt/img/wrike.b3f672b.svg",
        heading: "Wrike",
        desc: "Bring your data over from Wrike instantly. Import your projects, members, tasks, attachments and comments.",
    },

]

showDivs(switchingDataBoxesData, switchingBoxes)