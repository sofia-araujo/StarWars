document.addEventListener("DOMContentLoaded", ()=>{
    const urlParam = new URLSearchParams(window.location.search)
    console.log(urlParam)
    const itemIndex = urlParam.get("index")
    console.log(itemIndex)

    const url = `https://swapi.dev/api/people/${parseInt(itemIndex)+1}/`
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Erro ao receber os dados")
        }
        return response.json()
    })
    .then((data) => {
        caracteristicaPersonagem(data)
        console.log(data)
    })
    .catch((err) => console.log(err))
    function caracteristicaPersonagem(dados){
        const div = document.querySelector(".personagem-dado")
        const name = document.querySelector(".name")
        const altura = document.querySelector(".altura")
        const peso = document.querySelector(".peso")
        const genero = document.querySelector(".genero")
        const corCabelo = document.querySelector(".cor_cabelo")
        const corOlho = document.querySelector(".cor_olho")
        const corPele = document.querySelector(".cor_pele")
        const dataNasci = document.querySelector(".data_nascimento")
        altura.innerHTML += dados.height
        peso.innerHTML += dados.mass
        genero.innerHTML += dados.gender
        corCabelo.innerHTML += dados.hair_color
        corOlho.innerHTML += dados.eye_color
        corPele.innerHTML += dados.skin_color
        dataNasci.innerHTML += dados.birth_year
        name.innerHTML += dados.name
        div.innerHTML += `<img src="../img/perso${itemIndex}.png">`
    }
})
