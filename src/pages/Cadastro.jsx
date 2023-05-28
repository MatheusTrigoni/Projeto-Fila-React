import { VoltarSair } from '../components/VoltarSair'
import { FormularioCadastroLogin } from '../components/FormularioCadastroLogin'

export function Cadastro() {
    return (
        <>
            <VoltarSair tipo={"voltar"} />
            <h1>Cadastro</h1>
            <FormularioCadastroLogin texto={"Cadastro"} />
        </>
   )
}