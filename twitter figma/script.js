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


const usercomnentsHTML = document.querySelector(".user-comentarios")

recomendedUsers.forEach((user) =>{
    usercomnentsHTML.innerHTML += `
        <div class="user-name_username">
            <img src="${user.image.id}" alt="">
            <div>
                <h2>Federico</h2>
                <span>10 minutes ago</span>
            </div>
            <div>
                 <h3>@laksho</h3>
            </div>
        </div>
        `
})


