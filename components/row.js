import classnames from 'classnames/bind'

import styles from './row.module.scss'

let cx = classnames.bind(styles)

export default function Row({children, justifyContentCenter}) {

    const rowClasses = cx({
        row : true ,
        ['justify-content-center']: justifyContentCenter
    })

    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}