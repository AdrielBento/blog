import { Link } from "react-router-dom";
import BrandMark from "../atoms/BrandMark";

export default function BrandLink() {
  return (
    <Link className="brand" to="/">
      <BrandMark />
      <span className="brand__text">
        <strong>Atelier do Código</strong>
        <span>engenharia, craft e IA</span>
      </span>
    </Link>
  );
}
