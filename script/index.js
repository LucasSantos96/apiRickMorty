const contentPerson = document.getElementById('contentPerson')

const frm = document.querySelector('form')

const idPerson =  document.getElementById('idPerson')

const namePerson =  document.getElementById('namePerson')

const statusPerson =  document.getElementById('status')

const species =  document.getElementById('species')

const gender =  document.getElementById( 'gender')

const earth =  document.getElementById( 'earth')

const locationPerson =  document.getElementById( 'location')



const img = document.getElementById('imgPerson')

//cria uma constante que armazena a api e seta o calor que será atribuido depois em (value)
const fetchApi = (value)=>{
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    //então pega o valor da api e guarda na variável (res) e converte em json
    .then((res)=> res.json())
    //pega o valor de res como json e salva na variavel data e retorna o valor de data para a constante result
    .then((data)=>{  
        console.log(data)
        return data
    })

    return result
}
//função assíncrona que adiciona o evento de submit do formulário que ao clicar no botão busca o personagem de acordo com o número de input
frm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    //armazena a função que pega a api e põe como parâmetro o número inserido no input
    const result = await fetchApi(frm.numPerson.value)

    //adiciona ao src da tag image o valor da imagem
    img.src = `${result.image}`
    
    //adiciona o valor da constante result na tag pre convertendo o json em uma string e formatando para melhor vizualização 
    idPerson.textContent = `${JSON.stringify(result.id, undefined, 2)}`

    //Exibe o nome do personagem
    namePerson.textContent = `${JSON.stringify(result.name, undefined, 2)}`
    
    //Exibe o status do personagem
    statusPerson.textContent = `${JSON.stringify(result.status, undefined, 2)}`

    //Exibe a especie do personagem
    species.textContent = `${JSON.stringify(result.species, undefined, 2)}`
    
     //Exibe o genero do personagem
    gender.textContent = `${JSON.stringify(result.gender, undefined, 2)}`

    //Exibe a Terra do personagem
    earth.textContent = `${JSON.stringify(result.origin.name, undefined, 2)}`
    
    //Exibe a localização do personagem
    locationPerson.textContent = `${JSON.stringify(result.location.name, undefined, 2)}`
    
    contentPerson.classList.add('contentPersonBlock')

    
    
    console.log(frm.numPerson.value)
})