import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input placeholder="(00) 00000-0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea placeholder="Descreva sua dúvida ou solicitação..." rows={5} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-gray-600">(31) 99364-2775</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600">sac@entregarapidinho.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Endereço</p>
                      <p className="text-gray-600">Belo Horizonte, MG - Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Horário de Atendimento</p>
                      <p className="text-gray-600">Segunda a Sexta: 08h às 18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Outros Canais</h3>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">💬</span>
                    WhatsApp: (31) 99364-2775
                  </Button>

                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">📧</span>
                    E-mail: sac@entregarapidinho.com.br
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Tempo de resposta:</strong> Respondemos em até 24 horas durante dias úteis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
