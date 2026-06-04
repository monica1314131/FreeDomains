import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import { subdomainAPI } from "../lib/api";
import { Loader2, CheckCircle, Info, Check, X, Eye, EyeOff } from "lucide-react";
import { Turnstile } from '@marsidev/react-turnstile';
import { Header } from "../components/header";

// Allowed email domains
const ALLOWED_EMAIL_DOMAINS = [
    'gmail.com',
    'outlook.com',
    'hotmail.com',
    'live.com',
    'yahoo.com',
    'icloud.com',
    'proton.me',
    'protonmail.com',
    'zoho.com'
];

const isAllowedEmailProvider = (email) => {
    const domain = email.toLowerCase().split('@')[1];
    return ALLOWED_EMAIL_DOMAINS.includes(domain);
};

export default function Signup() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const message = searchParams.get('message');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [legalName, setLegalName] = useState("");
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: ""
    });
    const [usernameAvailable, setUsernameAvailable] = useState(null);
    const [usernameChecking, setUsernameChecking] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        if (message === 'github_closed') {
            toast({
                title: "GitHub Signups Closed",
                description: "New accounts must use Email/Password. Existing GitHub users can still login.",
            });
        }
    }, [message, toast]);

    // Debounced username availability check
    useEffect(() => {
        if (!username) {
            setUsernameAvailable(null);
            setUsernameError("");
            return;
        }

        // Validate format first
        const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
        if (!usernameRegex.test(username)) {
            setUsernameAvailable(false);
            setUsernameError("Username must be 3-20 characters (letters, numbers, _, -)");
            return;
        }

        setUsernameChecking(true);
        setUsernameError("");

        const timeoutId = setTimeout(async () => {
            try {
                const response = await subdomainAPI.post('/auth/email/check-username', { username });
                setUsernameAvailable(response.available);
                if (response.error) {
                    setUsernameError(response.error);
                }
            } catch (err) {
                console.error('Username check error:', err);
                setUsernameAvailable(null);
            } finally {
                setUsernameChecking(false);
            }
        }, 500); // 500ms debounce

        return () => clearTimeout(timeoutId);
    }, [username]);

    // Email validation effect
    useEffect(() => {
        if (!email || !email.includes('@')) {
            setEmailError("");
            return;
        }

        if (!isAllowedEmailProvider(email)) {
            setEmailError("We currently allow only popular email providers to prevent spam and fake accounts. Please use Gmail, Outlook, Yahoo, iCloud, Proton, or Zoho.");
        } else if (email.includes('+')) {
            setEmailError("Due to security reasons, This email is not allowed.");
        } else {
            setEmailError("");
        }
    }, [email]);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            toast({
                variant: "destructive",
                title: "CAPTCHA Required",
                description: "Please complete the verification check. If it's not loading, try refreshing the page.",
            });
            return;
        }

        if (emailError) {
            toast({
                variant: "destructive",
                title: "Invalid Email Provider",
                description: emailError,
            });
            return;
        }

        if (!usernameAvailable) {
            toast({
                variant: "destructive",
                title: "Invalid Username",
                description: usernameError || "Please choose an available username.",
            });
            return;
        }

        if (!agreedToTerms) {
            toast({
                variant: "destructive",
                title: "Agreement Required",
                description: "You must agree to the Terms of Service, Privacy Policy, AUP, and confirm your details are correct.",
            });
            return;
        }

        setIsLoading(true);

        try {
            await subdomainAPI.post('/auth/email/register', {
                name,
                email,
                password,
                username,
                legalName,
                address,
                captchaToken
            });
            navigate(`/verify-email?email=${encodeURIComponent(email)}`);
        } catch (err) {
            const errorMessage = err.data?.error || err.message || "Could not create account. Please try again.";

            toast({
                variant: "destructive",
                title: "Registration Failed",
                description: errorMessage,
            });
            setCaptchaToken(null); // Reset captcha on error
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F0] px-4 font-sans">
                <div className="w-full max-w-md bg-white border-2 border-[#E5E3DF] p-8 md:p-10 rounded-xl text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Check your email</h1>
                    <p className="text-[#4A4A4A] mb-6">
                        We've sent a verification link to <strong>{email}</strong>. Please click the link to activate your account.
                    </p>
                    <Link to="/login" className="text-black font-medium hover:underline">
                        Return to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-4 py-10" style={{ paddingTop: 'calc(4rem + var(--incident-height, 0px) + 2.5rem)' }}>
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/80 p-8 md:p-10">

                {/* Header */}
                <div className="mb-8 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Create Account</h1>
                        <p className="text-slate-500 text-sm">Sign up to register your free subdomains</p>
                    </div>
                    <Link to="/" className="flex items-center gap-2 shrink-0">
                        <img src="/stackryze_logo1.png" alt="Stackryze Logo" className="h-8 w-auto" />
                    </Link>
                </div>

                <form onSubmit={handleSignup} className="space-y-5">
                    {/* Row 1: Username + Legal Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Username <span className="text-slate-400 font-normal">(Unique ID)</span></label>
                            <div className="relative">
                                <input
                                    type="text" required value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={`w-full px-4 py-2.5 pr-10 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all ${usernameError ? 'border-red-400' : usernameAvailable === true ? 'border-emerald-400' : 'border-slate-200'}`}
                                    placeholder="johndoe123"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    {usernameChecking && <Loader2 className="w-4 h-4 animate-spin text-slate-400" />}
                                    {!usernameChecking && usernameAvailable === true && <Check className="w-4 h-4 text-emerald-500" />}
                                    {!usernameChecking && (usernameAvailable === false || usernameError) && <X className="w-4 h-4 text-red-500" />}
                                </div>
                            </div>
                            {usernameError && <p className="text-xs text-red-500 mt-1">{usernameError}</p>}
                            {usernameAvailable === true && <p className="text-xs text-emerald-600 mt-1">Username available!</p>}
                            {usernameAvailable === false && !usernameError && <p className="text-xs text-red-500 mt-1">Username already taken</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Legal Name</label>
                            <input
                                type="text" required value={legalName}
                                onChange={(e) => setLegalName(e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                                placeholder="John Michael Doe"
                            />
                        </div>
                    </div>

                    {/* Row 2: Email + Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                            <input
                                type="email" required value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all ${emailError ? 'border-red-400' : 'border-slate-200'}`}
                                placeholder="name@example.com"
                            />
                            {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} required minLength={8}
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 pr-10 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                                    placeholder="Minimum 8 characters"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Address */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Address</label>
                        <div className="space-y-3">
                            <input
                                type="text" required value={address.street}
                                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                                placeholder="Street Address"
                            />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <input type="text" required value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="City" />
                                <input type="text" required value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="State" />
                                <input type="text" required value={address.postalCode} onChange={(e) => setAddress({ ...address, postalCode: e.target.value })} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="Postal Code" />
                                <input type="text" required value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="Country" />
                            </div>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 py-2">
                        <input
                            type="checkbox" id="agreedToTerms" checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded border-slate-300 focus:ring-2 focus:ring-slate-900 shrink-0" required
                        />
                        <label htmlFor="agreedToTerms" className="text-sm text-slate-600 leading-relaxed">
                            I agree to the{" "}
                            <Link to="/terms" target="_blank" className="text-slate-900 font-semibold hover:underline">Terms</Link>,{" "}
                            <Link to="/privacy" target="_blank" className="text-slate-900 font-semibold hover:underline">Privacy Policy</Link>,{" "}
                            <Link to="/aup" target="_blank" className="text-slate-900 font-semibold hover:underline">AUP</Link>,
                            and confirm all details are correct.
                        </label>
                    </div>

                    {/* Captcha */}
                    <div className="flex justify-center py-2">
                        <Turnstile
                            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                            onSuccess={(token) => setCaptchaToken(token)}
                            onError={(error) => {
                                console.error('Turnstile error:', error);
                                toast({ variant: "destructive", title: "CAPTCHA Error", description: "Unable to load verification. Please refresh the page or contact support if this persists." });
                            }}
                            options={{ theme: 'light' }}
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isLoading || !captchaToken}
                        className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50"
                    >
                        {isLoading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin w-4 h-4" /> Creating Account...</span> : "Create Account"}
                    </button>
                </form>

                <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-slate-900 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-slate-500">
                Need help? <a href="https://discord.gg/wr7s97cfM7" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-medium hover:underline">Join our Discord</a> or email <a href="mailto:support@stackryze.com" className="text-slate-900 font-medium hover:underline">support@stackryze.com</a>
            </div>

            <p className="mt-8 text-xs text-slate-400">
                &copy; 2026 Stackryze domains
            </p>
        </div>
        </>
    );
}
