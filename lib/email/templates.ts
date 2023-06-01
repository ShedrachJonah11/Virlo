import { APP_NAME } from "@/lib/constants";

/** Subject + plain-text body for a welcome email. */
export function welcomeEmail(name: string) {
  return {
    subject: `Welcome to ${APP_NAME}, ${name}!`,
    body: `Hi ${name},

Thanks for joining ${APP_NAME}. To get started:
  1. Pick a niche and the platforms you want to grow on.
  2. Generate your first warm-up plan.
  3. Explore the Viral Finder for ideas in your niche.

— The ${APP_NAME} team`,
  };
}

/** Subject + plain-text body for a password-reset email. */
export function passwordResetEmail(resetUrl: string) {
  return {
    subject: `Reset your ${APP_NAME} password`,
    body: `Use the link below to reset your password. It expires in 60 minutes.

${resetUrl}

If you didn't request this, ignore this email.`,
  };
}
