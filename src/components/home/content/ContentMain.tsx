import { Header } from '../../header/Header'
import { Banner } from './banner/Banner'


export function ContentMain() {
  return (
    <section className="flex flex-col w-full">
      <Header />
      <Banner />
    </section >
  )
}
