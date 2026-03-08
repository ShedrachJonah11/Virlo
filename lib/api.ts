/**
 * Mock API abstraction layer.
 * Replace these with real API calls when the backend is ready.
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
import type {
  User,
  TrendingVideo,
  Hook,
  AnalyticsData,
  Invoice,
  WarmUpPlan,
  Notification,
  OnboardingData,
  Platform,
} from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Auth
export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  await delay(800);
  if (email && password) return mockUser;
  throw new Error("Invalid credentials");
}

export async function signupUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  await delay(800);
  if (name && email && password)
    return { ...mockUser, name, email, onboardingCompleted: false };
  throw new Error("Signup failed");
}

export async function forgotPassword(email: string): Promise<{ ok: boolean }> {
  await delay(800);
  if (email) return { ok: true };
  throw new Error("Email not found");
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
  intensity: string
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
