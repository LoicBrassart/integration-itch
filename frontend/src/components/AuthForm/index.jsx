import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import useApi from "@services/useApi";
import SAuthForm from "./style";

export default function AuthForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    passwordBis: "",
  });
  const api = useApi();
  const dispatch = useDispatch();

  const hChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    if (formData.password !== formData.passwordBis) return;

    api
      .post("/auth/signup", { ...formData, passwordBis: null })
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "USER_LOGIN", payload: user });
        toast(`Owi, welcome ${user.name} !`);
      })
      .catch(() => {
        toast.error("Woops?");
      });
  };

  return (
    <SAuthForm onSubmit={hSubmit}>
      <input type="text" name="email" onChange={hChange} />
      <input type="text" name="name" onChange={hChange} />
      <input type="password" name="password" onChange={hChange} />
      <input type="password" name="passwordBis" onChange={hChange} />
      <input type="submit" />
      <ToastContainer />
    </SAuthForm>
  );
}
