import styles from "./container.module.css"

export const ItemListContainer = ({ greeting }) => {
    return(
        <div className={styles.container}> { greeting } </div>
    )
}
