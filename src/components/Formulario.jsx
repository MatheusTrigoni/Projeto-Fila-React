import '../styles/Formulario.css'

// Um formulário presente em ambas as telas de Login e Cadastro
export function Formulario(texto) {
    return (
        <section className="formulario">
            <form action="">
                <div className="label-email-senha">
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input type="text" id="email" placeholder="Digite aqui..." />
                </div>

                <div className="label-email-senha">
                    <label htmlFor="senha">Senha</label>
                </div>
                <div>
                    <input type="text" id="email" placeholder="Digite aqui..." />
                </div>
            </form>
            <button type="submit">Cadastrar-se</button>
        </section>
    )
}