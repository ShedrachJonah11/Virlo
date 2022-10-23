/**
 * Per-plan quotas. Mirror these on the server when the real
 * billing integration lands.
 */
export const PLAN_LIMITS = {
  free: {
    warmupAccounts: 1,
    viralSearchesPerDay: 5,
    hooksPerDay: 10,
  },
  starter: {
    warmupAccounts: 5,
    viralSearchesPerDay: 50,
    hooksPerDay: 100,
  },
  pro: {
    warmupAccounts: Number.POSITIVE_INFINITY,
    viralSearchesPerDay: Number.POSITIVE_INFINITY,
    hooksPerDay: Number.POSITIVE_INFINITY,
  },
} as const;

export type PlanId = keyof typeof PLAN_LIMITS;
