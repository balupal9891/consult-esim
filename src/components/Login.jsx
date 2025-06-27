
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../appContext/UserContext";
import { useFormik } from "formik";
import toast from "react-hot-toast";

export default function LoginPage() {

    const { setUserInContext } = useUser();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values) => {
            setLoading(true)
            const response = await fetch('https://consultit-esim.onrender.com/api/auth/sign-in', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName: values.username, password: values.password }),
            })
            setLoading(false);
            if (response.status == 200) {
                const data = await response.json();
                setUserInContext(data);
                navigate('/dashboard');
            }
            else{
                toast.error('Invalid Credentials')
            }
        }
    })

    return (
        <div className="min-h-screen bg-[url('/public/esim3.avif')] bg-sky-600 bg-center flex items-center justify-center bg-cover bg-no-repeat relative">

            <div className="relative z-10 bg-blue-950 text-gray-900 dark:text-white rounded-2xl shadow-lg p-10 w-full max-w-sm ">
                <h2 className="text-3xl font-bold mb-6 text-center">Login Account</h2>

                <form className="" onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="block mb-1">Username or Email</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Username or Email"
                            className="w-full py-2 rounded-md border border-gray-300 text-center"
                            required
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full py-2 rounded-md border border-gray-300 outline-none pr-10 text-center"
                                required
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onKeyDown={(e)=>{
                                    if(e.key == "enter")
                                        formik.handleSubmit()
                                }}
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
                        {loading ? <span className="loading loading-spinner loading-lg"></span>: 'Login'}
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