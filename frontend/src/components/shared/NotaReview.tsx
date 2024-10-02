import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface NotaReviewProps {
  nota: number;
  tamanho?: number;
}

const NotaReview = (props: NotaReviewProps) => {
  const notaParaEstrelas = (nota: number) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        estrelas.push(<IconStarFilled size={props.tamanho ?? 12} />);
      } else if (nota >= i - 0.5) {
        estrelas.push(<IconStarHalfFilled size={props.tamanho ?? 12} />);
      } else {
        estrelas.push(<IconStar size={props.tamanho ?? 12} />);
      }
    }
    return estrelas.map((item, index) => <span key={index}> {item} </span>);
  };

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {notaParaEstrelas(props.nota)}
    </div>
  );
};

export default NotaReview;
