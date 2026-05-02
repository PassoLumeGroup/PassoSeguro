// =========================
// IMPORTAÇÕES
// =========================

import './Cadastro.css';
import '../../styles/auth.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
    const navigate = useNavigate();
    const [telefone, setTelefone] = useState('');

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
                    <div style={{marginBottom: '3rem'}}>
                        <h2 className='welcome-auth'>Criar Conta</h2>

                        <p className='welcome-auth-txt'>
                            Preencha seus dados para começar.
                        </p>
                    </div>


                    {/* ========================= */}
                    {/* FORMULÁRIO */}
                    {/* ========================= */}
                    <form 
                        className='forms-auth'
                        onSubmit={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}
                    >

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


                        {/* TELEFONE (MÁSCARA MANUAL - SEM TELA BRANCA) */}
                        <div className='div-forms-auth'>
                            <label className='label-forms-auth'>Telefone</label>

                            <div className='div-input-auth'>
                                <FaPhoneAlt size={20} className='faIcon-auth'/>

                                <input
                                    type="text"
                                    maxLength={15}
                                    required
                                    className='input-auth'
                                    placeholder='(11) 99999-9999'
                                    value={telefone}
                                    onChange={(e) => {
                                        let v = e.target.value;

                                        v = v.replace(/\D/g, '');

                                        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
                                        v = v.replace(/(\d{5})(\d)/, '$1-$2');

                                        setTelefone(v);
                                    }}
                                />
                            </div>
                        </div>


                        {/* SENHAS */}
                        <div className='div-forms-senha-cadastro'>

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
                        <div className='div-forms-termos'>
                            <input type="checkbox" required />
                            
                            {/* ⚠️ FUTURO: Atualizar tanto para modelo LINK como também linkar para algum lugar */}
                            {/* Atualmente é apenas um placeholder temporário */}
                            <p>
                                Li e concordo com os 
                                <a className='link-termos' href='#'> Termos de Uso</a> 
                                {' '}e{' '}
                                <a className='link-termos' href='#'> Política de Privacidade</a>
                            </p>
                        </div>


                        <button 
                            type='submit' 
                            className='botao-confirm-auth'
                        >
                            Finalizar Cadastro 
                            <FaArrowRight size={16} className='faIconConfirm'/>
                        </button>

                    </form>

                    <div className='footer-auth'>
                        <p>Já possui uma conta?</p>
                        <Link to="/">Entrar</Link>
                    </div>

                </div>
            </div>
                
        </div>
    );
}

export default Cadastro;