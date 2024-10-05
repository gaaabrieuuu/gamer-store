"use client";

import { produtos } from "@/core";
import ProdutoItem from "./ProdutoItem";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";

const ListaProdutos = () => {
  return produtos.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {produtos.map((produto) => (
        <ProdutoItem produto={produto} key={produto.id} />
      ))}
    </div>
  ) : (
    <ProdutoNaoEncontrado semBotaoVoltar />
  );
};

export default ListaProdutos;
