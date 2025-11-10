import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id="produto" className={estilos.section}>
            <div className={estilos.produtos}>
                <div className={estilos.titulos}>
                    <h2>Nossos Produtos</h2>
                    <p>
                        Aqui você encontra uma seleção dos nossos melhores produtos, feitos com ingredientes naturais e de alta qualidade. 
                        Navegue por nossas categorias e descubra o que temos a oferecer para realçar sua beleza e bem-estar.
                    </p>
                    <p>
                        Cada produto é cuidadosamente elaborado para atender às suas necessidades específicas, seja para cuidados com a pele, 
                        cabelo ou corpo. Explore nossa linha completa e encontre o produto perfeito para você.
                    </p>
                </div>

                <div className={estilos.perfume_img}>
                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}>Mais Vendido</span>
                        <h3>Ilía Secreto</h3>
                        <picture>
                            <img src="./img-perfume-natura.png" alt="Ilía Secreto" />
                        </picture>
                        <p className={estilos.preco}>R$ 194,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Una Artisan</h3>
                        <picture>
                            <img src="./perfume-una.png" alt="Una Artisan" />
                        </picture>
                        <p className={estilos.preco}>R$ 224,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <h3>Kaiak Aventura Intensa</h3>
                        <picture>
                            <img src="./perfume-kaiak.png" alt="Kaiak Aventura Intensa" />
                        </picture>
                        <p className={estilos.preco}>R$ 129,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <h3>Essencial Oud</h3>
                        <picture>
                            <img src="./perfume-essencial.png" alt="Essencial Oud" />
                        </picture>
                        <p className={estilos.preco}>R$ 167,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
