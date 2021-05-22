import { motion } from "framer-motion"
import Link from 'next/link'

import ButtonUI from './buttonui'

import styles from './navoverlay.module.scss'

export default function NavOverlay({closeClickHandler, }) {
    const variants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
      }


    return (
        <motion.div 
            className={styles.nav_overlay}
            initial="hidden"
            animate= 'visible'
            variants={variants}
        >
            <ButtonUI 
                className={styles.close_btn}
                icon="close"
                clickHandler={closeClickHandler}
            />
            Flyout nav links go here.

            <nav className={styles.nav_overlay_menu}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/locations">
                            <a>Locations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/people">
                            <a>People</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li> 
                </ul>
            </nav>
        </motion.div>   
           
    )
}