import Button from "../Button";
import styles from "./style.module.css";

export default function Card({title, img, text, value}) {
  return (
    <div className={styles.container}>
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <p className={styles.vl}>{value}</p>
        <Button></Button>
      </div>
    </div>
  );
}