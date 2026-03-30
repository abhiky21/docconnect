export default function Signup() {
  const handleSignup = async () => {
    await api.post("/signup", {
      name,
      email,
      password,
    });
  };
}
