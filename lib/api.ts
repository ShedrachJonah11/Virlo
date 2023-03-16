/**
 * Mock API abstraction layer.
 * Replace these with real API calls when the backend is ready.
 *
 * Functions in this module always throw typed errors from `lib/errors`
 * (AuthError, ValidationError, NetworkError) so callers can branch
 * predictably.
 */

import {
  mockUser,
  mockStats,
  mockTrendingVideos,
  mockHooks,
  mockAnalytics,
  mockInvoices,
  mockWarmUpPlans,
  mockNotifications,
  mockRecentActivity,
} from "./mock-data";
import { AuthError, ValidationError } from "./errors";
import { isEmail, isStrongPassword } from "./validators";
import type {
  User,
  TrendingVideo,
  Hook,
  AnalyticsData,
  Invoice,
  WarmUpPlan,
  WarmUpIntensity,
  Notification,
  OnboardingData,
  Platform,
} from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * For the mock layer only: simulate transient network failures so
 * the UI's retry / error states are exercised in dev.
 */
function maybeFail(probability: number, message: string): void {
  if (process.env.NEXT_PUBLIC_MOCK_FAIL !== "1") return;
  if (Math.random() < probability) {
    throw new Error(message);
  }
}


// Auth
export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  if (!isEmail(email)) {
    throw new ValidationError("Enter a valid email address", [
      { path: "email", message: "Enter a valid email address" },
    ]);
  }
  if (!password) {
    throw new ValidationError("Password is required", [
      { path: "password", message: "Password is required" },
    ]);
  }
  await delay(800);
  return mockUser;
}

export async function signupUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const issues = [] as { path: string; message: string }[];
  if (!name.trim()) issues.push({ path: "name", message: "Name is required" });
  if (!isEmail(email))
    issues.push({ path: "email", message: "Enter a valid email address" });
  if (!isStrongPassword(password))
    issues.push({
      path: "password",
      message: "Use 8+ chars with an uppercase letter, a number and a symbol",
    });
  if (issues.length > 0) {
    throw new ValidationError("Please fix the highlighted fields", issues);
  }
  await delay(800);
  return { ...mockUser, name, email, onboardingCompleted: false };
}

export async function forgotPassword(email: string): Promise<{ ok: boolean }> {
  if (!isEmail(email)) {
    throw new ValidationError("Enter a valid email address", [
      { path: "email", message: "Enter a valid email address" },
    ]);
  }
  await delay(800);
  return { ok: true };
}

// Dashboard
export async function fetchStats() {
  await delay(500);
  return mockStats;
}

export async function fetchRecentActivity() {
  await delay(500);
  return mockRecentActivity;
}

// Warm-Up
export async function generateWarmUpPlan(
  niche: string,
  platform: Platform,
  intensity: WarmUpIntensity
): Promise<WarmUpPlan[]> {
  await delay(1200);
  void niche;
  void platform;
  void intensity;
  return mockWarmUpPlans;
}

// Viral Finder
export async function fetchTrendingVideos(
  platform?: Platform
): Promise<TrendingVideo[]> {
  await delay(700);
  maybeFail(0.1, "Failed to fetch trending videos");
  if (platform) return mockTrendingVideos.filter((v) => v.platform === platform);
  return mockTrendingVideos;
}

// Hooks
export async function generateHooks(
  niche: string,
  style: string
): Promise<Hook[]> {
  await delay(1000);
  void niche;
  void style;
  return mockHooks;
}

// Analytics
export async function fetchAnalytics(): Promise<AnalyticsData[]> {
  await delay(600);
  return mockAnalytics;
}

// Billing
export async function fetchInvoices(): Promise<Invoice[]> {
  await delay(500);
  return mockInvoices;
}

export async function updateSubscription(
  planId: string
): Promise<{ ok: boolean }> {
  await delay(800);
  void planId;
  return { ok: true };
}

// Notifications
export async function fetchNotifications(): Promise<Notification[]> {
  await delay(400);
  return mockNotifications;
}

// Settings
export async function updateProfile(data: Partial<User>): Promise<User> {
  await delay(600);
  return { ...mockUser, ...data };
}

// Onboarding
export async function completeOnboarding(
  data: OnboardingData
): Promise<{ ok: boolean }> {
  await delay(1000);
  void data;
  return { ok: true };
}
