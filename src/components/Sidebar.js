export default function Sidebar() {
    const suggestions = [
        {user: "bad.vibes.memes", reason: "Segue você"},
        {user: "chibirdart", reason: "Segue você"},
        {user: "razoesparaacreditar", reason: "Novo no Instagram"},
        {user: "adorable_animals", reason: "Segue você"},
        {user: "smallcutecats", reason: "Segue você"},
    ];

    return (
        <div class="sidebar">
          <div class="usuario">
            <img src="./assets/img/catanacomics.svg" alt="catanacomics"/>
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {suggestions.map(suggestion => <Suggestion user={suggestion.user} reason={suggestion.reason} />)}
            
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}

function Suggestion(
  {
    user,
    reason
  }
) {

    const imageSource = "./assets/img/" + user + ".svg";

    return (
        <div class="sugestao">
          <div class="usuario">
            <img src={imageSource} alt={user}/>
            <div class="texto">
              <div class="nome">{user}</div>
              <div class="razao">{reason}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
    );
}