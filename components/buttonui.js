import Image from 'next/image'

import classNames from 'classnames/bind'

import styles from './buttonui.module.scss'

let cx = classNames.bind(styles);

export default function ButtonUI({icon, clickHandler,}) {

    //"btnui close"
    let btnuiClasses = cx({
        btnui: true,
        close : icon === 'close'
    })


    return (
        <button className={styles.btnui} onClick={clickHandler}>
            <Image 
                src={`/images/icon-${icon}.svg`}
                height={50}
                width= {50}
                alt={`${icon} icon`}
            />    
        
        </button>
    )
}