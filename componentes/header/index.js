import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 80px;
    background-color: #fff;
`
function Header () {
    return (        
            <AppHeader>
                <Link style={{textDecoration: 'none'}} to="/"><Logo/></Link>
                <OpcoesHeader/>
                <IconesHeader/>
        </AppHeader>
        
    )
}

export default Header