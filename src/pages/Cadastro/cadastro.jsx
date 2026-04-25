// =========================
// IMPORTAÇÕES
// =========================

import './Cadastro.css';
import '../../styles/auth.css';

import { 
    FaCreativeCommonsNc, 
    FaUserLock, 
    FaLock, 
    FaRegEnvelope, 
    FaArrowRight, 
    FaPhoneAlt, 
    FaRegUser, 
    FaRegIdCard 
} from "react-icons/fa";


// =========================
// COMPONENTE
// =========================
function Cadastro() {
    return(

        <div className='base-auth'>

            {/* ========================= */}
            {/* LADO ESQUERDO - APRESENTAÇÃO */}
            {/* ========================= */}
            <div className='base-apresentacao-auth'>
            
                <div className='base-escopo-apresentacao-auth'>

                    {/* ⚠️ FUTURO: substituir por logo oficial (SVG ou imagem) */}
                    <div className='logo-auth'>
                        <h1>Passo Seguro</h1>
                    </div>

                    <h1 className='apresentacao-principal-auth'>
                        Junte-se à nossa rede de&nbsp;
                        <span className='destaque-apresentacao-auth'>
                            proteção
                        </span>
                    </h1>

                    {/* Cards de benefícios */}
                    <div className='grid-apresentacao-registro'>

                        <div className='grid-modelos-registro'>
                            <div className='icon-grid-registro'>
                                <FaUserLock size={28} className='faIconGrid-registro'/>
                            </div>

                            <div>   
                                <h4 className='grid-modelos-titulo-registro'>
                                    Segurança em Primeiro Lugar
                                </h4>

                                <p className='grid-modelos-txt-registro'>
                                    Seus dados são protegidos com segurança e boas práticas.
                                </p>
                            </div>
                        </div>

                        <div className='grid-modelos-registro'>
                            <div className='icon-grid-registro'>
                                <FaCreativeCommonsNc size={28} className='faIconGrid-registro'/>
                            </div>

                            <div>
                                <h4 className='grid-modelos-titulo-registro'>
                                    Cadastro 100% Gratuito
                                </h4>

                                <p className='grid-modelos-txt-registro'>
                                    Participe da rede sem nenhum custo.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            

            {/* ========================= */}
            {/* LADO DIREITO - FORMULÁRIO */}
            {/* ========================= */}
            <div className='base-acesso-auth'>
                <div>

                    {/* Cabeçalho */}
                    {/* ⚠️ FUTURO: integrar com backend para criação real de conta */}
                    <div style={{marginBottom: '3rem'}}>
                        <h2 className='welcome-auth'>Criar Conta</h2>

                        <p className='welcome-auth-txt'>
                            Preencha seus dados para começar.
                        </p>
                    </div>


                    {/* ========================= */}
                    {/* FORMULÁRIO */}
                    {/* ========================= */}
                    {/* ⚠️ FUTURO: validar campos (email, senha, telefone) */}
                    {/* ⚠️ FUTURO: enviar dados para API */}
                    <form className='forms-auth'>

                        {/* NOME */}
                        <div className='div-forms-auth'>
                            <label className='label-forms-auth'>Nome Completo</label>

                            <div className='div-input-auth'>
                                <FaRegUser size={20} className='faIcon-auth'/>

                                <input 
                                    type="text"
                                    required
                                    className='input-auth'
                                    placeholder='Seu nome completo'
                                />
                            </div>
                        </div>


                        {/* EMAIL */}
                        <div className='div-forms-auth'>
                            <label className='label-forms-auth'>Email</label>

                            <div className='div-input-auth'>
                                <FaRegEnvelope size={20} className='faIcon-auth'/>

                                <input 
                                    type="email"
                                    required
                                    className='input-auth'
                                    placeholder='exemplo@email.com'
                                />
                            </div>
                        </div>


                        {/* TELEFONE */}
                        <div className='div-forms-auth'>
                            <label className='label-forms-auth'>Telefone</label>

                            <div className='div-input-auth'>
                                <FaPhoneAlt size={20} className='faIcon-auth'/>

                                <input 
                                    type="tel"
                                    required
                                    className='input-auth'
                                    placeholder='(XX) XXXXX-XXXX'
                                    pattern="\(\d{2}\) \d{5}-\d{4}"
                                />
                            </div>
                        </div>


                        {/* SENHAS */}
                        <div className='div-forms-senha-cadastro'>

                            {/* Senha */}
                            {/* ⚠️ FUTURO: validação de senha forte */}
                            <div className='div-forms-auth'>
                                <label className='label-forms-auth'>Senha</label>                     

                                <div className='div-input-auth'>
                                    <FaLock size={20} className='faIcon-auth'/>

                                    <input 
                                        type="password"
                                        required
                                        className='input-auth'
                                        placeholder='••••••••'
                                    />
                                </div>
                            </div>

                            {/* Confirmar senha */}
                            {/* ⚠️ FUTURO: verificar se as senhas coincidem */}
                            <div className='div-forms-auth'>
                                <label className='label-forms-auth'>Confirmar Senha</label>                     

                                <div className='div-input-auth'>
                                    <FaLock size={20} className='faIcon-auth'/>

                                    <input 
                                        type="password"
                                        required
                                        className='input-auth'
                                        placeholder='••••••••'
                                    />
                                </div>
                            </div>
                        </div>


                        {/* DOCUMENTO */}
                        {/* ⚠️ FUTURO: integrar com verificação de identidade */}
                        {/* ⚠️ FUTURO: preview da imagem */}
                        <div className='div-forms-auth'>
                            <label className='label-forms-auth'>
                                Documento (RG ou CNH)
                            </label>  

                            <input 
                                type="file" 
                                id='doc-input-cadastro'
                                required
                                accept='image/*'
                                className='forms-input-doc'
                            />

                            <label 
                                className='div-forms-input-doc' 
                                htmlFor="doc-input-cadastro"
                            >
                                <FaRegIdCard size={30} className='faIcon-auth'/> 
                                <br /><br />

                                <h3>Clique para enviar uma foto</h3>
                                <p>Utilizado para validação de identidade</p>
                            </label>
                        </div>


                        {/* TERMOS */}
                        {/* ⚠️ FUTURO: criar páginas reais de termos */}
                        <div className='div-forms-termos'>
                            <input type="checkbox" required />

                            <p>
                                Li e concordo com os 
                                <a className='link-termos' href='#'> Termos de Uso</a> 
                                {' '}e{' '}
                                <a className='link-termos' href='#'> Política de Privacidade</a>
                            </p>
                        </div>


                        {/* BOTÃO */}
                        {/* ⚠️ FUTURO: loading + resposta da API */}
                        <button type='submit' className='botao-confirm-auth'>
                            Finalizar Cadastro 
                            <FaArrowRight size={16} className='faIconConfirm'/>
                        </button>

                    </form>


                    {/* LOGIN */}
                    {/* ⚠️ FUTURO: navegação com React Router */}
                    <div className='footer-auth'>
                        <p>Já possui uma conta?</p>
                        <a href="#">Entrar</a>
                    </div>

                </div>
            </div>
                
        </div>
    );
}

export default Cadastro;