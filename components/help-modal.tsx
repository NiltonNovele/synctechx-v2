"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Command,
  Sun,
  ArrowUp,
  HelpCircle,
  Settings,
  Keyboard,
  Info,
  Moon,
  Home,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";

export function HelpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("shortcuts");
  const modalRef = useRef<HTMLDivElement>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [settings, setSettings] = useState({
    animations: true,
    sounds: false,
    notifications: true,
    highContrast: false,
  });

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }

      // Open on Shift + / or ?
      if ((e.key === "/" && e.shiftKey) || e.key === "?") {
        e.preventDefault();
        setIsOpen(true);
        toast({
          title: "Help Modal",
          description: "Opened using keyboard shortcut (Shift + /)",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle custom event to toggle modal
  useEffect(() => {
    const toggleModal = () => {
      setIsOpen((prev) => !prev);
    };

    document.addEventListener("toggle-help-modal", toggleModal);
    return () => document.removeEventListener("toggle-help-modal", toggleModal);
  }, []);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Execute keyboard shortcut
  const executeShortcut = (shortcut: string) => {
    switch (shortcut) {
      case "theme":
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        toast({
          title: "Theme Changed",
          description: `Switched to ${newTheme} mode`,
        });
        break;
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast({
          title: "Scroll to Top",
          description: "Scrolled to the top of the page",
        });
        break;
      case "help":
        setIsOpen(false);
        setTimeout(() => {
          setIsOpen(true);
          toast({
            title: "Help Modal",
            description: "Reopened help modal",
          });
        }, 100);
        break;
      default:
        toast({
          title: "Keyboard Shortcut",
          description: `Executed: ${shortcut}`,
        });
    }
  };

  // Toggle setting
  const toggleSetting = (setting: keyof typeof settings) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [setting]: !prev[setting] };

      // Show toast notification
      toast({
        title: "Setting Updated",
        description: `${setting.charAt(0).toUpperCase() + setting.slice(1)} ${
          newSettings[setting] ? "enabled" : "disabled"
        }`,
      });

      return newSettings;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-xl bg-card shadow-lg border border-primary/20"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">Help & Settings</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close help modal"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <Tabs
              defaultValue="shortcuts"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="border-b border-primary/10">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                  <TabsTrigger
                    value="shortcuts"
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <Keyboard className="h-4 w-4 mr-2" />
                    Shortcuts
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </TabsTrigger>
                  <TabsTrigger
                    value="about"
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <Info className="h-4 w-4 mr-2" />
                    About
                  </TabsTrigger>
                </TabsList>
              </div>

              <div
                className="p-6 custom-scrollbar overflow-y-auto"
                style={{ maxHeight: "60vh" }}
              >
                <TabsContent value="shortcuts" className="mt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => executeShortcut("theme")}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          {resolvedTheme === "dark" ? (
                            <Sun className="h-5 w-5" />
                          ) : (
                            <Moon className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">Toggle Theme</p>
                          <p className="text-sm text-muted-foreground">
                            Switch between light and dark mode
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                          T
                        </kbd>
                      </div>
                    </div>

                    <div
                      onClick={() => executeShortcut("top")}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <ArrowUp className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Scroll to Top</p>
                          <p className="text-sm text-muted-foreground">
                            Quickly scroll back to the top of the page
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                          Home
                        </kbd>
                      </div>
                    </div>

                    <div
                      onClick={() => executeShortcut("help")}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <HelpCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Help</p>
                          <p className="text-sm text-muted-foreground">
                            Open this help dialog
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                          Shift
                        </kbd>
                        <span className="text-xs">+</span>
                        <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                          ?
                        </kbd>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <Command className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Navigation</p>
                          <p className="text-sm text-muted-foreground">
                            Use the navigation menu to explore the site
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                          Tab
                        </kbd>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <Home className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Home Page</p>
                          <p className="text-sm text-muted-foreground">
                            Return to the home page
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                          H
                        </kbd>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      Click on any shortcut above to execute it, or use the
                      keyboard shortcuts directly while browsing the site.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Animations</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable animations throughout the site
                        </p>
                      </div>
                      <Switch
                        checked={settings.animations}
                        onCheckedChange={() => toggleSetting("animations")}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Sound Effects</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable sound effects for interactions
                        </p>
                      </div>
                      <Switch
                        checked={settings.sounds}
                        onCheckedChange={() => toggleSetting("sounds")}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Show toast notifications for actions
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications}
                        onCheckedChange={() => toggleSetting("notifications")}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">High Contrast</Label>
                        <p className="text-sm text-muted-foreground">
                          Increase contrast for better visibility
                        </p>
                      </div>
                      <Switch
                        checked={settings.highContrast}
                        onCheckedChange={() => toggleSetting("highContrast")}
                      />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      These settings are saved to your browser and will persist
                      between visits.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="mt-0">
                  <div className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <HelpCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      SyncTechX Help System
                    </h3>
                    <p className="text-center text-muted-foreground">
                      Version 1.0.0
                    </p>
                    <p className="text-center text-muted-foreground">
                      This help system provides keyboard shortcuts and settings
                      to enhance your experience on our website.
                    </p>
                    <div className="flex justify-center mt-6">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setActiveTab("shortcuts");
                          toast({
                            title: "Help System",
                            description: "Switched to Shortcuts tab",
                          });
                        }}
                      >
                        <Keyboard className="mr-2 h-4 w-4" />
                        View Shortcuts
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground text-center">
                      &copy; {new Date().getFullYear()} SyncTechX. All rights
                      reserved.
                    </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
