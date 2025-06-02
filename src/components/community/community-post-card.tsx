import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

export interface CommunityPost {
  id: string;
  authorName: string;
  authorAvatar?: string;
  postedDate: string;
  title: string;
  content: string;
  tags?: string[];
  upvotes: number;
  commentsCount: number;
}

interface CommunityPostCardProps {
  post: CommunityPost;
  interactive?: boolean; // Determines if like/comment buttons are active
}

export function CommunityPostCard({ post, interactive = false }: CommunityPostCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.authorAvatar || `https://placehold.co/40x40.png?text=${post.authorName.substring(0,1)}`} alt={post.authorName} data-ai-hint="person avatar" />
            <AvatarFallback>{post.authorName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-md font-semibold">{post.authorName}</CardTitle>
            <CardDescription className="text-xs">{post.postedDate}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <h3 className="text-lg font-semibold font-headline">{post.title}</h3>
        <p className="text-sm text-foreground/90 line-clamp-4">
          {post.content}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" disabled={!interactive}>
            <ThumbsUp className="mr-2 h-4 w-4" /> {post.upvotes}
          </Button>
          <Button variant="ghost" size="sm" disabled={!interactive}>
            <MessageCircle className="mr-2 h-4 w-4" /> {post.commentsCount} Comments
          </Button>
        </div>
        <Button variant="ghost" size="sm" disabled={!interactive}>
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
}
