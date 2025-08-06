import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

            <div className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Informações Gerais</h2>
                <p>
                  A Entrega Rapidinho está comprometida em proteger a privacidade e os dados pessoais de nossos
                  usuários. Esta política descreve como coletamos, usamos e protegemos suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Informações Coletadas</h2>
                <p>Coletamos as seguintes informações:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de identificação (nome, e-mail, telefone)</li>
                  <li>Endereço de entrega e cobrança</li>
                  <li>Informações de pagamento</li>
                  <li>Histórico de compras</li>
                  <li>Dados de navegação no site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Uso das Informações</h2>
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processar pedidos e entregas</li>
                  <li>Comunicação sobre produtos e serviços</li>
                  <li>Melhorar a experiência do usuário</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos ou alugamos suas informações pessoais. Compartilhamos dados apenas com parceiros
                  necessários para a prestação do serviço, como transportadoras e processadores de pagamento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Segurança</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso
                  não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Seus Direitos</h2>
                <p>Você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar a exclusão de dados</li>
                  <li>Revogar consentimentos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Contato</h2>
                <p>
                  Para questões sobre privacidade, entre em contato conosco através do e-mail:
                  privacidade@entregarapidinho.com.br
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
