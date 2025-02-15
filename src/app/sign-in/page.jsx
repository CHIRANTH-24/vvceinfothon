"use client";

import React from "react";

export default function SignIn() {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500/50 to-blue-400/50 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1600x900/?water')",
            }}
        >
            <div className="bg-white/85 p-6 md:p-8 rounded-xl shadow-xl max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold text-blue-600">Smart Water Management</h1>

                <form className="mt-4 space-y-4">
                    <div className="text-left">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="text-left">
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-1" /> Remember me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-sm">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
}
