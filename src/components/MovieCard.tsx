import styles from "../styles/MovieCard.module.css";

interface Props {
  title: string;
}

const MovieCard = ({ title }: Props) => {
  return (
    <li key={title} className={styles.container}>
      {title}
    </li>
  );
};

export default MovieCard;
