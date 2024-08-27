import { Dados } from "../components/Dados"

const Aluno=()=>{
    //criando a desestruturação
    const {nome,email,idade}=Dados

    return(
        <>
        <h1>Página Aluno</h1>
        <h5>Nome do Aluno: {nome}</h5>
        <h5>Email do Aluno: {email} </h5>
        <h5>Idade do Aluno: {idade}</h5>
        </>
    )
}

export default Aluno