import { AsideNavigation } from "./components/home/aside/AsideNavigation";
import { ContentMain } from "./components/home/content/ContentMain";


export function App() {



  return (
    <main className="grid grid-cols-footer bg-primary h-screen">
      <AsideNavigation />
      <ContentMain />
      <aside className="bg-primary-100">
        teste
      </aside>
    </main>
  )
}