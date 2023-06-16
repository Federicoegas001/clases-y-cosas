const posts = [
    {
        nombre: "lucas",
        username:"@LucasOK",
        timestamp:"10 minutes ago",
        likes: 65,
        comments:3,
        userimgage:"https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30",
        content: "me gusta mirar game of thrones",

    },
    {
            nombre: "Dardo",
            username:"@LucasOK",
            timestamp:"10 minutes ago",
            likes: 65,
            comments:3,
            userimgage:"https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30",
            content: "no creo que la scaloneta se frene ahora",
    
    },
    {
        nombre: "Marita",
        username:"@MaritaOK",
        timestamp:"10 minutes ago",
        likes: 65,
        comments:3,
        userimgage:"https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30",
        content: "los dias de lluvia se debe comer torta frita",

    }
]


const postsContainerHTML = document.querySelector(`.posts`)

posts.forEach((post) =>{
   postsHTML .innerHTML += `
    <div>
    <img src="${post.userimage}" width="50px">
    <div>
        <span>${post.name}</span>
        <span>${post.username}</span>

    </div>
    <span>${post.timespamp}</span>
    <p>${post.content}</p>
    <div>
        <span>${post.likes}</span>
        <span>${post.retweets} retweets</span>
        <span>${post.comments}</span>
    </div>
    `
})