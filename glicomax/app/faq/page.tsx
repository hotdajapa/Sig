import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Como funciona o medidor de glicose sem agulhas?",
      answer:
        "O GlicoMax utiliza tecnologia de sensores avançados que medem os níveis de glicose através da pele, sem necessidade de perfuração. Basta posicionar o dedo no sensor e aguardar alguns segundos para obter o resultado.",
    },
    {
      question: "O produto é preciso?",
      answer:
        "Sim, o GlicoMax possui precisão de 99,9% e é desenvolvido com sensores de alta tecnologia, garantindo resultados confiáveis para o monitoramento da glicose.",
    },
    {
      question: "Precisa de fitas ou lancetas?",
      answer:
        "Não! Uma das principais vantagens do GlicoMax é eliminar completamente a necessidade de fitas de teste e lancetas, tornando o monitoramento mais prático e econômico.",
    },
    {
      question: "Como é feita a entrega?",
      answer:
        "Realizamos entregas para todo o Brasil através dos Correios, com frete grátis. O prazo de entrega varia de 5 a 15 dias úteis, dependendo da região.",
    },
    {
      question: "Qual é a garantia do produto?",
      answer:
        "Oferecemos 30 dias de garantia contra defeitos de fabricação. Caso o produto apresente problemas, realizamos a troca ou reembolso integral.",
    },
    {
      question: "O aplicativo é gratuito?",
      answer:
        "Sim, o aplicativo para acompanhamento do histórico de medições é totalmente gratuito e está disponível para Android e iOS.",
    },
    {
      question: "Como rastrear meu pedido?",
      answer:
        "Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail em até 3 dias úteis para acompanhar a entrega.",
    },
    {
      question: "Posso devolver o produto?",
      answer:
        "Sim, você tem até 7 dias após o recebimento para solicitar a devolução, conforme o Código de Defesa do Consumidor.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Perguntas Frequentes</h1>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Não encontrou sua resposta?</h3>
              <p className="text-gray-700 mb-4">Entre em contato conosco através dos nossos canais de atendimento.</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>WhatsApp:</strong> (31) 99364-2775
                </p>
                <p>
                  <strong>E-mail:</strong> sac@entregarapidinho.com.br
                </p>
                <p>
                  <strong>Horário:</strong> Segunda a Sexta, 08h às 18h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
