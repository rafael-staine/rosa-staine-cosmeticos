import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>

                <div className={estilos.titulos}>
                    <h2>Nossos Produtos</h2>

                    <p>
                        Aqui você encontra uma seleção dos nossos melhores produtos, feitos com ingredientes naturais e de alta qualidade. Navegue por nossas categorias e descubra o que temos a oferecer para realçar sua beleza e bem-estar.
                    </p>

                    <p>
                        Cada produto é cuidadosamente elaborado para atender às suas necessidades específicas, seja para cuidados com a pele, cabelo ou corpo. Explore nossa linha completa e encontre o produto perfeito para você.
                    </p>
                </div>

                <div className={estilos.perfume_img}>
                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}>Mais Vendidos</span>
                        <h3>Idôle 50ml</h3>
                        <picture>
                            <img src="./img-perfume.png" alt="Idole"></img>
                        </picture>
                        <p className={estilos.preco}>R$ 434,90</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Idôle 50ml</h3>
                        <picture>
                            <img src="./img-perfume.png" alt="Idole"></img>
                        </picture>
                        <p className={estilos.preco}>R$ 434,90</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}>Promoção</span>
                        <h3>Idôle 50ml</h3>
                        <picture>
                            <img src="./img-perfume.png" alt="Idole"></img>
                        </picture>
                        <p className={estilos.preco}>R$ 434,90</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}>Promoção</span>
                        <h3>Idôle 50ml</h3>
                        <picture>
                            <img src="./img-perfume.png" alt="Idole"></img>
                        </picture>
                        <p className={estilos.preco}>R$ 434,90</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                </div>
            </div>
        </section>
    )
}



