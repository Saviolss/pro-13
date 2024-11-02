import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoCaixa = styled.div`
        display: flex;
    margin-right: 20px;
`

const LogoImagem = styled.div`
        width: 50px;
    margin: 10px;
`

const LogoNome = styled.h1`
        margin: 10px 10px 10px 0;
    display: flex;
    justify-items: center;
    align-items: center;
    font-size: 30px;
`
function Logo () {
    return (
        <LogoCaixa>
            <LogoImagem>
            <img  src={logo} alt='logo'/>
            </LogoImagem>
            <LogoNome><strong>Alura</strong>Books</LogoNome>
        </LogoCaixa>
    )
}

export default Logo