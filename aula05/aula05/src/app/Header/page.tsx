import link from "next/link";

const Header = () =>{
    return(
        <>
            <header>
              <h1>Cabeçalho</h1>
              <nav>
                   <ul>
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/Produtos">Produtos</a>
                        </li>
                        <li>
                        <a href="/Contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;