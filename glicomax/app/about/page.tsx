import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-3xl font-bold mb-4">Sobre a Entrega Rapidinho</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Somos uma empresa brasileira dedicada a oferecer produtos inovadores e de qualidade, com entrega rápida
                e segura para todo o Brasil.
              </p>
            </CardContent>
          </Card>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-gray-700">
                  Democratizar o acesso a produtos de saúde e bem-estar inovadores, proporcionando uma experiência de
                  compra excepcional e entrega rápida para nossos clientes em todo o território nacional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
                <p className="text-gray-700">
                  Ser reconhecida como a principal plataforma de e-commerce do Brasil para produtos de saúde e
                  tecnologia, sempre priorizando a qualidade, inovação e satisfação do cliente.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Nossos Valores</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Agilidade</h3>
                  <p className="text-gray-600 text-sm">Processamento rápido de pedidos e entrega expressa</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-semibold mb-2">Qualidade</h3>
                  <p className="text-gray-600 text-sm">Produtos rigorosamente selecionados e testados</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold mb-2">Confiança</h3>
                  <p className="text-gray-600 text-sm">Transparência e segurança em todas as transações</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Informações da Empresa</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Dados Corporativos</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Razão Social:</strong> Entrega Rapidinho Ltda.
                    </p>
                    <p>
                      <strong>CNPJ:</strong> 51.162.053/0001-40
                    </p>
                    <p>
                      <strong>Fundação:</strong> 2020
                    </p>
                    <p>
                      <strong>Sede:</strong> Belo Horizonte, MG
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Certificações</h3>
                  <div className="space-y-2 text-sm">
                    <p>✓ Certificado SSL de Segurança</p>
                    <p>✓ Registro no Procon</p>
                    <p>✓ Membro da Câmara Brasileira de Comércio Eletrônico</p>
                    <p>✓ Compliance LGPD</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
