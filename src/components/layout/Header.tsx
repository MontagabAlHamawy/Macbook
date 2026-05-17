import { navLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='z-51!'>
            <nav>
                <Image src={"/logo.svg"} alt='apple logo' width={40} height={40} />
                <ul>
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link href="#">{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='flex-center gap-3'>
                    <button>
                        <Image src={"/search.svg"} alt='search' width={30} height={30} ></Image>
                    </button>
                    <button>
                        <Image src={"/cart.svg"} alt='cart' width={30} height={30} ></Image>
                    </button>
                </div>
            </nav>
        </header>
    )
}
