import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

            <div className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">O que são Cookies?</h2>
                <p>
                  Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.
                  Eles nos ajudam a melhorar sua experiência de navegação e fornecer serviços personalizados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Tipos de Cookies Utilizados</h2>

                <h3 className="text-lg font-medium mb-2">Cookies Essenciais</h3>
                <p>Necessários para o funcionamento básico do site, incluindo carrinho de compras e autenticação.</p>

                <h3 className="text-lg font-medium mb-2 mt-4">Cookies de Performance</h3>
                <p>Coletam informações sobre como você usa nosso site para melhorar o desempenho.</p>

                <h3 className="text-lg font-medium mb-2 mt-4">Cookies de Marketing</h3>
                <p>Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas publicitárias.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Gerenciamento de Cookies</h2>
                <p>
                  Você pode controlar e gerenciar cookies através das configurações do seu navegador. Note que
                  desabilitar cookies pode afetar a funcionalidade do site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Cookies de Terceiros</h2>
                <p>Utilizamos serviços de terceiros que podem definir cookies, incluindo:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics para análise de tráfego</li>
                  <li>Facebook Pixel para publicidade</li>
                  <li>Processadores de pagamento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Atualizações</h2>
                <p>
                  Esta política pode ser atualizada periodicamente. Recomendamos revisar esta página regularmente para
                  se manter informado sobre nossas práticas de cookies.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
