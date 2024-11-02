import styled from "styled-components"
import { Link } from "react-router-dom"

const btnOpcoes = [
    'CATEGORIA', 
    'FAVORITOS', 
    'ESTANTE']

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
    justify-items: center;
    min-width: 125px;
    padding: 10px 10px;
`
const Opcao = styled.li`
    font-weight: 400;
    font-size: 20px;
    margin-right: 20px;
    cursor: pointer;
    color: #302d66;
`
function OpcoesHeader () {
    return (
    <Opcoes>
        { btnOpcoes.map( (btn) => ( 
            <Link style={{textDecoration:'none'}} to={`/${btn.toLowerCase()}`}><Opcao><p className="opcao" >{btn}</p></Opcao></Link>
        ))}
    </Opcoes>
    )
}

export default OpcoesHeader