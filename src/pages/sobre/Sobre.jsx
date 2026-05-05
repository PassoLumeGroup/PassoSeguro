import React from 'react';
import './Sobre.css';
import { 
  FaHeart,
  FaUserShield,
  FaCheck,
  FaUsers,
  FaEye,
  FaBolt
} from "react-icons/fa";

function Sobre() {
  return (
    <div className="pagina-sobre">

      {/* =========================
          HERO
      ========================= */}
      <section className="hero-sobre">

        <div className="hero-conteudo">

          {/* Badge inicial */}
          <span className="badge-hero">
            <FaHeart /> Feito para Mulheres
          </span>

          {/* Título */}
          <h1>
            Nossa missão é sua <span>Liberdade.</span>
          </h1>

          {/* Texto principal */}
          <p>
            O PassoSeguro nasceu da necessidade de transformar Fortaleza em uma cidade mais acolhedora e segura para todas nós.
          </p>

        </div>
      </section>

      {/* =========================
          SOBRE
      ========================= */}
      <section className="secao-sobre">

        {/* CARD POR QUE */}
        <div className="card-porque">

          <div className="texto-porque">
            <h2>Por que o PassoSeguro?</h2>

            <p>
              Em um mundo onde o medo muitas vezes dita nossas rotas, usamos tecnologia e colaboração para retomar nosso espaço.
            </p>

            <p>
              Não somos apenas um mapa; somos uma rede de apoio que conecta mulheres, identifica pontos de vulnerabilidade e destaca locais de acolhimento em toda a capital cearense.
            </p>
          </div>

          {/* CARD RECURSOS */}
          <div className="card-recursos">

            {/* Ícone decorativo */}
            <div className="icone-card">
              <FaUserShield size={30} />
            </div>

            {/* Lista */}
            <div className="lista-recursos">

              <div>
                <div className="icone-check"><FaCheck /></div>
                Mapeamento Colaborativo
              </div>

              <div>
                <div className="icone-check"><FaCheck /></div>
                Validação de Segurança
              </div>

              <div>
                <div className="icone-check"><FaCheck /></div>
                Rede de Apoio 24h
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            VALORES
        ========================= */}
        <div className="valores">

          <h2>Nossos Valores</h2>

          <div className="grid-valores">

            <div>
              <div className="icone-valores">
                <FaUsers size={40} />
              </div>
              <h3>Sororidade</h3>
              <p>Cuidamos umas das outras através de experiências reais.</p>
            </div>

            <div>
              <div className="icone-valores">
                <FaEye size={40} />
              </div>
              <h3>Transparência</h3>
              <p>Informações claras sobre segurança da cidade.</p>
            </div>

            <div>
              <div className="icone-valores">
                <FaBolt size={40} />
              </div>
              <h3>Agilidade</h3>
              <p>Alertas em tempo real para sua tranquilidade.</p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Sobre;