"use client";
import { useState } from "react";

interface AuthModalProps {
  initialTab?: "signin" | "signup";
  onClose: () => void;
}

export default function AuthModal({
  initialTab = "signin",
  onClose,
}: AuthModalProps) {
  const [tab, setTab] = useState<"signin" | "signup">(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [signinForm, setSigninForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="auth-modal__overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="auth-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {tab === "signin" ? (
          <>
            <h2 className="auth-modal__title">Welcome Back</h2>
            <p className="auth-modal__subtitle">
              Sign in to your SHOP.CO account
            </p>

            <div className="auth-modal__field">
              <label className="auth-modal__label">Email</label>
              <div className="auth-modal__input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={signinForm.email}
                  onChange={(e) =>
                    setSigninForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="auth-modal__input"
                />
                <span className="auth-modal__input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                      stroke="#9ca3af"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="#9ca3af"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="auth-modal__field">
              <label className="auth-modal__label">Password</label>
              <div className="auth-modal__input-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={signinForm.password}
                  onChange={(e) =>
                    setSigninForm((f) => ({ ...f, password: e.target.value }))
                  }
                  className="auth-modal__input"
                />
                <button
                  className="auth-modal__eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>

            <div className="auth-modal__row">
              <label className="auth-modal__checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <button className="auth-modal__text-btn">Forgot password?</button>
            </div>

            <button className="auth-modal__submit">Sign In</button>

            <p className="auth-modal__divider">Or continue with</p>
            <div className="auth-modal__socials">
              <button className="auth-modal__social-btn">
                <GoogleIcon />
              </button>
              <button className="auth-modal__social-btn">
                <FacebookIcon />
              </button>
            </div>

            <p className="auth-modal__footer">
              Don&apos;t have an account?{" "}
              <button
                className="auth-modal__link-btn"
                onClick={() => setTab("signup")}
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="auth-modal__title">Create Account</h2>
            <p className="auth-modal__subtitle">
              Join SHOP.CO and start shopping
            </p>

            <div className="auth-modal__name-row">
              <div className="auth-modal__field">
                <label className="auth-modal__label">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  value={signupForm.firstName}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, firstName: e.target.value }))
                  }
                  className="auth-modal__input auth-modal__input--plain"
                />
              </div>
              <div className="auth-modal__field">
                <label className="auth-modal__label">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={signupForm.lastName}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, lastName: e.target.value }))
                  }
                  className="auth-modal__input auth-modal__input--plain"
                />
              </div>
            </div>

            <div className="auth-modal__field">
              <label className="auth-modal__label">Email Address</label>
              <div className="auth-modal__input-wrap">
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  value={signupForm.email}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="auth-modal__input"
                />
                <span className="auth-modal__input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      stroke="#9ca3af"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 7l10 7 10-7"
                      stroke="#9ca3af"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="auth-modal__field">
              <label className="auth-modal__label">Password</label>
              <div className="auth-modal__input-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={signupForm.password}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, password: e.target.value }))
                  }
                  className="auth-modal__input"
                />
                <button
                  className="auth-modal__eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              <ul className="auth-modal__hints">
                <li>At least 8 characters</li>
                <li>Upper &amp; lowercase letters</li>
                <li>At least one number</li>
              </ul>
            </div>

            <div className="auth-modal__field">
              <label className="auth-modal__label">Confirm Password</label>
              <div className="auth-modal__input-wrap">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={signupForm.confirmPassword}
                  onChange={(e) =>
                    setSignupForm((f) => ({
                      ...f,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className="auth-modal__input"
                />
                <button
                  className="auth-modal__eye-btn"
                  onClick={() => setShowConfirm((v) => !v)}
                >
                  <EyeIcon open={showConfirm} />
                </button>
              </div>
            </div>

            <label className="auth-modal__terms">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>
                I agree to the{" "}
                <button className="auth-modal__link-btn">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button className="auth-modal__link-btn">Privacy Policy</button>
              </span>
            </label>

            <button className="auth-modal__submit">Create Account</button>

            <p className="auth-modal__divider">Or sign up with</p>
            <div className="auth-modal__socials">
              <button className="auth-modal__social-btn">
                <GoogleIcon />
              </button>
              <button className="auth-modal__social-btn">
                <FacebookIcon />
              </button>
            </div>

            <p className="auth-modal__footer">
              Already have an account?{" "}
              <button
                className="auth-modal__link-btn"
                onClick={() => setTab("signin")}
              >
                Sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1"
        y1="1"
        x2="23"
        y2="23"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="#9ca3af" strokeWidth="1.5" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
