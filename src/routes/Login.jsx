import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/usuarios');
      const usuarios = await response.json();

      const user = usuarios.find((u) => u.usuario === usuario);

      if (user) {
        // Descriptografar a senha usando a chave
        const senhaDescriptografada = CryptoJS.AES.decrypt(
          user.senha,
          'chave-secreta'
        ).toString(CryptoJS.enc.Utf8);

        console.log('Senha descriptografada:', senhaDescriptografada);

        if (senhaDescriptografada === senha.trim()) {
          sessionStorage.setItem(
            'user',
            CryptoJS.AES.encrypt(user.usuario, 'chave-secreta').toString()
          );
          setSuccess(true);
          setTimeout(() => {
            navigate('/'); 
          }, 1500); 
        } else {
          setError('Usuário ou senha incorretos.');
        }
      } else {
        setError('Usuário ou senha incorretos.');
      }
    } catch (err) {
      console.error('Erro ao fazer login', err);
      setError('Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl mb-4 text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Login feito com sucesso!</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuário"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 focus:outline-none"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Não tem uma conta?{' '}
            <Link to="/cadastrar" className="text-blue-500 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
