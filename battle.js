async function GetCharacters(){

    const minRick = 1, maxRick = 827
    const randomNumberRick = Math.floor(Math.random() * (maxRick - minRick) + minRick)
    const imageElementRick = document.getElementById("charOneImage")
    const nameElementRick = document.getElementById("charOneName")

    const minSimpsons = 1, maxSimpsons = 1183
    const randomNumberSimpsons = Math.floor(Math.random() * (maxSimpsons - minSimpsons) + minSimpsons)
    const imageElementSimpsons = document.getElementById("charTwoImage")
    const nameElementSimpsons = document.getElementById("charTwoName")

    imageElementRick.src = './img/loading.gif'
    imageElementSimpsons.src = './img/loading.gif'

    const responseOne = await fetch(`https://rickandmortyapi.com/api/character/${randomNumberRick}`)
    const responseTwo = await fetch(`https://thesimpsonsapi.com/api/characters/${randomNumberSimpsons}`)

    if (responseOne.status === 200 && responseTwo.status === 200){

        const charObjectOne = await responseOne.json()
        imageElementRick.src = charObjectOne.image
        nameElementRick.innerHTML = charObjectOne.name

        const charObjectTwo = await responseTwo.json()
        imageElementSimpsons.src = `https://cdn.thesimpsonsapi.com/500/character/${randomNumberSimpsons}.webp`
        nameElementSimpsons.innerHTML = charObjectTwo.name
       
    }

}