let sliderData = [
    {
        name: "Plan Better Products",
        heading: "Plan Better Products",
        desc: "Centralize everything from pre-planning with the product team to user feedback from support tickets.",
        image: "https://niftypm.com/_nuxt/img/large@1x.326dfff.webp"
    },

    {
        name: "Balance Resources",
        heading: "Balance Resources",
        desc: "Assign a weight to tasks using story points to balance resources while predicting the efforts of upcoming releases.",
        image: "https://niftypm.com/_nuxt/img/large@1x.326dfff.webp"
    },

    {
        name: "Real-time Reporting",
        heading: "Stay Connected",
        desc: "Keep track of your entire team's automated sprint progress as you approach your release dates.",
        image: "https://niftypm.com/_nuxt/img/large@1x.c8361c6.webp"
    }
]

let faciliateSpans = document.querySelectorAll("#facilitate_ideas>div:first-child>div:first-child>span");

let index = 0;
let slidShow = () => {

    let facilitateHeading = document.querySelector("#facilitate_ideas_heading");
    let facilitateDescription = document.querySelector("#facilitate_ideas_description");
    let facilitateImage = document.querySelector("#facilitate_ideas_image");

    id = setInterval(() => {
        if (index === sliderData.length) {
            index = 0;

            faciliateSpans.forEach(function(el){
                el.style.color = "gray";
                el.style.borderBottom = "none";
            })
        }


        for (let i = 0; i < faciliateSpans.length; i++) {

            if (faciliateSpans[i].innerText == sliderData[index].name) {
                faciliateSpans[i].style.color = "#00baab";
                faciliateSpans[i+1].style.color = "#00baab";
                faciliateSpans[i].style.borderBottom = "2px solid #00baab";
            }
        }
        facilitateHeading.innerText = sliderData[index].heading;
        facilitateDescription.innerText = sliderData[index].desc;
        facilitateImage.src = sliderData[index].image;


        index++;
    }, 5000)
};

slidShow();




let leftCarousal = document.querySelector("#left-carousal-items");
let rightCarousal = document.querySelector("#right-carousal-items");

function displayScrollableDivs(data, position){

    data.forEach(function(el){
        let div = document.createElement("div")
    
        let p = document.createElement("p");
        p.innerText = el.p;
    
        let authorName = document.createElement("p");
        authorName.className = "author_name";
        authorName.innerText = el.aN;
    
        let authorDesc = document.createElement("p");
        authorDesc.className = "author_desc";
        authorDesc.innerText = el.aD;
    
        div.append(p, authorName, authorDesc);
        position.append(div);
    })
}



let leftCarousalData = [
    {
        p: `"Nifty is a product that excels in many client environments. The ease of use makes it a powerful tool for managing our client portfolio."`,
        aN: "Stefan Schmidt",
        aD: "Executive Partner, Hammersbach"
    },

    {
        p: `“I feel like we've tried every project management platform the cloud has on offer — some have proven too complex or too simplistic for our requirements. Nifty has been a perfectly seamless transition.”`,
        aN: "Marc Held",
        aD: "CEO, ODYN"
    },

    {
        p: `Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience.`,
        aN: "Rim N. Kay",
        aD: "Engineering Lead, Emovis"
    },

    {
        p: "Nifty is the glue my business was missing. Its one tool that my product team, development team, and clients all use, and now everyone knows exactly where to look for updates.",
        aN: "Bhargav Patel",
        aD: "Founder, IQM"
    },

    {
        p: `"Nifty is one of the most beautiful looking management tools on the market! This matters because customers are usually charmed by its aesthetics and intuitiveness."`,
        aN: "Marek Murawski",
        aD: "Project Manager, Mrvsky"
    },

    {
        p: `“My team and I have been using Nifty for about a year now, and it's been critical to our success in project planning and communication. ”`,
        aN: "Dave Braun",
        aD: "CEO, Pro website Creators"
    },

    {
        p: `In the world full of PM tools, Nifty is awesome and stand apart. Tried the "big" players and just keep coming back to Nifty.`,
        aN: "Dele Omotosho",
        aD: "Entrepreneur, Legal Tech"
    },

    {
        p: `We are huge Nifty fans! We use it to run our accounting firm and manage all our tasks and internal communication. Highly recommend it!`,
        aN: "Spencer Jones",
        aD: "Owner, Proact CFO"
    },

    {
        p: `"Nifty is a product that excels in many client environments. The ease of use makes it a powerful tool for managing our client portfolio."`,
        aN: "Stefan Schmidt",
        aD: "Executive Partner, Hammersbach"
    },

    {
        p: `“I feel like we've tried every project management platform the cloud has on offer — some have proven too complex or too simplistic for our requirements. Nifty has been a perfectly seamless transition.”`,
        aN: "Marc Held",
        aD: "CEO, ODYN"
    },

    {
        p: `Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience.`,
        aN: "Rim N. Kay",
        aD: "Engineering Lead, Emovis"
    },

    {
        p: `"Nifty is one of the most beautiful looking management tools on the market! This matters because customers are usually charmed by its aesthetics and intuitiveness."`,
        aN: "Marek Murawski",
        aD: "Project Manager, Mrvsky"
    },
]

