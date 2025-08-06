import { Star, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    date: "15 de Janeiro, 2025",
    comment: "Produto excelente! Realmente funciona sem precisar furar o dedo. Muito prático para o dia a dia.",
    helpful: 12,
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    date: "10 de Janeiro, 2025",
    comment: "Chegou rapidinho e funcionando perfeitamente. A tecnologia sem agulhas é revolucionária!",
    helpful: 8,
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 4,
    date: "8 de Janeiro, 2025",
    comment: "Muito bom produto, fácil de usar. O aplicativo para celular é bem útil para acompanhar o histórico.",
    helpful: 15,
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    rating: 5,
    date: "5 de Janeiro, 2025",
    comment: "Comprei para minha mãe diabética e ela adorou. Não sente mais dor nas medições diárias.",
    helpful: 20,
  },
  {
    id: 5,
    name: "Fernanda Lima",
    rating: 5,
    date: "2 de Janeiro, 2025",
    comment: "Produto de qualidade, entrega rápida. Recomendo para quem precisa monitorar a glicose regularmente.",
    helpful: 6,
  },
]

export default function ReviewsSection() {
  const averageRating = 4.9
  const totalReviews = 356

  return (
    <div className="mb-12">
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h3>

          {/* Rating Summary */}
          <div className="flex items-center gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">{totalReviews} avaliações</div>
            </div>

            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2 mb-1">
                  <span className="text-sm w-8">{stars}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width:
                          stars === 5 ? "75%" : stars === 4 ? "20%" : stars === 3 ? "3%" : stars === 2 ? "1%" : "1%",
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">
                    {stars === 5 ? "267" : stars === 4 ? "71" : stars === 3 ? "11" : stars === 2 ? "4" : "3"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{review.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>

                    <p className="text-gray-700 mb-3">{review.comment}</p>

                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Útil ({review.helpful})
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">Ver todas as {totalReviews} avaliações</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
