import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Política de Frete</h1>

            <div className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">Frete Grátis</h2>
                <p>
                  Oferecemos frete grátis para todo o Brasil em todos os nossos produtos. Não há valor mínimo de compra
                  para ter direito ao frete gratuito.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Prazos de Entrega</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">Região</th>
                        <th className="border border-gray-300 p-3 text-left">Prazo de Entrega</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Sudeste</td>
                        <td className="border border-gray-300 p-3">5 a 10 dias úteis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Sul</td>
                        <td className="border border-gray-300 p-3">7 a 12 dias úteis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Centro-Oeste</td>
                        <td className="border border-gray-300 p-3">8 a 15 dias úteis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Nordeste</td>
                        <td className="border border-gray-300 p-3">10 a 15 dias úteis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Norte</td>
                        <td className="border border-gray-300 p-3">12 a 18 dias úteis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Processamento do Pedido</h2>
                <p>
                  Após a confirmação do pagamento, seu pedido será processado em até 2 (dois) dias úteis. Durante este
                  período, preparamos e embalamos seu produto para envio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Rastreamento</h2>
                <p>
                  Você receberá um código de rastreamento por e-mail em até 3 (três) dias úteis após a confirmação do
                  pagamento. Com este código, poderá acompanhar o status da entrega através do site dos Correios.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Transportadora</h2>
                <p>
                  Utilizamos exclusivamente os Correios para entrega de nossos produtos, garantindo segurança e
                  confiabilidade no transporte.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Endereço de Entrega</h2>
                <p>
                  Certifique-se de que o endereço de entrega esteja correto e completo. Não nos responsabilizamos por
                  atrasos ou extravios causados por informações incorretas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Tentativas de Entrega</h2>
                <p>
                  Os Correios realizarão até 3 (três) tentativas de entrega. Caso não seja possível entregar o produto,
                  ele ficará disponível para retirada na agência mais próxima por 30 dias.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Problemas na Entrega</h2>
                <p>
                  Em caso de problemas na entrega, entre em contato conosco imediatamente através do e-mail
                  sac@entregarapidinho.com.br ou WhatsApp (31) 99364-2775.
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