displayScrollableDivs(leftCarousalData, leftCarousal)

let rightCarousalData = [
    {
        p: `We are huge Nifty fans! We use it to run our accounting firm and manage all our tasks and internal communication. Highly recommend it!`,
        aN: "Spencer Jones",
        aD: "Owner, Proact CFO"
    },

    {
        p: `Nifty is a tool that gets used consistently, don't know why but this is such an exception over other tools that got implemented only to be ignored by my team.`,
        aN: "Raj Nadar",
        aD: "Founder, Sales Development Solutions"
    },

    {
        p: `“Great tool! We have been using it for over a year and the new features are very regular! It allows us to manage our technical roadmap as well as our newsletter strategy.”`,
        aN: "Loryanne Taste",
        aD: "Business Developer"
    },

    {
        p: `Nifty is amazing! I use it daily with my team and it's help my business grow by giving my team and I the tools needed to connect and stay on track`,
        aN: "Warren Wheller",
        aD: "Internet Marketer"
    },

    {
        p: `I've been using Nifty for over two years now and have found it to be an extremely reliable project management tool. I don't think I'll ever switch to another PM again.`,
        aN: "Alex Carvalho",
        aD: "Design Director"
    },

    {
        p: `“Nifty is super awesome. I invested in a lot of different products over the years and nothing compares to how professional Nifty is.”`,
        aN: "Rafal Piatek",
        aD: "CEO, iTech"
    },

    {
        p: `Nifty PM is pretty nifty! It's like having my own accountability partner, which is very important to me. I don't get anything done without it. So many great features, a super sexy UI design.`,
        aN: "Yvens Ulysse Jr.",
        aD: "Digital Marketing Strategist"
    },

    {
        p: `A non-bloated, well structured, straightforward to use, task, project and portfolio management solution by a visionary team that supports its product well.`,
        aN: "Alexander Daliyannis",
        aD: "Technical Project Manager"
    },

    {
        p: `"Nifty is a product that excels in many client environments. The ease of use makes it a powerful tool for managing our client portfolio."`,
        aN: "Stefan Schmidt",
        aD: "Executive Partner, Hammersbach"
    },

    {
        p: `“I feel like we've tried every project management platform the cloud has on offer — some have proven too complex or too simplistic for our requirements. Nifty has been a perfectly seamless transition.”`,
        aN: "Marc Held",
        aD: "CEO, ODYN"
    },

    {
        p: `Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience.`,
        aN: "Rim N. Kay",
        aD: "Engineering Lead, Emovis"
    },

    {
        p: `We are huge Nifty fans! We use it to run our accounting firm and manage all our tasks and internal communication. Highly recommend it!`,
        aN: "Spencer Jones",
        aD: "Owner, Proact CFO"
    },

    {
        p: `Nifty is a tool that gets used consistently, don't know why but this is such an exception over other tools that got implemented only to be ignored by my team.`,
        aN: "Raj Nadar",
        aD: "Founder, Sales Development Solutions"
    },

    {
        p: `“Great tool! We have been using it for over a year and the new features are very regular! It allows us to manage our technical roadmap as well as our newsletter strategy.”`,
        aN: "Loryanne Taste",
        aD: "Business Developer"
    },

    {
        p: `Nifty is amazing! I use it daily with my team and it's help my business grow by giving my team and I the tools needed to connect and stay on track`,
        aN: "Warren Wheller",
        aD: "Internet Marketer"
    },
]

displayScrollableDivs(rightCarousalData, rightCarousal);


