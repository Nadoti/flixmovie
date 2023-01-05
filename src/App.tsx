
export function App() {

  return (
    <main className="grid grid-cols-footer bg-primary h-screen">
      <aside className="bg-green-100 w-full">
        <div className="fixed max-w-full flex flex-col">
          <a href="/" className="text-4xl pt-8 pl-16">FlixMovie<span className="text-red-500">.</span></a>
          <nav className="w-[400px] ">
            <h3 className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-3 before:h-full before:bg-slate-600">Menu</h3>
            <a href="">Browse</a>
            <a href="">Watchlist</a>
            <a href="">Coming soon</a>
          </nav>
          <nav>
            <h3>Social</h3>
            <a href="">Friends</a>
            <a href="">Parties</a>
          </nav>
          <nav>
            <h3>General</h3>
            <a href="">Settings</a>
            <a href="">Log out</a>
          </nav>
        </div>
      </aside>

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

