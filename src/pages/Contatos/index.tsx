import { Form } from "../../components/Form"
import { ContatosStyle } from "./style"

export const Contatos = () => {
  return (
    <>
      <ContatosStyle>
      <header>
            <h1>Bem-Vindo a 1Pitchau</h1>
            <p>1PitchAU é a plataforma definitiva para conectar empreendedores e investidores.
              Simplificamos o processo de busca e apresentação de projetos de maneira eficiente e direta.
              Com nossa abordagem focada e interface intuitiva, facilitamos o encontro entre grandes ideias.</p>
        </header>

        <div className="form">
          <Form />
        </div>
      </ContatosStyle>
    </>
  )
}