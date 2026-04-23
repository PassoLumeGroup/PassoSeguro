import './login.css';

function Login() {
    return(
        
        <div className='base-login'>

            {/* Lado esquerdo APRESENTAÇÃO */}
            <div className='base-apresentacao-login'>
            
                <div className='base-escopo-apresentacao'>
                    {/* Logo */}
                    <div className='logo-login'>
                        <h1>Passo seguro</h1>{/* Ignorar por enquanto, logo a caminho */}
                    </div>

                    {/* Apresentação */}

                    <h2 className='apresentacao-principal'>
                        Sua segurança em {}
                        <span className='destaque-apresentacao'>
                            cada passo
                        </span>
                    </h2>

                    <p className='apresentacao-secundaria'>
                        A maior rede colaborativa de segurança feminina do Ceará. Mapeie rotas, denuncie perigos e proteja
                    </p>

                    <div className='grid-apresentacao'>
                        <div className='grid-modelos'>
                            {/* tem que colocar um icone */}

                            <h4 className='grid-modelos-titulo'>Mapeamente Real</h4>

                            <p className='grid-modelos-txt'>
                                Dados atualizados por quem vive a cidade.
                            </p>
                        </div>

                        <div className='grid-modelos'>
                            {/* tem que colocar um icone */}

                            <h4 className='grid-modelos-titulo'>Pontos de Apoio</h4>

                            <p className='grid-modelos-txt'>
                                Locais verificados para acolhimento imediato.
                            </p>
                        </div>

                        <div className='grid-modelos'>
                            {/* tem que colocar um icone */}

                            <h4 className='grid-modelos-titulo'>Avaliações de Segurança</h4>

                            <p className='grid-modelos-txt'>
                                Avalie locais de 1 a 5 estrelas e consulte avaliações de outras usuárias.
                            </p>
                        </div>

                        <div className='grid-modelos'>
                            {/* tem que colocar um icone */}

                            <h4 className='grid-modelos-titulo'>Comunidade Ativa</h4>

                            <p className='grid-modelos-txt'>
                               Contribua com sua experiência e ajude outras usuárias.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className='base-acesso-login'>
                <div>
                     <div style={{marginBottom: '3rem'}}>
                        <h3 className='welcome-login'>Bem-Vindo</h3>
                        <p className='welcome-login-txt'> Entre para ver o que está acontecendo na sua rota</p>
                    </div>

                    <form className='forms-login'>
                        <div className='div-input'>
                            <label className='label-login'>Email</label>
                            <div className='div-login'>
                                {/* colocar uma imagem */}
                                <input 
                                    type="email"
                                    required
                                    className='input-login'
                                    placeholder='Exemplo@gmail.com'
                                />
                            </div>
                        </div>

                        <div className='forms-login'>

                            <div className='div-senha-login'>
                                <label className='label-login'>Senha</label>
                                <button type='button' className='botao-esqueceu-senha'>
                                    Esqueci minha senha
                                </button>
                            </div>
                            <div className='div-login'>
                                {/* colocar uma imagem */}
                                <input 
                                    type="password"
                                    required
                                    className='input-login'
                                    placeholder='••••••••'
                                />
                            </div>
                        </div>

                        <button type='submit' className='botao-entrar-login'>
                            Entrar
                            {/* colocar uma imagem */}
                        </button>
                    </form>

                    <div className='cadastro-login'>
                        <p>
                            Não tem uma conta?
                        </p>

                        <a href="pagina de cadastro" >Criar conta</a>
                    </div>
                </div>
            </div>
                
        </div>

    );

}

export default Login;