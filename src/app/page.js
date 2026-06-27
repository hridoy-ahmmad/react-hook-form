"use client";

import { useForm } from "react-hook-form";


export default function Home() {
  const { register, handleSubmit, formState: { errors }, } = useForm()

  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-5">
        <h2 className="text-3xl font-bold text-center">Register</h2>

        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500">- Name is required*</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            {...register('email', { required: true })}
            aria-invalid={errors.email ? 'true' : 'false'}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email?.type === 'required' && (
            <p role="alert" className="text-red-500"> - Email is required*</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input
            {...register('password', { required: true })}
            aria-invalid={errors.password ? 'true' : 'false'}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password?.type === 'required' && (
            <p role="alert" className="text-red-500"> - Password is required*</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            {...register('confirmPassword', { required: true })}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
           {errors.confirmPassword?.type === 'required' && (
            <p role="alert" className="text-red-500"> Please Re-type your password</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
