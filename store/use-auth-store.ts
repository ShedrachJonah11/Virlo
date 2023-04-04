import { create } from "zustand";
import type { User } from "@/types";
import { mockUser } from "@/lib/mock-data";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  /** ISO timestamp of the last successful login. Null when logged out. */
  loginAt: string | null;
  login: (user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  updateUser: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: mockUser,
  isAuthenticated: true,
  isLoading: false,
  loginAt: new Date().toISOString(),
  login: (user) =>
    set({
      user,
      isAuthenticated: true,
      loginAt: new Date().toISOString(),
    }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      loginAt: null,
    }),
  setLoading: (isLoading) => set({ isLoading }),
  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    })),
}));

/** Selector: returns the user or throws — for routes that require auth. */
export const selectUserOrThrow = (s: AuthState): User => {
  if (!s.user) throw new Error("Expected an authenticated user");
  return s.user;
};

/** Selector: true when the current user is on the given (or higher) plan. */
const PLAN_RANK: Record<NonNullable<User["plan"]>, number> = {
  free: 0,
  starter: 1,
  pro: 2,
};
export const selectHasPlan =
  (minimum: User["plan"]) =>
  (s: AuthState): boolean =>
    s.user ? PLAN_RANK[s.user.plan] >= PLAN_RANK[minimum] : false;

