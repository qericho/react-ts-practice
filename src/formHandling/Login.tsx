import { useState } from "react";
interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-5">
      <h2 className="mb-5">Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <button
          type="submit"
          disabled={!formData.username || !formData.password}
          className="mt-5 border py-2 w-full hover:bg-yellow-500 cursor-pointer disabled:opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
