// Importa o CSS do componente
import './login.css';
import '../../styles/auth.css';

// Importa os ícones do react-icons (Font Awesome)
import { FaMapMarkerAlt, FaMap, FaLock, FaPeopleArrows, FaUsers, FaRegEnvelope, FaStar, FaArrowRight } from "react-icons/fa";

function Login() {
    return(

        // Container principal da tela de login (divide apresentação + formulário)
        <div className='base-auth'>

            {/* ========================= */}
            {/* LADO ESQUERDO - APRESENTAÇÃO */}
            {/* ========================= */}
            <div className='base-apresentacao-auth'>
            
                <div className='base-escopo-apresentacao-auth'>

                    {/* Logo do sistema */}
                    {/* ⚠️ FUTURO: substituir este texto por uma logo oficial do sistema (imagem ou SVG) */}
                    {/* Atualmente é apenas um placeholder temporário */}
                    <div className='logo-auth'>
                        <h1>Passo seguro</h1>
                    </div>

                    {/* Título principal */}
                    <h1 className='apresentacao-principal-auth'>
                        Sua segurança em&nbsp;
                        <span className='destaque-apresentacao-auth'>
                            cada passo
                        </span>
                    </h1>

                    {/* Texto secundário */}
                    <p className='apresentacao-secundaria'>
                        A maior rede colaborativa de segurança feminina do Ceará. Mapeie rotas, denuncie perigos e proteja
                    </p>

                    {/* Grid com cards de funcionalidades */}
                    <div className='grid-apresentacao-login'>

                        {/* Card 1 */}
                        <div className='grid-modelos-login'>
                            <FaMap size={28} className='faIconGrid-login'/>
                            <h4 className='grid-modelos-titulo-login'>Mapeamento Real</h4>
                            <p className='grid-modelos-txt-login'>
                                Dados atualizados por quem vive a cidade.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='grid-modelos-login'>
                            <FaMapMarkerAlt size={28} className='faIconGrid-login'/>
                            <h4 className='grid-modelos-titulo-login'>Pontos de Apoio</h4>
                            <p className='grid-modelos-txt-login'>
                                Locais verificados para acolhimento imediato.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='grid-modelos-login'>
                            <FaStar size={28} className='faIconGrid-login'/>
                            <h4 className='grid-modelos-titulo-login'>Avaliações de Segurança</h4>
                            <p className='grid-modelos-txt-login'>
                                Avalie locais de 1 a 5 estrelas e consulte avaliações de outras usuárias.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='grid-modelos-login'>
                            <FaUsers size={28} className='faIconGrid-login'/>
                            <h4 className='grid-modelos-titulo-login'>Comunidade Ativa</h4>
                            <p className='grid-modelos-txt-login'>
                               Contribua com sua experiência e ajude outras usuárias.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* ========================= */}
            {/* LADO DIREITO - LOGIN */}
            {/* ========================= */}
            <div className='base-acesso-auth'>
                <div>

                    {/* Cabeçalho do login */}
                    <div style={{marginBottom: '3rem'}}>
                        <h2 className='welcome-login'>Bem-vinda</h2>
                        <p className='welcome-login-txt'>
                            Entre para ver o que está acontecendo na sua rota
                        </p>
                    </div>

                    {/* Formulário */}
                    <form className='forms-auth'>

                        {/* INPUT EMAIL */}
                        <div className='div-forms-auth'>
                            <label className='label-forms-auth'>Email</label>

                            {/* Container do input com ícone */}
                            <div className='div-input-auth'>
                                <FaRegEnvelope size={20} className='faIconLogin-auth'/>

                                {/* Campo de email */}
                                <input 
                                    type="email"
                                    required
                                    className='input-login-auth'
                                    placeholder='Exemplo@gmail.com'
                                />
                            </div>
                        </div>

                        {/* ========================= */}
                        {/* INPUT SENHA */}
                        {/* ========================= */}
                        <div className='div-forms-auth'>
                            
                            <div className='div-senha-login'>

                                <label className='label-forms-auth'>Senha</label>

                                {/* ⚠️ FUTURO: botão de recuperação de senha */}
                                {/* Aqui será implementada a lógica de "esqueci minha senha" */}
                                <button type='button' className='botao-esqueceu-senha'>
                                    Esqueci minha senha
                                </button>
                            </div>

                            {/* Campo senha */}
                            <div className='div-input-auth'>
                                <FaLock size={20} className='faIconLogin-auth'/>

                                <input 
                                    type="password"
                                    required
                                    className='input-login-auth'
                                    placeholder='••••••••'
                                />
                            </div>

                        </div>

                        {/* ⚠️ FUTURO: botão principal de login */}
                        {/* Aqui será implementada a autenticação com backend */}
                        <button type='submit' className='botao-confirm-auth'>
                            Entrar <FaArrowRight size={16} className='faIconConfirm'/>
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

// Exporta o componente
export default Login;
