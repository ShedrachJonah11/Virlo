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

/**
 * Minimal HTML wrapper. Inlines a single brand color block so the
 * email renders even with all styles stripped (most email clients).
 */
export function wrapHtml(title: string, body: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${title}</title></head>
<body style="font-family: -apple-system, system-ui, sans-serif; color: #111; padding: 24px; max-width: 560px;">
<h1 style="font-size: 18px; margin: 0 0 16px;">${title}</h1>
${body}
</body></html>`;
}

