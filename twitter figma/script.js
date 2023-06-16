const recomendedUsers = [
    {
        nombre: 'Lucas',
        username: '@LucasOk',
        image: 'https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30',
        id: 1
    },
    {
        nombre: 'Maria',
        username: '@MariaOk',
        image: 'https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30',
        id: 2
    },
    {
        nombre: 'Pepe',
        username: '@PepeGrilloOk',
        image: 'https://lh3.googleusercontent.com/LxD7qhuSHIr45NYir7jj_68wEkkrCtaYzCrSHGgPT9mm0pWmXHoB0iLq42CsV4U9jPT7FdwSPPTPOvs1W8yV0Jzp0HccqF6gegtAvX2U-3iA_krgtPfB=w500-rp-e30',
        id:3
    },
]

const twitts = [
    {
        twittsuser1: "ElonMusk",
        twittslike1:"83.6 k Tweets",
        twittsuser2: "Startups",
        twittslikes2:"12 k Tweets",
        twittsuser3: "dogecoin",
        twittslikes3:"45.1 k Tweets",
        twittsuser4: "MUFC",
        twittslikes4:"35.9 k Tweets",
        twittsuser5: "Rangnick",
        twittslikes5:"27.7 k Tweets",
    }
]

const user = [{
    nombre: "Dardo",
    username:"DardoOK",
    timestamp:"20 minutes ago",
    ReTweets: "10",
    likes: 59,
    comments:20,
    userimgage:"https://lh3.googleusercontent.com/LxD7qhuSHIr45NYir7jj_68wEkkrCtaYzCrSHGgPT9mm0pWmXHoB0iLq42CsV4U9jPT7FdwSPPTPOvs1W8yV0Jzp0HccqF6gegtAvX2U-3iA_krgtPfB=w500-rp-e30",
    content: "no creo que la scaloneta se frene ahora",
}]

const recomendedListHTML = document.querySelector('.recomendedPeopleList')

recomendedUsers.forEach((user) =>{
    recomendedListHTML.innerHTML += `
    <div class = "usercardcontainer">
        <div class="recomendedUserCard">
            <div class="userRecomendedImage">
                <img src=${user.image} alt="user image">
            </div>
            <div class="userRecomendedInfo">
                <span>${user.username}</span>
            </div>
        </div>
        <div class = "btn-userfollower">
            <button class="btn-follow">Seguir</button>
        </div>
    </div>
    `
})


const tweetsHTML = document.querySelector(".Tweets")

twitts.forEach((nose) =>{
    tweetsHTML.innerHTML += `
    <div class="twittscontainers">
                    <div class="twittscontainerstittle">
                        <h2>${nose.titulo}</h2>
                        <img src="./img/config.png" alt="...">
                    </div>
                    <h4>TRENDING IN UNITED STATES</h4>
                    <div class="usertwitts">
                        <div class="usertwittsnumber">
                            <h2>#${nose.twittsuser1}</h2>
                            <span>${nose.twittslike1}</span>
                        </div>
                        <img src="./img/3puntitos.png" alt="...">
                    </div>
                    <div class="usertwitts">
                        <div class="usertwittsnumber">
                            <h2>#${nose.twittsuser2}</h2>
                            <span>${nose.twittslikes2}</span>
                        </div>
                        <img src="./img/3puntitos.png" alt="...">
                    </div>
                        <h4>NFT. TRENDINGS</h4>
                    <div class="usertwitts">
                        <div class="usertwittsnumber">
                            <h2>#${nose.twittsuser3}</h2>
                            <span>${nose.twittslikes3}</span>
                        </div>
                        <img src="./img/3puntitos.png" alt="...">
                    </div>
                    <h4>FOOTBALL.TRENDING</h4>
                    <div class="usertwitts">
                        <div class="usertwittsnumber">
                            <h2>#${nose.twittsuser4}</h2>
                            <span>${nose.twittslikes4}</span>
                        </div>
                        <img src="./img/3puntitos.png" alt="...">
                    </div>
                    <div class="usertwitts">
                        <div class="usertwittsnumber">
                            <h2>#${nose.twittsuser5}</h2>
                            <span>${nose.twittslikes5}</span>
                        </div>
                        <img src="./img/3puntitos.png" alt="...">
                    </div>
                    <a href="#"><h3>Show Profile</h3></a>
                </div>`
})




const usercomnentsHTML = document.querySelector(".user-comentarios")

user.forEach((algo) =>{
    usercomnentsHTML.innerHTML += `
    <div class = "CONTAINER">
        <div class="user-name_username">
            <div class = "nombre_username">
                <img src="${algo.userimgage}" alt="">
                <h2>${algo.nombre}</h2>
                <span>${algo.timestamp}</span>
            </div>
            <div>
                 <h3>@${algo.username}</h3>
            </div>
        </div>
        <div>
            <p>${algo.content}</p>
        </div>
        <div>
            <div>
                <div><img src="./img/corazon.png" alt=""></div>
                <div><img src="./img/bucle.png" alt=""></div>
                <div><img src="./img/pensamiento.png" alt=""></div>
            </div>
            <div>
                 <h4>${algo.likes} Likes| ${algo.ReTweets} Retweets | ${algo.comments} Comments</h4>
             </div>
        </div>
    </div>
        `
})

