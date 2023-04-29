import {
  isEmail,
  isHttpUrl,
  isUsername,
  getPasswordStrength,
} from "@/lib/validators";

const _e: boolean = isEmail("a@b.co");
const _u: boolean = isHttpUrl("https://example.com");
const _h: boolean = isUsername("@alex");
const _s: number = getPasswordStrength("Pass1!").score;

void _e;
void _u;
void _h;
void _s;
