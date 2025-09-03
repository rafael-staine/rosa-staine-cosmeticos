import estilos from './Contato.module.css';

export default function Contato() {
    return (
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2>Fale Conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre
                    em contato através das nossas redes sociais ou da central de
                    atendimento.
                </p>

                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./local.png" alt="localização" />
                                </picture>
                                Caraguatatuba - SP
                            </li>

                            <li>
                                <picture>
                                    <img src="./telefone.png" alt="telefone" />
                                </picture>
                                (12) 89133-4324
                            </li>

                            <li>
                                <picture>
                                    <img src="./email.png" />
                                </picture>
                                stainecosmeticos@email.com
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4>Redes sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./face.png" />
                                </picture>
                                /staine_cosmeticos
                            </li>

                            <li>
                                <picture>
                                    <img src="./insta.png" alt="telefone" />
                                </picture>
                                @staine_cosmeticos
                            </li>

                            <li>
                                <picture>
                                    <img src="./twitter.png" />
                                </picture>
                                @staine_cosmeticos
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
