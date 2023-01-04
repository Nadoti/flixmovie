
export function App() {

  return (
    <main className="grid grid-cols-footer">
      <aside className="bg-red-400">
        <a href="/">FlixMovie<span>.</span></a>
        <nav>
          <h3>Menu</h3>
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
      </aside>

      <section className="bg-blue-400">
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

      <aside className="bg-green-400">
        teste
      </aside>
    </main>
  )
}

