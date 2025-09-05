const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformacaoGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);

    const pessoasConectadas = (dados.total_pessoas_mundo / 1e9)
    const totalPessoas = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Marth.round(('dados.tempo_medio-horas')*100)

    const paragrafo = document. createElement ('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `Você sabia que Bruce Wayne criou o Batman para causar medo no submundo de Gotham e para defender os inocentes . O uniforme e a maneira como envelhece quando o usa tem o objetivo de intimidar seus adversários. Enquanto Bruce Wayne é despreocupado e irresponsável, Batman é frio, determinado e implacável.
  <span>  ${pessoasConectadas} </span> fãs do batman estão conectados em alguma rede social e, em média
  <span>  ${totalPessoas} </span> de vilões também estão presentes nessas redes, passando cerca de 
  <span>  ${horas} </span> : <span>${minutos} </span> horas conectados`



    const container = document.getElementById("graficos-container")
    container.appendChild(paragrafo)
}

vizualizarInformacaoGlobais();