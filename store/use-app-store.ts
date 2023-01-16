import { create } from "zustand";
import type { Notification } from "@/types";
import { mockNotifications } from "@/lib/mock-data";

interface AppState {
  sidebarOpen: boolean;
  notifications: Notification[];
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  setNotifications: (notifications: Notification[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  notifications: mockNotifications,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  markNotificationRead: (id) =>
    set((s) => ({
      notifications: s.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  markAllNotificationsRead: () =>
    set((s) => ({
      notifications: s.notifications.map((n) => ({ ...n, read: true })),
    })),
  setNotifications: (notifications) => set({ notifications }),
}));

/** Convenience selector: number of unread notifications. */
export const selectUnreadCount = (s: { notifications: Notification[] }) =>
  s.notifications.filter((n) => !n.read).length;
