import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

interface ReviewCardProps {
  userName: string
  userAvatar: string
  date: string
  rating: number
  reviewText: string
  className?: string
}

export function ReviewCard({
  userName,
  userAvatar,
  date,
  rating,
  reviewText,
  className,
}: ReviewCardProps) {
  return (
    <div className={cn('flex gap-4 border-b py-6 last:border-0', className)}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={userAvatar} alt={userName} />
        <AvatarFallback>{userName[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground">{userName}</h4>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-3.5 w-3.5',
                  i < rating ? 'fill-current' : 'text-muted',
                )}
              />
            ))}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {reviewText}
        </p>
      </div>
    </div>
  )
}
