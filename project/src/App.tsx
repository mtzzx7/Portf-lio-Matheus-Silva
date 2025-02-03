import React from 'react';
import { Github, Linkedin, Mail, Menu, X, Code2, Briefcase, User, MessageSquare } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Seu Nome</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-gray-900">Sobre</a>
              <a href="#habilidades" className="text-gray-600 hover:text-gray-900">Habilidades</a>
              <a href="#projetos" className="text-gray-600 hover:text-gray-900">Projetos</a>
              <a href="#contato" className="text-gray-600 hover:text-gray-900">Contato</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#sobre" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">Sobre</a>
              <a href="#habilidades" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">Habilidades</a>
              <a href="#projetos" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">Projetos</a>
              <a href="#contato" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200"
              alt="Seu Nome"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Seu Nome</h1>
            <p className="text-xl text-gray-600 mb-8">Desenvolvedor Full Stack</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Sobre Mim</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Code2 className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Habilidades</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'Docker', 'AWS'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <p className="font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Projetos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=400`}
                  alt={`Projeto ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Projeto {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Breve descrição do projeto e tecnologias utilizadas.
                  </p>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Ver mais →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Contato</h2>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;