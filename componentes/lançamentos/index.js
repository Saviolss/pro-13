import styled from "styled-components"
import { Titulo } from "../titulo"
import Card from "../card"
import { livros } from "../pesquisa/dadosPesquisa"
import imgCard from "../../imagens/livro2.png"

const LançamentosCaixa = styled.div`
    text-align: center;
    justify-content: center;
    display: block;
    background-color: #e7e3e3;

`
const LivrosLançamentos = styled.div`
    margin: auto;
    display: flex;
    align-itens: center;
    justify-content: center;
    cursor: pointer;
`
function Lançamentos () {
    return(
        <LançamentosCaixa>
        <Titulo color={"#fcf40b"} size={"36px"} >Últimos Lançamentos</Titulo>
        <LivrosLançamentos>
        { livros.map(livro => (<img alt="novo livro" src={livro.src}/>))}
        </LivrosLançamentos>
    
                <Card
                titulo="Talves você se interece por..."
                    subtitulo="Angular 11"
                    descricao="Faça sua aplicação na plataforma Google."
                    imagem={imgCard}
                />
        </LançamentosCaixa>
        
    )
}
export default Lançamentos