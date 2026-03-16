import { Link } from "react-router-dom";
import Kicker from "../atoms/Kicker";

export default function ArticlePaginationLink({ nextPost }) {
  if (nextPost) {
    return (
      <Link to={`/posts/${nextPost.slug}`}>
        <Kicker>Próxima leitura</Kicker>
        <strong>{nextPost.title}</strong>
      </Link>
    );
  }

  return (
    <Link to="/">
      <Kicker>Retornar</Kicker>
      <strong>Explorar o arquivo completo</strong>
    </Link>
  );
}
