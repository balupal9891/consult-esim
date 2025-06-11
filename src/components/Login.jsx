
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    let userInitial = {
        username: '',
        password: '',
    }
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(userInitial);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        const response = await fetch('/auth/sign-in', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        console.log(response)
        if (response) {

            // Store data in Appcontext and redirct -- leftover ----

            // navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-[url('/public/esim3.avif')] bg-sky-600 bg-center flex items-center justify-center bg-cover bg-no-repeat relative">
           
            <div className="relative z-10 bg-blue-950 text-gray-900 dark:text-white rounded-2xl shadow-lg p-10 w-full max-w-sm ">
                <h2 className="text-3xl font-bold mb-6 text-center">Login Account</h2>

                <form className="" onSubmit={handleLoginSubmit}>
                    <div>
                        <label className="block mb-1">Username or Email</label>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            className="w-full py-2 rounded-md border border-gray-300 text-center"
                            required
                            value={user?.username}
                            onChange={(e) => setUser(prev => ({ ...user, username: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full py-2 rounded-md border border-gray-300 outline-none pr-10 text-center"
                                required
                                value={user?.password}
                                onChange={(e) => setUser(prev => ({ ...user, password: e.target.value }))}
                            />
                            <span
                                className="absolute right-3 top-2.5 cursor-pointer text-gray-300 "
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-lg my-1">
                        <a href="/" className="text-blue-300 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-300 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}