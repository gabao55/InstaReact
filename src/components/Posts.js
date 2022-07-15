export default function Posts() {
    const posts = [
        {
            user: "meowed",
            img: "gato-telefone",
            likesUser: "respondeai",
            likesTotal: "101.523"
        },
        {
            user: "barked",
            img: "dog",
            likesUser: "adorable_animals",
            likesTotal: "99.159"
        },
        {
            user: "barked",
            img: "dog",
            likesUser: "adorable_animals",
            likesTotal: "99.159"
        },
    ]

    return (
        <div class="posts">

            {posts.map(post => <PostImage post={post} />)}

        </div>
    );
}

function PostImage(props) {
    const actionsIcons = ["heart-outline",
        "chatbubble-outline",
        "paper-plane-outline"]

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={"./assets/img/" + props.post.user + ".svg"} />
                    {props.post.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={"./assets/img/" + props.post.img + ".svg"} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {actionsIcons.map(icon => <ion-icon name={icon}></ion-icon>)}
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={"./assets/img/" + props.post.likesUser + ".svg"} />
                    <div class="texto">
                        Curtido por <strong>{props.post.likesUser}</strong> e <strong>outras {props.post.likesTotal} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}