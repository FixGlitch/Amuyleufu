import styles from "../Home/Home.module.css"
import bg from "../../assets/BGM.png"
export default function Home() {
    return (
        <div className={styles.Container}>
            <img src={bg} alt="brasil" />
        </div>
    )
};
