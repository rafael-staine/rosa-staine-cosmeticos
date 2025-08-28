import estilos from "./Contato.module.css";

export default function Contato() {
    return (
        <section className={estilos.contato}>
            <div className={estilos.center}>
                <h2>Fale Conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através das nossas redes sociais ou da central de atendimento.
                </p>

                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="localização" />
                                </picture>
                                Caraguatatuba - SP
                            </li>

                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="telefone" />
                                </picture>
                                (12) 98133-4324
                            </li>

                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="email" />
                                </picture>
                                stainecosmeticos@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="Instagram" />
                                </picture>
                                @staine_cosmeticos
                            </li>

                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="Facebook" />
                                </picture>
                                @staine_cosmeticos
                            </li>

                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="Tik Tok" />
                                </picture>
                                @staine_cosmeticos
                            </li>

                            <li>
                                <picture>
                                    <img src="./facebook.png" alt="X" />
                                </picture>
                                @staine_cosmeticos
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
