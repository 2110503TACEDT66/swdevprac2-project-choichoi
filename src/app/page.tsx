import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import CardPanel from '@/components/CardPanel'
import PromoteCard from '@/components/PromoteCard'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <PromoteCard/>
      </div>
    </main>
  )
}
