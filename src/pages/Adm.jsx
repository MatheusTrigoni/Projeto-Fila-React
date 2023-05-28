import { VoltarSair } from '../components/VoltarSair'
import { FormularioAdm } from '../components/FormularioAdm'

export function Adm() {
    return (
        <>
            <VoltarSair tipo={"sair"} />
            <h1>Administração</h1>
            <FormularioAdm />
        </>
    )
}