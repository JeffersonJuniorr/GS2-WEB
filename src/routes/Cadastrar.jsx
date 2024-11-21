import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

function Cadastrar() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    const senhaCriptografada = CryptoJS.AES.encrypt(senha, 'chave-secreta').toString();

    try {
      const response = await fetch('http://localhost:5000/usuarios', {
        method: 'POST',
        body: JSON.stringify({ usuario, senha: senhaCriptografada }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/login');
      } else {
        setError('Erro ao cadastrar o usuário.');
      }
    } catch (err) {
      console.error('Erro ao fazer cadastro', err);
      setError('Ocorreu um erro ao tentar cadastrar.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl mb-4 text-center text-gray-800">Cadastro</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleCadastro}>
          <div className="mb-4">
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuário"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Confirmar Senha"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Cadastrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Já tem uma conta?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastrar;
