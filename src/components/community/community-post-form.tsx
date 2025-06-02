
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters.").max(100, "Title must be 100 characters or less."),
  content: z.string().min(10, "Content must be at least 10 characters."),
  tags: z.string().optional(), // Comma-separated tags
});

type PostFormValues = z.infer<typeof postSchema>;

export function CommunityPostForm({ onSubmitSuccess }: { onSubmitSuccess?: (data: PostFormValues) => void }) {
  const { toast } = useToast();
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: { title: "", content: "", tags: "" },
  });

  async function onSubmit(data: PostFormValues) {
    // TODO: Implement Firebase call to save community post data to Firestore.
    // Associate post with the current logged-in user.
    // Example: await firebase.firestore().collection('community-posts').add({ ...data, userId: currentUser.uid, createdAt: firebase.firestore.FieldValue.serverTimestamp() });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast({
      title: "Post Created!",
      description: "Your community post has been published.",
    });
    form.reset();
    if (onSubmitSuccess) onSubmitSuccess(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-headline">Create a New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Title</FormLabel>
                  <FormControl>
                    <Input placeholder="What's your post about?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your thoughts, questions, or insights..."
                      className="resize-y min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., career, interview, advice" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Posting..." : "Publish Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
