import Icon from "./Icon";
import Sidebar from "./Sidebar";

/* eslint-disable jsx-a11y/alt-text */
export default function Body() {
    return (
        <div class="corpo">
            <Left />
            <Sidebar />
        </div>
    );
}

function Left() {
    return (
        <div class="esquerda">

            <Stories />

            <Posts />
        </div>        
    );
}

function Stories() {
    return (
        <div class="stories">
            <Story img="./assets/img/9gag.svg" user="9gag" />
            <Story img="./assets/img/meowed.svg" user="meowed" />
            <Story img="./assets/img/barked.svg" user="barked" />
            <Story img="./assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet" />
            <Story img="./assets/img/wawawicomics.svg" user="wawawicomics" />
            <Story img="./assets/img/respondeai.svg" user="respondeai" />
            <Story img="./assets/img/filomoderna.svg" user="filomoderna" />
            <Story img="./assets/img/memeriagourmet.svg" user="memeriagourmet" />

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
          <div class="imagem">
            <img src={props.img} />
          </div>
          <div class="usuario">
            {props.user}
          </div>
        </div>
    );
}

function Posts() {
    return (
        <div class="posts">
            <Postimage user="meowed"
             post="./assets/img/gato-telefone.svg"
             likesUser="respondeai"
             likesTotal="101.523" />

            <Postimage user="barked"
            post="./assets/img/dog.svg"
            likesUser="adorable_animals"
            likesTotal="99.159" />

            <Postimage user="barked"
            post="./assets/img/dog.svg"
            likesUser="adorable_animals"
            likesTotal="99.159" />
        </div>
    );
}

function Postimage(props) {
    return (
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={"./assets/img/" + props.user + ".svg"} />
                {props.user}
            </div>
            <div class="acoes">
                <Icon name="ellipsis-horizontal" />
            </div>
            </div>

            <div class="conteudo">
                <img src={props.post} />
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                    <Icon name="heart-outline" />
                    <Icon name="chatbubble-outline" />
                    <Icon name="paper-plane-outline" />
                </div>
                <div>
                    <Icon name="bookmark-outline" />
                </div>
            </div>

            <div class="curtidas">
                <img src={"./assets/img/" + props.likesUser + ".svg"} />
                <div class="texto">
                    Curtido por <strong>{props.likesUser}</strong> e <strong>outras {props.likesTotal} pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    );
}