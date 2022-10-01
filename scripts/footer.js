



let footerData = [
    {
        heading : "Product",
        links : ["Discussions", "Milestones", "Tasks", "Docs & Files", "Time Tracking", "Reporting", "Project Home", "Project Home", "Project Portfolios"]
    },

    {
        heading : "Resources",
        links : ["Blog", "Change Log", "Integrations", "Apps", "Pricing", "Affiliates"]
    },

    {
        heading : "Trust",
        links : ["Help Center", "Privacy", "Terms of Use", "Security", "Status"]
    },

    {
        heading : "Made For",
        links : ["Agile Development", "Client Management", "Digital Agencies", "Legal Case Management", "Marketing Teams", "Product Teams"]
    },

    {
        heading : "Comparisions",
        links : ["Airtable Alternative", "Asana Alternative", "Basecamp Alternative", "Clarizen Alternative", "clickUp Alternative", "Confluence Alternative", "Flow Alternative", "Hive Alternative", "JIRA Alternative", "Monday.com Alternative"]
    },

    {
        heading : "Blot",
        links : ["Why project management is broken (& how to fix it!)", "Why Remote Collaboration is more than just Communication", "Staying on top of your workloads with time tracking", "Best Legal Case Management Software for Law Firms"]
    }
]


let footer = document.querySelector("#footer-links");
footer.style.gridTemplateColumns = `repeat(${footerData.length}, 1fr)`


displayData();

function displayData(){


    footerData.forEach(function(el){
        let div = document.createElement("div")

        let p = document.createElement("p")
        p.innerText = el.heading;

        div.append(p);
        el.links.forEach(function(elem){

            let a = document.createElement("a")
            a.href = "#";
            a.innerText = elem;

            div.append(a);
        })


        footer.append(div);
    })
}