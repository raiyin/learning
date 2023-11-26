import { useState } from 'react'
import classes from './App.module.scss'
import { Link } from 'react-router-dom'
import About from '@/pages/About/About'
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Image from '@/assets/app-image.svg'

// TREE SHAKING~ lazy loading and decomposing
function TODO(a: number) {
    console.log('TODOFUNCTION')
}

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)
    // TODO(5);
    //
    // if (__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOP</div>
    // }
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILE</div>
    // }
    // if (__ENV__ === 'development') {
    //     // addDevTools();
    // }

    return (
        <div>
            <div>
                <h1>
                    PLATFORM={__PLATFORM__}
                </h1>
                <img width={100} height={100} src={avatarPng} alt="" />
                <img width={100} height={100} src={avatarJpg} alt="" />
            </div>
            <div>
                <Image style={{ color: 'black' }} width={50} height={50} />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                <span>
                    inc
                </span>
            </button>
            <About />
        </div>
    )
}
