import Image from 'next/image'
import Featured from '../components/featured'
import CategoryList from '../components/category-list'
import CardList from '../components/card-list'
import Menu from '../components/menu'

export default function Home() {
  return (
    <main>
      <Featured/>
      <CategoryList/>
      <section dir='rtl' className='flex gap-12'>
        <CardList/>
        <Menu/>
      </section>
    </main>
  )
}
