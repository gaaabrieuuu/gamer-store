import { Produto } from "@/core";

export interface TituloProdutoProps {
  produto: Produto;
}

const TituloProduto = (props: TituloProdutoProps) => {
  const { produto } = props;
  return (
    <div className="flex flex-col">
      <div className="text-2xl">{produto?.nome}</div>
      <div className="font-light text-zinc-400">{produto?.descricao}</div>
    </div>
  );
};

export default TituloProduto;
