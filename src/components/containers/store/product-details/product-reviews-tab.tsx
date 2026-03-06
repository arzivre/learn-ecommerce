import { RatingSummary } from '@/components/base/products/details/review/rating-summary'
import { ReviewCard } from '@/components/base/products/details/review/review-card'
import { ReviewFormCta } from '@/components/base/products/details/review/review-form-cta'
import type { Review } from '@/data/products'

interface ProductReviewsTabProps {
  reviews: Review[]
  averageRating: number
  ratingBreakdown: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  totalRatings: number
  productId: string
}

export function ProductReviewsTab({
  reviews,
  averageRating,
  ratingBreakdown,
  totalRatings,
  productId,
}: ProductReviewsTabProps) {
  return (
    <div className="space-y-10">
      <div className="grid gap-8 @5xl:grid-cols-12">
        <div className="@5xl:col-span-8">
          <h3 className="mb-6 text-lg font-semibold">
            Customer Reviews ({totalRatings})
          </h3>

          <div className="space-y-2">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                userName={review.userName}
                userAvatar={review.userAvatar}
                date={review.date}
                rating={review.rating}
                reviewText={review.comment}
              />
            ))}
          </div>
        </div>
        <div className="@5xl:col-span-4">
          <RatingSummary
            averageRating={averageRating}
            totalRatings={totalRatings}
            ratingBreakdown={ratingBreakdown}
            className="flex-col @2xl:flex-row @5xl:flex-col"
          />
          <ReviewFormCta
            onReviewClick={() => console.log('Write review for', productId)}
          />
        </div>
      </div>
    </div>
  )
}
