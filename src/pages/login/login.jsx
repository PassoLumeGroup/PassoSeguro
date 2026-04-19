import './login.css';

function Login() {
    return(
        /* className é o substituto do 'class' do HTML no React */
        <div className='container'>
            {/* Seção da esquerda: Banner */}
            <aside className='banner'> {/* O 'aside' é usado para conteúdo lateral, como o seu banner */}
                <div className='logoArea'>
                    <span className='icon'>♀</span>
                    <span className='brandName'>Passo Seguro</span>
                </div>

                <div className='heroText'>
                    <h1>Caminhe com <span className='pink'>liberdade</span> por fortaleza</h1>
                    <p>A maior rede colaborativa de segurança feminina do Ceará. Mapeie rotas, denuncie perigos e proteja suas irmãs.</p>
                </div>

                <div className='cards'>
                    {/* Cards informativos que ficam dentro do banner verde */}
                    <div className='card'>
                        <strong>Mapeamento Real</strong>
                        <p>Dados atualizados por quem vive a cidade</p>
                    </div>

                    <div className='card'>
                        <strong>Pontos de Apoio</strong>
                        <p>Locais verificados para acolhimento imediato</p>
                    </div>
                </div>
            </aside>

            {/* Main: Lado direito (área branca do formulário) */}
            <main className='loginArea'>
                <div className='loginBox'>
                    <h2>Bem-Vinda</h2>
                    <p>Entre para ver o que está acontecendo na sua rota</p>

                    {/* O formulário chama a função lidarComLogin quando o botão é clicado */}
                    <form>
                        {/* inputGroup: Organiza o label em cima do campo de texto */} 
                        <div className='labelRow'>
                            <label htmlFor="Email">Email </label>
                            <input type="email" placeholder='exemplo@gmail.com' required />
                        </div>    
                        
                        <div className='inputGroup'>
                            <label htmlFor="Senha">Senha </label>
                            <input type="password" placeholder='********' required />
                            <div className='labelRow'>
                                <a href="#" className='link'>   Esqueceu a senha?</a>
                            </div>
                        </div> 

                        <button type='submit' className='btnEntrar'> Entrar</button>               
                    </form>

                    <div className='footerLogin'>
                        <p>Ainda não faz parte? <a href="#" className='link'>Cadastre-se</a></p>
                    </div>
                </div>
            </main>

        </div>
    );

}

export default Login;