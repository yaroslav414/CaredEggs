let facilitateIdeas = [
    {
        name: "Facilitate Ideas",
        heading: "Facilitate Ideas",
        desc: "Discussions enable real-time collaboration amongst project members to share ideas, collect feedback, and take meaningful decisions. ",
        image: "https://niftypm.com/_nuxt/img/large@1x.0e4d758.webp"
    },

    {
        name: "Take Actions",
        heading: "Take Actions",
        desc: "Turn project discussions into quick-actions by converting a message into a task, or by creating a doc and auto-inviting all project members. ",
        image: "https://niftypm.com/_nuxt/img/large@1x.f9c0f43.webp"
    },

    {
        name: "Stay Connected",
        heading: "Stay Connected",
        desc: "Direct messages enable teammates to communicate outside of projects to stay better connected with everyone and everything. ",
        image: "https://niftypm.com/_nuxt/img/large@1x.efa8b54.webp"
    }
]

let faciliateSpans = document.querySelectorAll("#facilitate_ideas>div:first-child>div:first-child>span");

let index = 0;
let slidShow = () => {

    let facilitateHeading = document.querySelector("#facilitate_ideas_heading");
    let facilitateDescription = document.querySelector("#facilitate_ideas_description");
    let facilitateImage = document.querySelector("#facilitate_ideas_image");

    id = setInterval(() => {
        if (index === facilitateIdeas.length) {
            index = 0;

            faciliateSpans.forEach(function(el){
                el.style.color = "gray";
                el.style.borderBottom = "none";
            })
        }


        for (let i = 0; i < faciliateSpans.length; i++) {

            if (faciliateSpans[i].innerText == facilitateIdeas[index].name) {
                faciliateSpans[i].style.color = "#00baab";
                faciliateSpans[i+1].style.color = "#00baab";
                faciliateSpans[i].style.borderBottom = "2px solid #00baab";
            }
        }
        facilitateHeading.innerText = facilitateIdeas[index].heading;
        facilitateDescription.innerText = facilitateIdeas[index].desc;
        facilitateImage.src = facilitateIdeas[index].image;


        index++;
    }, 5000)
};

slidShow();
