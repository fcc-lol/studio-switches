import styles from './Switch.module.scss'
import Button from '../Button'

const Switch = ({switchName, switchNumber}) => {

    function turnOn() {
        fetch(`https://studio.fcc.lol/outlets/${switchNumber}:on`, {
            method: 'GET',
            mode: 'no-cors'
        })
    }

    function turnOff() {
        fetch(`https://studio.fcc.lol/outlets/${switchNumber}:off`, {
            method: 'GET',
            mode: 'no-cors'
        })
    }

    return <div className={styles['switch']}>
        <div className={styles['switch__header']}>
            <h2>{switchName}</h2>
            <h3>Switch number {switchNumber}</h3>
        </div>
        <div className={styles['switch__button-container']}>
            <Button label="On" clickHandler={turnOn}/>
            <Button label="Off" clickHandler={turnOff}/>
        </div>
    </div>
}

export default Switch