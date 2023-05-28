import { VoltarSair } from '../components/VoltarSair'
import { FormularioCadastroLogin } from '../components/FormularioCadastroLogin'

export function Login() {
    return (
        <>
            <VoltarSair tipo={"voltar"} />
            <h1>Login</h1>
            <FormularioCadastroLogin texto={"Login"} />
        </>
   )
}