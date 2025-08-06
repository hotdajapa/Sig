import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Entrega Rapidinho</h3>
            <p className="text-gray-300 text-sm">
              A Entrega Rapidinho é uma loja online que atende todo o Brasil, oferecendo uma ampla variedade de produtos
              para todas as suas necessidades.
            </p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-lg mb-4">Políticas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/policies/returns" className="text-gray-300 hover:text-white">
                  Política de Devolução
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="text-gray-300 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="text-gray-300 hover:text-white">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping" className="text-gray-300 hover:text-white">
                  Política de Frete
                </Link>
              </li>
              <li>
                <Link href="/policies/cookies" className="text-gray-300 hover:text-white">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/payment-methods" className="text-gray-300 hover:text-white">
                  Formas de Pagamento
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-300 hover:text-white">
                  Rastrear Pedidos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento ao Cliente</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Segunda a Sexta: 08h às 18h</p>
              <p>
                <strong>Telefone:</strong> (31) 99364-2775
              </p>
              <p>
                <strong>E-mail:</strong> sac@entregarapidinho.com.br
              </p>
              <p>
                <strong>CNPJ:</strong> 51.162.053/0001-40
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-sm text-gray-400">
          <p>© 2025 Entrega Rapidinho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
