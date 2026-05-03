import './Perfil.css';

function Perfil({ isEditing = false }) {
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Upload da foto selecionada:", file.name);
    }
  };

  return (
    <div className="perfil-page">
      <div className="container-perfil">

        {/* COLUNA ESQUERDA: Perfil e Dados Pessoais */}
        <aside className="sidebar-perfil">
          <div className="profile-card">
            <div className="banner-perfil"></div>
            <div className="profile-main-info">
              <div className="avatar-wrapper standalone-upload">
                <div className="avatar-img">👤</div>
                <label htmlFor="quick-photo-upload" className="overlay-upload">
                  <span>📷 Alterar Foto</span>
                </label>
                <input
                  id="quick-photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                />
              </div>

              <div className="name-section">
                <h1>Fulana de Tal</h1>
                <p className="user-status">Nível 5 • Verificada</p>
                {!isEditing && (
                  <button className="btn-edit-profile">📝 Editar Perfil Completo</button>
                )}
              </div>
            </div>

            <div className="personal-details">
              <h2 className="section-title">Dados Pessoais</h2>
              <div className="detail-item">
                <p><strong>Gênero:</strong> Feminino</p>
                <p><strong>E-mail:</strong> fulana.tal@email.com</p>
                <p><strong>Telefone:</strong> (85) 99999-9999</p>
                <p><strong>Nascimento:</strong> 15/05/1998</p>
                <p><strong>Localização:</strong> Fortaleza, Brasil</p>
              </div>
            </div>
          </div>
        </aside>

        {/* COLUNA DIREITA: Conteúdo Principal */}
        <main className="content-perfil">

          <section className="dashboard-card">
            <h2 className="section-title">Estatísticas de Contribuição</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-number">147</span>
                <span className="stat-desc">Pontos Adicionados</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">23</span>
                <span className="stat-desc">Alertas Reportados</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">52km</span>
                <span className="stat-desc">Distância Mapeada</span>
              </div>
            </div>
          </section>

          <section className="dashboard-card">
            <h2 className="section-title">Pontos Recentemente Mapeados</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon blue">📍</div>
                <div className="activity-text">
                  <h3>Ponto de Ônibus Iluminado</h3>
                  <p>Passagem segura atenta registrada recentemente.</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon green">👮</div>
                <div className="activity-text">
                  <h3>Posto Policial</h3>
                  <p>Comunicação direta com a central verificada.</p>
                </div>
              </div>
            </div>
          </section>

          {isEditing && (
            <div className="form-actions">
              <button className="btn-cancel">Descartar</button>
              <button className="btn-save">Salvar Alterações</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Perfil;