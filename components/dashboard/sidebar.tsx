"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Flame,
  TrendingUp,
  Zap,
  BarChart3,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/use-app-store";
import { useAuthStore } from "@/store/use-auth-store";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { ROUTES } from "@/lib/constants/routes";

const navItems = [
  { href: ROUTES.dashboard, label: "Dashboard", icon: LayoutDashboard },
  { href: ROUTES.warmup, label: "Warm Up Engine", icon: Flame },
  { href: ROUTES.viralFinder, label: "Viral Finder", icon: TrendingUp },
  { href: ROUTES.hooks, label: "Hook Generator", icon: Zap },
  { href: ROUTES.analytics, label: "Analytics", icon: BarChart3 },
  { href: ROUTES.billing, label: "Billing", icon: CreditCard },
  { href: ROUTES.settings, label: "Settings", icon: Settings },
];

import { getInitials } from "@/lib/initials";

function SidebarNav({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-14 items-center gap-2 px-4">
        <Flame className="size-6 shrink-0 text-primary" />
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight">Virlo</span>
        )}
      </div>

      <Separator />

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-muted hover:text-foreground",
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20"
                  : "text-muted-foreground",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <Separator />

      {/* User info */}
      {user && (
        <div
          className={cn(
            "flex items-center gap-3 p-4",
            collapsed && "justify-center px-2"
          )}
        >
          <Avatar size="default">
            {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium">{user.name}</span>
              <Badge
                variant="secondary"
                className="mt-1 w-fit text-[10px] capitalize"
              >
                {user.plan}
              </Badge>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen);
  const toggleSidebar = useAppStore((s) => s.toggleSidebar);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden h-screen flex-col border-r bg-card transition-all duration-300 lg:flex",
          sidebarOpen ? "w-64" : "w-[68px]"
        )}
      >
        <div className="relative flex h-full flex-col">
          <SidebarNav collapsed={!sidebarOpen} />

          {/* Collapse toggle */}
          <Button
            variant="outline"
            size="icon-sm"
            className="absolute -right-3 top-[18px] z-10 hidden rounded-full lg:flex"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <ChevronLeft className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
          </Button>
        </div>
      </aside>
    </>
  );
}

export function MobileSidebar() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen);
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <SidebarNav collapsed={false} />
      </SheetContent>
    </Sheet>
  );
}

export function MobileMenuButton() {
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <Menu className="size-5" />
      <span className="sr-only">Open menu</span>
    </Button>
  );
}
