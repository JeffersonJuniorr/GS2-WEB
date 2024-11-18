export default function Sidebar() {
    return (
      <nav className="w-64 h-full border">
        <ul className="space-y-4 p-4">
          <li>
            <a href="/" className="block px-4 py-2 hover:bg-gray-300 rounded">
              Página Inicial
            </a>
          </li>
          <li>
            <a href="/solucao" className="block px-4 py-2 hover:bg-gray-300 rounded">
              Solução
            </a>
          </li>
          <li>
            <a href="/login" className="block px-4 py-1 hover:bg-gray-300 rounded">
              Login
            </a>
          </li>
          <li>
            <a href="/cadastrar" className="block px-4 py-2 hover:bg-gray-300 rounded">
              Cadastrar
            </a>
            <a href="/" className="block px-4 py-4 hover:bg-gray-300 rounded">
              Configurações
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  