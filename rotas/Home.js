import styled from 'styled-components'
import Lançamentos from '../componentes/lançamentos'
import Pesquisa from '../componentes/pesquisa';

const AppCaixa = styled.div`
    font-family: "Poppins", sans-serif;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
function Home() {
  return (
    <AppCaixa>
      <Pesquisa/>
      <Lançamentos/>
    </AppCaixa>
  );
}

export default Home;
