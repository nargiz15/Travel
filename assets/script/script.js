const data =[
    {   id: 1,
        img: "./../assets/images/1.CasinoNiagara.png",
        title: "Casino Niagara",
        location: "Canada",
        span: "9.8",
        rate: "Excellent",
        comment: "(1954 reviews)"
    },
    {   id: 2,
        img: "./../assets/images/2.CasinodeMontréal.png" ,
        title: "Casino De Montreal",
        location: "Canada",
        span: "9.6",
        rate: "Excellent",
        comment: "(1954 reviews)"
    },
    {   id: 3,
        img: "./../assets/images/3.CaesarsWindsosCasino.png" ,
        title: "Caesars Windsor Hotel&Casino",
        location: "Canada",
        span: "9.5",
        rate: "Excellent",
        comment: "(1954 reviews)"
    },
    {   id: 4,
        img: "./../assets/images/4.RiverRockCasinoResort.png" ,
        title: "River Rock Casino Resort",
        location: "Canada",
        span: "9.4",
        rate: "Very good",
        comment: "(1954 reviews)"
    },
    {   id: 5,
        img: "./../assets/images/5.CasinoRamaResort.png" ,
        title: "Casino Rama Resort",
        location: "Canada ",
        span: "9.2",
        rate: "Very good",
        comment: "(1954 reviews)"
    },
    {   id: 6,
        img: "./../assets/images/6.CasinoLac-Leamy .png" ,
        title: "Casino Lac-Leamy",
        location: "Canada",
        span: "9.1",
        rate: "Very good",
        comment: "(1954 reviews)"
    },
    {   id: 7,
        img: "./../assets/images/7.FallsviewCasinoResort .png" ,
        title: "Fallsview Casino Resort",
        location: "Canada",
        span: "9.0",
        rate: "Very good",
        comment: "(1954 reviews)"
    },
    {   id: 8,
        img: "./../assets/images/8.HardRockCasinoVancouver .png" ,
        title: "Hard Rock Casino Vancouver ",
        location: "Canada",
        span: "9.0",
        rate: "Very good ",
        comment: "(1954 reviews)"
    },

]



document.addEventListener("DOMContentLoaded", function() {
    const travelDetails  = document.querySelector('.travelDetails');

   
        data.forEach(datas=> {
            const div = document.createElement('div');
            div.classList.add('data');

            div.innerHTML = `
                  
                <div class=" dataImgContainer">
                <img src="${datas.img}" alt="Hotel Room Image">
                </div>
                <div class="cardText"> 
                <p class="title">${datas.title}</p>
                <p class="loc">${datas.location}</p>
                <div class="rateReviews">
                <span>${datas.span}</span>
                <p class="rate">${datas.rate}</p>
                <p class="comment">${datas.comment}</p>
                
                </div>
                </div>
                
                
            `;

            travelDetails.appendChild(div);
        });
    }
);