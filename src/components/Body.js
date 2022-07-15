import Icon from "./Icon";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Posts from "./Posts";

/* eslint-disable jsx-a11y/alt-text */
export default function Body() {
    return (
        <div class="corpo">
            <Content />
            <Sidebar />
        </div>
    );
}

function Content() {
    return (
        <div class="esquerda">

            <Stories />

            <Posts />
            
        </div>        
    );
}