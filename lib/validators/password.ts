/** Result of a password strength check. */
export interface PasswordStrength {
  /** 0 (weak) .. 4 (strong). */
  score: 0 | 1 | 2 | 3 | 4;
  /** Plain-English summary of what's still missing. */
  feedback: string[];
}

/**
 * Cheap, deterministic password strength estimator.
 * Doesn't replace zxcvbn, but covers the common rules.
 */
export function getPasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score += 1;
  else feedback.push("Use at least 8 characters.");

  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("Include an uppercase letter.");

  if (/[0-9]/.test(password)) score += 1;
  else feedback.push("Include a number.");

  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  else feedback.push("Include a symbol.");

  return { score: score as PasswordStrength["score"], feedback };
}

export function isStrongPassword(password: string): boolean {
  return getPasswordStrength(password).score >= 3;
}
