import './cadastro.css';

function Cadastro() {
    return (
        <div className='base-Cadastro'>
            
            {/* ========================= */}
            {/* LADO ESQUERDO - APRESENTAÇÃO */}
            {/* ========================= */}
            <div className='base-apresentacao-Cadastro'>
            
                <div className='base-escopo-apresentacao'>

                    {/* Logo do sistema */}
                    {/* ⚠️ FUTURO: substituir este texto por uma logo oficial do sistema (imagem ou SVG) */}
                    {/* Atualmente é apenas um placeholder temporário */}
                    <div className='logo-Cadastro'>
                        <h1>Passo seguro</h1>
                    </div>

                    {/* Título principal */}
                    <h1 className='apresentacao-principal'>
                        Sua segurança em&nbsp;
                        <span className='destaque-apresentacao'>
                            cada passo
                        </span>
                    </h1>

                    {/* Texto secundário */}
                    <p className='apresentacao-secundaria'>
                        A maior rede colaborativa de segurança feminina do Ceará. Mapeie rotas, denuncie perigos e proteja
                    </p>

                    {/* Grid com cards de funcionalidades */}
                    <div className='grid-apresentacao'>

                        {/* Card 1 */}
                        <div className='grid-modelos'>
                            <FaMap size={28} className='faIconGrid'/>
                            <h4 className='grid-modelos-titulo'>Mapeamento Real</h4>
                            <p className='grid-modelos-txt'>
                                Dados atualizados por quem vive a cidade.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='grid-modelos'>
                            <FaMapMarkerAlt size={28} className='faIconGrid'/>
                            <h4 className='grid-modelos-titulo'>Pontos de Apoio</h4>
                            <p className='grid-modelos-txt'>
                                Locais verificados para acolhimento imediato.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='grid-modelos'>
                            <FaStar size={28} className='faIconGrid'/>
                            <h4 className='grid-modelos-titulo'>Avaliações de Segurança</h4>
                            <p className='grid-modelos-txt'>
                                Avalie locais de 1 a 5 estrelas e consulte avaliações de outras usuárias.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='grid-modelos'>
                            <FaUsers size={28} className='faIconGrid'/>
                            <h4 className='grid-modelos-titulo'>Comunidade Ativa</h4>
                            <p className='grid-modelos-txt'>
                               Contribua com sua experiência e ajude outras usuárias.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* ========================= */}
            {/* LADO DIREITO - LOGIN */}
            {/* ========================= */}
            <div className='base-acesso-login'>
                <div>

                    {/* Cabeçalho do login */}
                    <div style={{marginBottom: '3rem'}}>
                        <h2 className='welcome-login'>Bem-vinda</h2>
                        <p className='welcome-login-txt'>
                            Entre para ver o que está acontecendo na sua rota
                        </p>
                    </div>

                    {/* Formulário */}
                    <form className='forms-login'>

                        {/* INPUT EMAIL */}
                        <div className='div-input'>
                            <label className='label-login'>Email</label>

                            {/* Container do input com ícone */}
                            <div className='div-login'>
                                <FaRegEnvelope size={20} className='faIconLogin'/>

                                {/* Campo de email */}
                                <input 
                                    type="email"
                                    required
                                    className='input-login'
                                    placeholder='Exemplo@gmail.com'
                                />
                            </div>
                        </div>

                        {/* ========================= */}
                        {/* INPUT SENHA */}
                        {/* ========================= */}
                        <div className='div-input'>
                            
                            <div className='div-senha-login'>

                                <label className='label-login'>Senha</label>

                                {/* ⚠️ FUTURO: botão de recuperação de senha */}
                                {/* Aqui será implementada a lógica de "esqueci minha senha" */}
                                <button type='button' className='botao-esqueceu-senha'>
                                    Esqueci minha senha
                                </button>
                            </div>

                            {/* Campo senha */}
                            <div className='div-login'>
                                <FaLock size={20} className='faIconLogin'/>

                                <input 
                                    type="password"
                                    required
                                    className='input-login'
                                    placeholder='••••••••'
                                />
                            </div>

                        </div>

                        {/* ⚠️ FUTURO: botão principal de login */}
                        {/* Aqui será implementada a autenticação com backend */}
                        <button type='submit' className='botao-entrar-login'>
                            Entrar <FaArrowRight size={16} className='faIconEntrar'/>
                        </button>

                    </form>

                    {/* ⚠️ FUTURO: cadastro de usuário */}
                    {/* Aqui será redirecionado para tela de criação de conta */}
                    <div className='cadastro-login'>
                        <p>Não tem uma conta?</p>
                        <a href="#">Criar conta</a>
                    </div>

                </div>
            </div>            

            
        </div>
    );
}

export default Cadastro;
