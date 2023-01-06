import { AsideNavigation } from "./components/home/aside/AsideNavigation";

export function App() {
  return (
    <main className="grid grid-cols-footer bg-primary h-screen">
      <AsideNavigation />

      <section className="mb-[1000px]">
        <nav>
          <div>
            <button> esq </button>
            <button> dir </button>
            <input type="text" />
          </div>

          <div>
            <button>sininho</button>
            <button>whats</button>
            <div>
              <h1>foto</h1>
              <h2>Nome</h2>
              <h2>level</h2>
            </div>
          </div>
        </nav>
      </section>

      <aside className="bg-primary-100">
        teste
      </aside>
    </main>
  )
}