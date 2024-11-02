import styled from 'styled-components'
import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'

const opcoesIcones = [
    Perfil,
    Sacola ]

const Icones = styled.ul`
    display: flex;
`
const Icone = styled.li`
    margin: 10px;
    width: 30px;
    cursor: pointer;
`
function IconesHeader () {
    return (

        <Icones>
        { opcoesIcones.map((icone) => ( 
            <Icone>
                <img alt='icones' src={icone}></img>
            </Icone> 
        
        ))}
        </Icones>

    )
}

export default IconesHeader