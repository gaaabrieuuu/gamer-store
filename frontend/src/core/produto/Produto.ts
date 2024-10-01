import Especificacoes from "./Especificacoes";
import Precificavel from "./Precificavel";

interface Produto extends Precificavel {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  nota: number;
  reviewVideo: string;
  tags: string[];
  especificacoes: Especificacoes;
}

export default Produto;
