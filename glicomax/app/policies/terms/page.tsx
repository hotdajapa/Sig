import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Termos de Uso e Condições</h1>

            <div className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar este site, você aceita e concorda em cumprir os termos e condições estabelecidos
                  neste documento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Uso do Site</h2>
                <p>Você concorda em usar o site apenas para fins legais e de acordo com estes termos. É proibido:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usar o site para atividades ilegais</li>
                  <li>Interferir no funcionamento do site</li>
                  <li>Tentar acessar áreas restritas</li>
                  <li>Reproduzir conteúdo sem autorização</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Produtos e Preços</h2>
                <p>
                  Nos esforçamos para manter informações precisas sobre produtos e preços, mas não garantimos que todas
                  as informações estejam sempre atualizadas. Reservamo-nos o direito de corrigir erros.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Pedidos e Pagamentos</h2>
                <p>
                  Todos os pedidos estão sujeitos à disponibilidade e confirmação. Reservamo-nos o direito de recusar ou
                  cancelar pedidos a nosso critério.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Entrega</h2>
                <p>
                  Os prazos de entrega são estimativas e podem variar. Não nos responsabilizamos por atrasos causados
                  por fatores externos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Garantias e Devoluções</h2>
                <p>
                  Oferecemos garantia conforme especificado em nossa política de devoluções. Produtos devem ser
                  devolvidos em condições originais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Limitação de Responsabilidade</h2>
                <p>
                  Nossa responsabilidade é limitada ao valor do produto adquirido. Não nos responsabilizamos por danos
                  indiretos ou consequenciais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Modificações</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                  imediatamente após a publicação.
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
