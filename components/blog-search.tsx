"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, X, Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured: boolean;
};

export function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearchQuery || debouncedSearchQuery.length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);

      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(debouncedSearchQuery)}`
        );
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.posts);
        } else {
          console.error("Search failed");
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error searching:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    performSearch();
  }, [debouncedSearchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Focus input when dialog opens
  useEffect(() => {
    if (showSearchDialog && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [showSearchDialog]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setShowSearchDialog(true);
      }

      // Escape to close search dialog
      if (e.key === "Escape" && showSearchDialog) {
        setShowSearchDialog(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSearchDialog]);

  return (
    <>
      {/* Search trigger button */}
      <Button
        variant="outline"
        className="w-full flex items-center justify-between"
        onClick={() => setShowSearchDialog(true)}
      >
        <div className="flex items-center">
          <Search className="h-4 w-4 mr-2" />
          <span className="text-muted-foreground">Search articles...</span>
        </div>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search Dialog */}
      <Dialog open={showSearchDialog} onOpenChange={setShowSearchDialog}>
        <DialogContent className="sm:max-w-[600px] p-0 gap-0">
          <DialogHeader className="px-4 pt-4 pb-0">
            <DialogTitle className="text-lg">Search Articles</DialogTitle>
          </DialogHeader>

          <div className="p-4 pt-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                ref={inputRef}
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 bg-background/50 border-blue-300/10 focus:border-blue-500/50"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-blue-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="px-4 pb-4">
            {isSearching ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {searchResults.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    onClick={() => setShowSearchDialog(false)}
                  >
                    <Card className="hover:bg-blue-50 transition-colors border-blue-300/10">
                      <CardContent className="p-3">
                        <div className="flex gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={post.image || "/logo/Shibaccus.png"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium line-clamp-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-blue-600">
                                {post.category}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {post.date}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : debouncedSearchQuery.length >= 2 ? (
              <div className="p-8 text-center text-muted-foreground">
                No results found for "{debouncedSearchQuery}"
              </div>
            ) : searchQuery.length > 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                Type at least 2 characters to search
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Start typing to search for articles
              </div>
            )}
          </div>

          <div className="p-2 border-t border-blue-300/10 flex justify-between items-center px-4">
            <p className="text-xs text-muted-foreground">Press ESC to close</p>
            <p className="text-xs text-muted-foreground">
              {searchResults.length > 0 &&
                `${searchResults.length} results found`}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
