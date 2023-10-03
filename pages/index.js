import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
//import ManualHeader from "../Components/ManualHeader"
import Header from "@/Components/Header"
import LotteryEntrance from "@/Components/LotteryEntrance"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery-Raffle</title>
                <meta name="description" content="Smart contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
            Hello...!
        </div>
    )
}
