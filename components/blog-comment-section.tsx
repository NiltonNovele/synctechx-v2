"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, Reply, MoreHorizontal, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: "Alex Johnson",
    authorImage: "/logo/Shibaccus.png?height=40&width=40",
    content:
      "This is a fantastic article! I especially liked the section about performance optimization techniques.",
    date: "2 days ago",
    likes: 5,
    replies: [
      {
        id: 101,
        author: "Sarah Williams",
        authorImage: "/logo/Shibaccus.png?height=40&width=40",
        content:
          "I agree! The performance tips were really helpful for my current project.",
        date: "1 day ago",
        likes: 2,
      },
    ],
  },
  {
    id: 2,
    author: "Michael Chen",
    authorImage: "/logo/Shibaccus.png?height=40&width=40",
    content:
      "Great insights! Would love to see a follow-up article on how these trends evolve over the next year.",
    date: "3 days ago",
    likes: 3,
    replies: [],
  },
];

interface BlogCommentSectionProps {
  postId: number;
}

export function BlogCommentSection({ postId }: BlogCommentSectionProps) {
  const { toast } = useToast();
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newCommentObj = {
        id: Date.now(),
        author: "You",
        authorImage: "/logo/Shibaccus.png?height=40&width=40",
        content: newComment,
        date: "Just now",
        likes: 0,
        replies: [],
      };

      setComments([newCommentObj, ...comments]);
      setNewComment("");
      setIsSubmitting(false);

      toast({
        title: "Comment posted!",
        description: "Your comment has been added successfully.",
      });
    }, 1000);
  };

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newReply = {
        id: Date.now(),
        author: "You",
        authorImage: "/logo/Shibaccus.png?height=40&width=40",
        content: replyContent,
        date: "Just now",
        likes: 0,
      };

      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        return comment;
      });

      setComments(updatedComments);
      setReplyContent("");
      setReplyingTo(null);
      setIsSubmitting(false);

      toast({
        title: "Reply posted!",
        description: "Your reply has been added successfully.",
      });
    }, 1000);
  };

  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      }

      // Check in replies
      if (comment.replies) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === commentId) {
            return {
              ...reply,
              likes: reply.likes + 1,
            };
          }
          return reply;
        });

        return {
          ...comment,
          replies: updatedReplies,
        };
      }

      return comment;
    });

    setComments(updatedComments);

    toast({
      title: "Comment liked!",
      description: "You liked this comment.",
    });
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Comments (
        {comments.reduce(
          (acc, comment) => acc + 1 + (comment.replies?.length || 0),
          0
        )}
        )
      </h2>

      <Card className="bg-card/30 backdrop-blur-sm border-primary/10 mb-8">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/logo/Shibaccus.png?height=40&width=40"
                alt="Your avatar"
              />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px] bg-background/50 border-primary/10 focus:border-primary/50 mb-4"
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim() || isSubmitting}
                  className="rounded-full"
                >
                  {isSubmitting ? (
                    <>Posting...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Post Comment
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-primary/10 mb-4">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={comment.authorImage}
                      alt={comment.author}
                    />
                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{comment.author}</h4>
                        <p className="text-xs text-muted-foreground">
                          {comment.date}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="my-3 text-muted-foreground">
                      {comment.content}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => handleLikeComment(comment.id)}
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {comment.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() =>
                          setReplyingTo(
                            replyingTo === comment.id ? null : comment.id
                          )
                        }
                      >
                        <Reply className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>

                    {replyingTo === comment.id && (
                      <div className="mt-4 pl-6 border-l-2 border-primary/10">
                        <Textarea
                          placeholder={`Reply to ${comment.author}...`}
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          className="min-h-[80px] bg-background/50 border-primary/10 focus:border-primary/50 mb-2"
                        />
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setReplyingTo(null)}
                            className="rounded-full"
                          >
                            Cancel
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleSubmitReply(comment.id)}
                            disabled={!replyContent.trim() || isSubmitting}
                            className="rounded-full"
                          >
                            {isSubmitting ? "Posting..." : "Post Reply"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <motion.div
                    key={reply.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-card/20 backdrop-blur-sm border-primary/5">
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={reply.authorImage}
                              alt={reply.author}
                            />
                            <AvatarFallback>
                              {reply.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-sm">
                                  {reply.author}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {reply.date}
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-full"
                              >
                                <MoreHorizontal className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="my-2 text-sm text-muted-foreground">
                              {reply.content}
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-muted-foreground hover:text-primary h-7"
                              onClick={() => handleLikeComment(reply.id)}
                            >
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {reply.likes}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
