import Image from "next/image"
import Link from "next/link"
import { Star, Truck, RotateCcw, Heart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductGallery from "@/components/product-gallery"
import ReviewsSection from "@/components/reviews-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Gallery */}
          <ProductGallery />

          {/* Product Info */}
          <div className="space-y-6">
            {/* Official Sales Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Image src="/placeholder.svg?height=18&width=18&text=✓" alt="Oficial" width={18} height={18} />
              <span>Site Oficial de Vendas</span>
            </div>

            <p className="text-sm text-gray-500">Novo | 1097 unidades vendidas</p>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Kit 2 GlicoMax Medidor de Glicose a Laser e Oximetro - Portátil, Seguro e Prático
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-gray-500">(356 Avaliações)</span>
            </div>

            <hr className="border-gray-200" />

            {/* Price */}
            <div className="space-y-2">
              <div className="text-sm text-gray-500 line-through">DE R$ 334,00</div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-green-600">R$ 167,00</span>
                <Badge className="bg-red-500 text-white">50% OFF</Badge>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">Preço: </span>
                <span>
                  em até 12x de <strong>R$ 16,77</strong>
                </span>
              </div>
              <div className="bg-red-500 text-white px-3 py-1 rounded text-sm inline-block">R$ 167,00 de desconto</div>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Quantidade:</label>
              <div className="flex items-center border rounded-md w-fit">
                <button className="p-2 hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <input type="number" value="1" className="w-16 text-center border-0 focus:ring-0" />
                <button className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-700">Frete Grátis</p>
                    <p className="text-sm text-gray-600">Enviado pelos Correios</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm">
                      <Link href="/policies/returns" className="text-blue-600 hover:underline">
                        Devolução grátis
                      </Link>
                      . Até 7 dias a partir do recebimento
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Buy Button */}
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold">
              COMPRAR AGORA
            </Button>

            <Button variant="outline" className="w-full py-4">
              <Heart className="w-4 h-4 mr-2" />
              Adicionar aos Favoritos
            </Button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-center text-2xl font-bold mb-6">O Medidor de Glicose Mais Seguro e Prático!</h2>
                <p className="text-center mb-8">
                  Diga adeus às picadas de agulha! O medidor é a maneira mais simples e confiável para monitorar os
                  níveis de glicose no sangue sem dor ou desconforto, garantindo resultados rápidos e precisos.
                </p>

                <div className="text-center mb-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=GlicoMax+Demo"
                    alt="GlicoMax Demo"
                    width={400}
                    height={400}
                    className="mx-auto rounded-lg"
                  />
                </div>

                <h3 className="text-center text-xl font-bold mb-4">Tecnologia Sem Agulhas</h3>
                <p className="text-center mb-8">
                  Esqueça as lancetas e fitas de teste. Com o medidor de glicose, você monitora sua glicose sem furar o
                  dedo, preservando a saúde da sua pele e evitando infecções.
                </p>

                <h3 className="text-center text-xl font-bold mb-4">Resultados Instantâneos</h3>
                <p className="text-center mb-8">
                  Obtenha resultados em segundos! Este utiliza sensores avançados para fornecer leituras rápidas
                  diretamente na tela digital do dispositivo.
                </p>

                <h3 className="text-center text-xl font-bold mb-4">Benefícios</h3>
                <ul className="space-y-2 mb-8">
                  <li>
                    <strong>Sem Agulhas:</strong> Tecnologia revolucionária que elimina picadas.
                  </li>
                  <li>
                    <strong>Resultados Rápidos:</strong> Leituras em segundos, sem complicações.
                  </li>
                  <li>
                    <strong>Histórico Inteligente:</strong> Registre e acompanhe no aplicativo.
                  </li>
                  <li>
                    <strong>Seguro e Preciso:</strong> Desenvolvido com sensores de alta tecnologia.
                  </li>
                  <li>
                    <strong>Versátil:</strong> Mede glicose, oxigênio e frequência cardíaca.
                  </li>
                </ul>

                <h3 className="text-center text-xl font-bold mb-4">Especificações</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Material:</strong> ABS resistente.
                  </li>
                  <li>
                    <strong>Funções:</strong> Medição de glicose, oxigênio no sangue e frequência cardíaca.
                  </li>
                  <li>
                    <strong>Precisão:</strong> 99,9%.
                  </li>
                  <li>
                    <strong>Display:</strong> Tela digital de alta definição.
                  </li>
                  <li>
                    <strong>Conectividade:</strong> Compatível com Android e iOS via aplicativo.
                  </li>
                  <li>
                    <strong>Alimentação:</strong> Bateria recarregável via USB.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQ Section */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Dúvidas Frequentes</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">1 - O PRODUTO FUNCIONA MESMO?</h4>
                  <p className="text-gray-700">
                    Sim, o produto é eficaz e foi desenvolvido para proporcionar mais conforto, praticidade e bem-estar,
                    atendendo às necessidades do dia a dia de quem o utiliza.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">2 - A COMPRA É SEGURA?</h4>
                  <p className="text-gray-700">
                    Sim, a compra é totalmente segura. Utilizamos sistemas de pagamento seguros e oferecemos garantia de
                    reembolso ou troca em casos de extravio de mercadorias ou defeito de fabricação.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">3 - TEM CÓDIGO DE RASTREAMENTO?</h4>
                  <p className="text-gray-700">
                    Sim, fornecemos um código de rastreamento para que você possa acompanhar todas as etapas da entrega.
                    O prazo estimado para disponibilizar o código de rastreamento é de até 3 dias úteis após a
                    confirmação da compra.
                  </p>
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
