export default function Stories() {
    const stories = [
      "9gag",
      "meowed",
      "barked",
      "nathanwpylestrangeplanet",
      "wawawicomics",
      "respondeai",
      "filomoderna",
      "memeriagourmet",
    ]

    return (
        <div class="stories">

            {stories.map(story => <Story user={story} />)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story({user}) {
    return (
        <div class="story">
          <div class="imagem">
            <img src={"./assets/img/" + user + ".svg"} alt={user + "profile image"} />
          </div>
          <div class="usuario">
            {user}
          </div>
        </div>
    );
}