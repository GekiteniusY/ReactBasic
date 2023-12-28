import { Content, Title } from "./index";

const Article = (props) => {
    return (
        <div>
            <Title title={props.title}/>
            <Content content={props.content}/>
            <button>公開</button>
        </div>
    );
};

export default Article;