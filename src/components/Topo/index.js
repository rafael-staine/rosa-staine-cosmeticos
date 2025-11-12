import estilos from './Topo.module.css'

export default function Topo() {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                    <a href=""><img src="./logo-sem-fundo.png"/></a>
                </picture>

                <nav>
                    <a href="#produto">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contatos</a>
                </nav>
            </div>
        </header>
    );
}   