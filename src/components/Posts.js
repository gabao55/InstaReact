import Icon from "./Icon";

export default function Posts() {
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