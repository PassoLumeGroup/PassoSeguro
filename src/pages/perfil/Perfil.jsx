// Importa o React
import React from 'react';

// Importa o CSS do componente
import './Perfil.css';

/**
 * Componente Perfil
 * Responsável por exibir a interface de gerenciamento de conta do usuário
 */
const Perfil = () => {

  return(

    // =========================
    // CONTAINER PRINCIPAL
    // =========================
    <div className="secao-principal-perfil">

      {/* ========================= */}
      {/* CARTÃO DE PERFIL */}
      {/* ========================= */}
      <div className="container-cartao-perfil">

        {/* Banner decorativo superior */}
        <div className="banner-superior-decorativo"></div>

        {/* ========================= */}
        {/* CONTEÚDO DO PERFIL */}
        {/* ========================= */}
        <div className="corpo-conteudo-usuario">

          {/* ========================= */}
          {/* CABEÇALHO */}
          {/* ========================= */}
          <div className="cabecalho-perfil-vertical">

            {/* FOTO DO USUÁRIO */}
            <div className="moldura-foto-perfil">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                alt="Foto do usuário"
                className="imagem-redonda-usuario"
              />

              {/* ⚠️ FUTURO: abrir modal para alterar foto */}
              <div className="botao-camera-flutuante">📷</div>
            </div>

            {/* INFORMAÇÕES + AÇÕES */}
            <div className="informacoes-e-acoes-abaixo">

              {/* NOME E LOCALIZAÇÃO */}
              <div className="bloco-nome-cidade">
                <h1>Maria Paula</h1>
                <p className="subtitulo-localizacao">
                  📍 Fortaleza, Ceará
                </p>
              </div>

              {/* BOTÕES DE AÇÃO */}
              <div className="botoes-topo-perfil">

                {/* ⚠️ FUTURO: habilitar edição real */}
                <button className="botao-interacao-cinza">
                  ✎ Editar Perfil
                </button>

                <button className="botao-interacao-rosa">
                  🛡 Verificação
                </button>

              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* ESTATÍSTICAS */}
          {/* ========================= */}
          <div className="grade-estatisticas-principais">

            <div className="caixa-estatistica-item">
              <span className="valor-estatistica-grande">12</span>
              <span className="texto-legenda-cinza">
                PONTOS SUGERIDOS
              </span>
            </div>

            <div className="caixa-estatistica-item">
              <span className="valor-estatistica-grande">45</span>
              <span className="texto-legenda-cinza">
                RELATOS FEITOS
              </span>
            </div>

            <div className="caixa-estatistica-item">
              <span className="valor-estatistica-grande">156</span>
              <span className="texto-legenda-cinza">
                IRMÃS AJUDADAS
              </span>
            </div>

          </div>

          {/* ========================= */}
          {/* INFORMAÇÕES PESSOAIS */}
          {/* ========================= */}
          <div className="bloco-informacoes-pessoais">

            <h3>Informações Pessoais</h3>

            <div className="grade-campos-duplos">

              {/* EMAIL */}
              <div className="grupo-campo-formulario">
                <label className="label-destaque">E-MAIL</label>
                <div className="campo-exibicao-dados">
                  maria3pqpaulaa@gmail.com
                </div>
              </div>

              {/* TELEFONE */}
              <div className="grupo-campo-formulario">
                <label className="label-destaque">TELEFONE</label>
                <div className="campo-exibicao-dados">
                  (85) 99999-9999
                </div>
              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* AÇÕES FINAIS */}
          {/* ========================= */}
          <div className="rodape-acoes-finais">

            {/* ⚠️ AÇÃO PERIGOSA */}
            <button className="botao-excluir-destaque">
              🗑 Excluir minha conta
            </button>

            {/* LOGOUT */}
            <button className="botao-destaque-sair">
              ➜ Sair da Conta
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

// Exporta o componente
export default Perfil;