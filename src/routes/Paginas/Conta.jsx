import React from 'react';

export default function Conta() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-3xl text-center font-bold">Minha Conta</h1>
      </header>

      {/* User Information Section */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Informações do Usuário</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <p className="text-gray-800">João Silva</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-800">joao.silva@email.com</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <p className="text-gray-800">+55 (11) 91234-5678</p>
          </div>
        </div>
      </section>

      {/* Edit Profile Section */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Editar Perfil</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu Nome"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu Telefone"
              />
            </div>
            <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition">
              Salvar Alterações
            </button>
          </form>
        </div>
      </section>

      {/* Activity History Section */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Histórico de Atividades</h2>
          <ul className="space-y-4">
            <li className="border-b py-2">
              <p className="text-gray-800">Atividade 1 - 10/10/2024</p>
              <p className="text-gray-600">Descrição da atividade.</p>
            </li>
            <li className="border-b py-2">
              <p className="text-gray-800">Atividade 2 - 12/10/2024</p>
              <p className="text-gray-600">Descrição da atividade.</p>
            </li>
            <li className="border-b py-2">
              <p className="text-gray-800">Atividade 3 - 15/10/2024</p>
              <p className="text-gray-600">Descrição da atividade.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
