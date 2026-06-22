import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Loader2, Zap, Users, Trophy, Award, ArrowRight, BookOpen } from "lucide-react";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (isAuthenticated && user) {
      setLocation("/game");
    }
  }, [isAuthenticated, user, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <Loader2 className="w-12 h-12 animate-spin text-white" />
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Redirect in progress
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg">
                🐕
              </div>
              <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                PREPOL RESET
              </h1>
            </div>
            <div className="text-sm text-blue-200">
              Aprende • Juega • Fiscaliza
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Aprende Cívica
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    Mientras Juegas
                  </span>
                </h2>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Descubre cómo funciona el Estado peruano, aprende a fiscalizar y conviértete en un
                  <span className="font-bold text-yellow-300"> Ciudadano Reset</span>. Tipo Duolingo pero para cívica.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Lecciones Rápidas</h3>
                    <p className="text-blue-200">2 minutos de aprendizaje + 5 preguntas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-pink-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Duelos Multijugador</h3>
                    <p className="text-blue-200">Compite contra amigos y apuesta Soles Cívicos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Trophy className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">4 Rangos Progresivos</h3>
                    <p className="text-blue-200">Desde Vecino Alerta hasta Ciudadano Reset</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Contenido Real</h3>
                    <p className="text-blue-200">60 preguntas sobre cívica peruana verificadas</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href={getLoginUrl()}>
                  <Button className="w-full md:w-auto px-8 py-6 text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Comienza Ahora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square">
                {/* Animated Cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Card 1 */}
                  <div className="absolute w-48 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 p-6 text-center flex flex-col items-center justify-center">
                    <div className="text-5xl mb-4">🏘️</div>
                    <h3 className="font-bold text-lg">Mi Barrio</h3>
                    <p className="text-sm text-blue-100 mt-2">Nivel 1</p>
                  </div>

                  {/* Card 2 */}
                  <div className="absolute w-48 h-64 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 p-6 text-center flex flex-col items-center justify-center top-20 right-0">
                    <div className="text-5xl mb-4">🏢</div>
                    <h3 className="font-bold text-lg">Mi Distrito</h3>
                    <p className="text-sm text-purple-100 mt-2">Nivel 2</p>
                  </div>

                  {/* Card 3 */}
                  <div className="absolute w-48 h-64 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 p-6 text-center flex flex-col items-center justify-center bottom-10 left-10">
                    <div className="text-5xl mb-4">🏛️</div>
                    <h3 className="font-bold text-lg">Mi Región</h3>
                    <p className="text-sm text-pink-100 mt-2">Nivel 3</p>
                  </div>

                  {/* Card 4 */}
                  <div className="absolute w-48 h-64 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 p-6 text-center flex flex-col items-center justify-center bottom-20 right-10">
                    <div className="text-5xl mb-4">🇵🇪</div>
                    <h3 className="font-bold text-lg">Mi País</h3>
                    <p className="text-sm text-yellow-100 mt-2">Nivel 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center hover:bg-white/15 transition-colors">
              <div className="text-4xl font-black text-yellow-300 mb-2">60</div>
              <p className="text-blue-200">Preguntas</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center hover:bg-white/15 transition-colors">
              <div className="text-4xl font-black text-purple-300 mb-2">12</div>
              <p className="text-blue-200">Niveles</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center hover:bg-white/15 transition-colors">
              <div className="text-4xl font-black text-pink-300 mb-2">4</div>
              <p className="text-blue-200">Distritos</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center hover:bg-white/15 transition-colors">
              <div className="text-4xl font-black text-green-300 mb-2">∞</div>
              <p className="text-blue-200">Diversión</p>
            </Card>
          </div>

          {/* Why Section */}
          <div className="mt-20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h3 className="text-3xl font-black mb-8 text-center">¿Por Qué PREPOL RESET?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎮</div>
                <h4 className="font-bold text-lg mb-2">Aprende Jugando</h4>
                <p className="text-blue-200">
                  La educación cívica no tiene que ser aburrida. Aprende mientras te diviertes.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="font-bold text-lg mb-2">Rápido y Efectivo</h4>
                <p className="text-blue-200">
                  Lecciones de 2 minutos. Perfecto para aprender en el camino.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👑</div>
                <h4 className="font-bold text-lg mb-2">Sé un Ciudadano Reset</h4>
                <p className="text-blue-200">
                  Alcanza el rango máximo y obtén tu certificado digital verificable.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-block">
              <div className="text-6xl mb-6">🐕</div>
              <h3 className="text-3xl font-black mb-4">El Vigilante te espera</h3>
              <p className="text-xl text-blue-200 mb-8 max-w-md">
                ¿Listo para aprender cívica de una forma diferente? ¡Comienza tu aventura ahora!
              </p>
              <a href={getLoginUrl()}>
                <Button className="px-10 py-6 text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-blue-300 text-sm">
            <p>PREPOL RESET © 2026 - Aprende Cívica, Fiscaliza el Estado, Sé un Ciudadano Reset</p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
