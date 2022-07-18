import React from "react";

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

            {posts.map(post => <PostImage 
                user={post.user} 
                img={post.img} 
                likesUser={post.likesUser} 
                likesTotal={post.likesTotal} 
            />)}

        </div>
    );
}

function PostImage({
    user,
    img,
    likesUser,
    likesTotal
}) {
    
    const [curtida, setCurtida] = React.useState("heart-outline");
    const [color, setColor] = React.useState("#262626");

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={"./assets/img/" + user + ".svg"} />
                    {user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={"./assets/img/" + img + ".svg"} onDoubleClick={() => {
                    setCurtida("heart");
                    setColor("#ed4956");
                }} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon 
                            name={curtida} 
                            style={{color: color}}
                            onClick={() => {
                                (curtida === "heart-outline") ? setCurtida("heart") : setCurtida("heart-outline");
                                (color === "#262626") ? setColor("#ed4956") : setColor("#262626");
                            }}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={"./assets/img/" + likesUser + ".svg"} />
                    <div class="texto">
                        Curtido por <strong>{likesUser}</strong> e <strong>outras {likesTotal} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}