import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Package, Truck, CheckCircle } from "lucide-react"

export default function TrackOrder() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Track Order Form */}
          <Card>
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold mb-6 text-center">Rastrear Pedido</h1>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Código de Rastreamento ou Número do Pedido</label>
                  <div className="flex gap-2">
                    <Input placeholder="Ex: BR123456789BR ou #12345" className="flex-1" />
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Search className="w-4 h-4 mr-2" />
                      Rastrear
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Digite o código de rastreamento dos Correios ou o número do seu pedido para acompanhar o status da
                  entrega.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sample Tracking Result */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6">Status do Pedido #12345</h2>

              <div className="space-y-6">
                {/* Order Info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Produto:</strong> Kit 2 GlicoMax
                      </p>
                      <p>
                        <strong>Data do Pedido:</strong> 15/01/2025
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Código de Rastreamento:</strong> BR123456789BR
                      </p>
                      <p>
                        <strong>Previsão de Entrega:</strong> 25/01/2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Pedido Confirmado</p>
                      <p className="text-sm text-gray-600">15/01/2025 - 14:30</p>
                      <p className="text-sm text-gray-500">Pagamento aprovado e pedido confirmado</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Produto Preparado</p>
                      <p className="text-sm text-gray-600">17/01/2025 - 09:15</p>
                      <p className="text-sm text-gray-500">Produto embalado e pronto para envio</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Em Trânsito</p>
                      <p className="text-sm text-gray-600">18/01/2025 - 16:45</p>
                      <p className="text-sm text-gray-500">Objeto postado nos Correios</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-400">Entregue</p>
                      <p className="text-sm text-gray-400">Aguardando entrega</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-4">Precisa de Ajuda?</h3>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Não recebeu o código de rastreamento?</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    O código é enviado em até 3 dias úteis após a confirmação do pagamento. Verifique sua caixa de spam.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Produto não chegou no prazo?</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Entre em contato conosco para verificarmos o status da entrega.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Para outras dúvidas, entre em contato:</p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>WhatsApp:</strong> (31) 99364-2775
                    </p>
                    <p className="text-sm">
                      <strong>E-mail:</strong> sac@entregarapidinho.com.br
                    </p>
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
