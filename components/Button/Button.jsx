import styles from './Button.module.scss'

const Button = ({label, clickHandler }) => {
    function click(e) {
        e.preventDefault();
        clickHandler()
    }

    return <button
            className={styles['button']}
            onClick={ click } >
                <p>{ label }</p>
        </button>
}

export default Button