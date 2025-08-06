import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ReturnsPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Política de Devolução e Reembolso</h1>

            <div className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">Direito de Arrependimento</h2>
                <p>
                  Conforme o Código de Defesa do Consumidor, você tem o direito de desistir da compra em até 7 (sete)
                  dias corridos a partir da data de recebimento do produto, sem necessidade de justificativa.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Condições para Devolução</h2>
                <p>Para solicitar a devolução, o produto deve atender às seguintes condições:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Estar em perfeitas condições, sem sinais de uso</li>
                  <li>Acompanhar todos os acessórios e manuais originais</li>
                  <li>Estar na embalagem original</li>
                  <li>Não apresentar danos causados pelo mau uso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Como Solicitar a Devolução</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Entre em contato conosco através do e-mail: sac@entregarapidinho.com.br</li>
                  <li>Informe o número do pedido e o motivo da devolução</li>
                  <li>Aguarde as instruções para envio do produto</li>
                  <li>Embale o produto adequadamente e envie para o endereço indicado</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Reembolso</h2>
                <p>
                  Após recebermos e analisarmos o produto devolvido, o reembolso será processado em até 10 (dez) dias
                  úteis. O valor será creditado na mesma forma de pagamento utilizada na compra.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Frete de Devolução</h2>
                <p>
                  O frete para devolução por arrependimento é por conta do cliente. Em casos de defeito ou produto
                  incorreto, o frete é por nossa conta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Garantia</h2>
                <p>
                  Oferecemos 30 (trinta) dias de garantia contra defeitos de fabricação. Produtos com defeito serão
                  trocados ou terão o valor reembolsado integralmente.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Produtos Não Aceitos para Devolução</h2>
                <p>Não aceitamos devolução de produtos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Danificados por mau uso</li>
                  <li>Com embalagem violada ou danificada</li>
                  <li>Fora do prazo de 7 dias</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
