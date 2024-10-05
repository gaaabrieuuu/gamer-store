import { CalcularParcelamento } from "@/core";

const useParcelamento = (valor: number, quantidade: number = 12) => {
  const parcelamento = new CalcularParcelamento().executar(valor, quantidade);
  return parcelamento;
};

export default useParcelamento;
