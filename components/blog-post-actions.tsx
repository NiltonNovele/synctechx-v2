"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ThumbsUp,
  Bookmark,
  Copy,
  Check,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BlogPostActionsProps {
  postId: number;
  initialLikes?: number;
  initialBookmarked?: boolean;
}

export function BlogPostActions({
  postId,
  initialLikes = 0,
  initialBookmarked = false,
}: BlogPostActionsProps) {
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));

    if (!liked) {
      toast({
        title: "Post liked!",
        description: "Thanks for your feedback.",
      });
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);

    toast({
      title: bookmarked ? "Bookmark removed" : "Post bookmarked!",
      description: bookmarked
        ? "This post has been removed from your bookmarks."
        : "This post has been added to your bookmarks.",
    });
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
            liked
              ? "bg-blue-200/50 text-blue-600"
              : "bg-blue-100/30 text-muted-foreground hover:text-blue-600 hover:bg-blue-100/50"
          } transition-colors`}
          onClick={handleLike}
          aria-label={liked ? "Unlike post" : "Like post"}
        >
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm">{likeCount}</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
            bookmarked
              ? "bg-blue-200/50 text-blue-600"
              : "bg-blue-100/30 text-muted-foreground hover:text-blue-600 hover:bg-blue-100/50"
          } transition-colors`}
          onClick={handleBookmark}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark post"}
        >
          <Bookmark className="h-4 w-4" />
          <span className="text-sm">{bookmarked ? "Saved" : "Save"}</span>
        </motion.button>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Share2 className="h-4 w-4 mr-1" />
            <span className="text-sm">Share</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuItem
            onClick={copyToClipboard}
            className="cursor-pointer"
          >
            {copied ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            Copy link
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
