const LoginPage = () => {
  return (
    <main className="h-screen grid place-items-center">
      <form className="m-5 p-10 border border-black rounded-lg flex flex-col items-center justify-center hover:bg-pink-300 transition delay-50 duration-500">
        <h1 className="font-bold text-xl mb-10">Sign in to your account</h1>
        <label htmlFor="email" className="font-semibold text-xl ">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="h-10 w-96 px-3 border border-black rounded-md mb-4"
        />
        <label htmlFor="password" className="font-semibold text-xl">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="h-10 w-96 px-3 border border-black rounded-md mb-5"
        />
        <button
          type="submit"
          className="font-semibold text-xl border-1 outline outline-1 bg-white rounded-md py-1.5 px-4 hover:bg-yellow-300 transition delay-50 duration-500"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
