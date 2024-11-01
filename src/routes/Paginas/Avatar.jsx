import React from 'react';

export default function Avatar() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Meu Avatar</h1>
        
        {/* Avatar Display */}
        <div className="flex flex-col items-center mb-6">
          <img 
            src="link-para-imagem-do-avatar.jpg" 
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
          />
          <p className="text-gray-700">João Silva</p>
        </div>

        {/* Upload Avatar Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="upload">
            Carregar Novo Avatar
          </label>
          <input
            type="file"
            id="upload"
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Save Button */}
        <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition">
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
