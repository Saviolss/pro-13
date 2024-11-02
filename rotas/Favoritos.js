import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos, deletarFavorito } from '../serviços/favoritos';

const AppCaixa = styled.div`
    font-family: "Poppins", sans-serif;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const Resultado = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 400px;
  margin: 20px auto;
    p {
        font-size: 20px;
        color: white;
    }

    img {
        width: 100px;
        margin: 16px;
    }

    &:hover {
        border: 1px solid white;
    }
`
const FavoritoTitulo = styled.h2`
  color: white; 
  font-size: 32px;
  aling-itens: center;
  display: flex;
  justify-content: center;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])
  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  }

  async function deletarLivro(id) {
    await deletarFavorito(id)
    
    alert(`Livro ${id} deletado dos favoritos`)
}
  useEffect(() => {
    fetchFavoritos()
  }, [])
  return (
    <AppCaixa>
        <FavoritoTitulo>Todos favoritos:</FavoritoTitulo>

      {favoritos.map(favorito => (
        <Resultado onClick={() => deletarLivro(favorito.id)}>
          <img alt="livro" src={favorito.imagem}/>
          <p>{favorito.nome}</p>
        </Resultado>
      ))}
    </AppCaixa>
  );
}

export default Favoritos;
