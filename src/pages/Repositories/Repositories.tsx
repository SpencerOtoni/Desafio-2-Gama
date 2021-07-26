import React, { useEffect, useState} from 'react'
import * as S from './styled'

export default function Repo() {
  const[repo, setRepo] = useState([])

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repo')
    setRepo(JSON.parse(repositoriesName!))
    localStorage.clear()
  },[])

  return(
    <S.Container>
      <S.Title>Repositorios</S.Title>
      { repo ? 
         <S.List>
         {
           repo.map((repositories) => {
             return (
               <S.ListItem>Repositório: {repositories}</S.ListItem>
             )
           })
         }
        
        </S.List>
       : <S.Title>Faça a busca novamente!</S.Title>
      }
      <S.LinkHome to='/'> Voltar</S.LinkHome>
    </S.Container>
  )
}