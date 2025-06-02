"use client";

import { CommunityPostCard, type CommunityPost } from "@/components/community/community-post-card";
import { CommunityPostForm } from "@/components/community/community-post-form";
import { mockCommunityPosts } from "@/lib/mock-data";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function IndividualCommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>(mockCommunityPosts);
  const [showPostForm, setShowPostForm] = useState(false);

  const handlePostSuccess = (newPostData: any) => {
    // This is a mock function. In a real app, you'd refetch or update state from API response.
    const newPost: CommunityPost = {
      id: String(Date.now()),
      authorName: "Current User", // Replace with actual user data
      authorAvatar: "https://placehold.co/40x40.png?text=CU",
      postedDate: "Just now",
      title: newPostData.title,
      content: newPostData.content,
      tags: newPostData.tags?.split(',').map((t:string) => t.trim()).filter((t:string) => t) || [],
      upvotes: 0,
      commentsCount: 0,
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
    setShowPostForm(false); // Close dialog
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 bg-card rounded-lg shadow">
        <div>
          <h1 className="text-3xl font-bold font-headline">Community Hub</h1>
          <p className="text-muted-foreground">Engage with fellow professionals.</p>
        </div>
        <Dialog open={showPostForm} onOpenChange={setShowPostForm}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Create a New Community Post</DialogTitle>
            </DialogHeader>
            <CommunityPostForm onSubmitSuccess={handlePostSuccess} />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex items-center gap-2 p-4 border rounded-lg">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder="Search community posts..." 
          className="flex-1"
        />
        <Button variant="outline">Search</Button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <CommunityPostCard key={post.id} post={post} interactive={true} />
        ))}
         {posts.length === 0 && (
         <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-xl font-semibold">No Posts Yet</h3>
          <p className="mt-1 text-muted-foreground">Be the first to start a discussion!</p>
        </div>
       )}
      </div>
    </div>
  );
}
