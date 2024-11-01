import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Nossa Loja de Tênis</h1>
          <p className="text-xl mb-8">Encontre seu estilo e conforto em cada passo.</p>
          <a href="#features" className="inline-block px-6 py-3 text-sm font-semibold text-blue-600 bg-white rounded-lg shadow hover:bg-gray-200 transition">
            Conheça Nossos Modelos
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Destaques dos Nossos Tênis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <img src="link-para-imagem-do-tenis1.jpg" alt="Tênis Estilo 1" className="mb-4 rounded-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mb-2">Tênis Casual</h3>
              <p className="text-gray-700">Estilo perfeito para o dia a dia, combinando conforto e design moderno.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <img src="link-para-imagem-do-tenis2.jpg" alt="Tênis Estilo 2" className="mb-4 rounded-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mb-2">Tênis Esportivo</h3>
              <p className="text-gray-700">Desenvolvido para performance, ideal para treinos e atividades físicas.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <img src="link-para-imagem-do-tenis3.jpg" alt="Tênis Estilo 3" className="mb-4 rounded-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mb-2">Tênis Fashion</h3>
              <p className="text-gray-700">Tendência atual com detalhes sofisticados, para arrasar em qualquer ocasião.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Sua Loja de Tênis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
