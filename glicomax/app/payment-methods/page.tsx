import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Smartphone, Building, Shield } from "lucide-react"

export default function PaymentMethods() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Formas de Pagamento</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Credit Cards */}
              <div className="text-center p-6 border rounded-lg">
                <CreditCard className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold mb-2">Cartão de Crédito</h3>
                <p className="text-sm text-gray-600 mb-4">Parcelamento em até 12x sem juros</p>
                <div className="space-y-1 text-xs">
                  <p>✓ Visa</p>
                  <p>✓ Mastercard</p>
                  <p>✓ American Express</p>
                  <p>✓ Elo</p>
                </div>
              </div>

              {/* PIX */}
              <div className="text-center p-6 border rounded-lg">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold mb-2">PIX</h3>
                <p className="text-sm text-gray-600 mb-4">Aprovação instantânea</p>
                <div className="space-y-1 text-xs">
                  <p>✓ Pagamento imediato</p>
                  <p>✓ Disponível 24h</p>
                  <p>✓ Sem taxas</p>
                  <p>✓ Seguro</p>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="text-center p-6 border rounded-lg">
                <Building className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-bold mb-2">Boleto Bancário</h3>
                <p className="text-sm text-gray-600 mb-4">Vencimento em 3 dias úteis</p>
                <div className="space-y-1 text-xs">
                  <p>✓ Todos os bancos</p>
                  <p>✓ Casas lotéricas</p>
                  <p>✓ Internet banking</p>
                  <p>✓ Aplicativos</p>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Detalhes das Formas de Pagamento</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cartão de Crédito</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Parcelamento em até 12x sem juros</li>
                      <li>Aprovação imediata na maioria dos casos</li>
                      <li>Aceitos cartões nacionais e internacionais</li>
                      <li>Processamento seguro com criptografia SSL</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">PIX</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Pagamento instantâneo, disponível 24 horas</li>
                      <li>Aprovação automática do pedido</li>
                      <li>Sem taxas adicionais</li>
                      <li>QR Code gerado automaticamente</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Boleto Bancário</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Vencimento em 3 dias úteis</li>
                      <li>Pode ser pago em qualquer banco ou lotérica</li>
                      <li>Confirmação em até 2 dias úteis após pagamento</li>
                      <li>Enviado por e-mail após finalização do pedido</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Segurança</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold">Pagamento 100% Seguro</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Certificado SSL para proteção de dados</li>
                    <li>✓ Processamento através de gateways seguros</li>
                    <li>✓ Não armazenamos dados do cartão</li>
                    <li>✓ Compliance com normas PCI DSS</li>
                    <li>✓ Monitoramento 24h contra fraudes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Quando meu cartão será cobrado?</h4>
                    <p className="text-gray-700">O cartão é cobrado imediatamente após a confirmação do pedido.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Posso alterar a forma de pagamento?</h4>
                    <p className="text-gray-700">
                      Após a finalização do pedido, não é possível alterar a forma de pagamento. Entre em contato
                      conosco se precisar de ajuda.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">O que acontece se o boleto vencer?</h4>
                    <p className="text-gray-700">
                      Se o boleto vencer sem pagamento, o pedido será cancelado automaticamente. Você precisará fazer um
                      novo pedido.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
