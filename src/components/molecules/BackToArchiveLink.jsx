import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackToArchiveLink() {
  return (
    <Link className="back-link" to="/">
      <ArrowLeft />
      Voltar ao arquivo
    </Link>
  );
}
