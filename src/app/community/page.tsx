"use client";

import { CommunityPostCard } from "@/components/community/community-post-card";
import { mockCommunityPosts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";

export default function PublicCommunityPage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="space-y-8">
      <div className="text-center py-8 bg-card rounded-lg shadow">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Onereference Community</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Share insights, ask questions, and connect with professionals.
        </p>
        {!isLoggedIn && (
          <div className="mt-6">
            <Link href="/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Login to Participate
              </Button>
            </Link>
          </div>
        )}
         {isLoggedIn && (
          <div className="mt-6">
            <Link href="/individual/dashboard/community">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Go to Interactive Community
              </Button>
            </Link>
          </div>
        )}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCommunityPosts.map((post) => (
          <CommunityPostCard key={post.id} post={post} interactive={false} />
        ))}
      </div>
       {mockCommunityPosts.length === 0 && (
         <div className="text-center py-12 col-span-full">
          <Users className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-xl font-semibold">No Posts Yet</h3>
          <p className="mt-1 text-muted-foreground">Be the first to start a discussion!</p>
        </div>
       )}
    </div>
  );
}
