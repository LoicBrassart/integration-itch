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
    avatar: "",
  });
  const api = useApi();
  const dispatch = useDispatch();

  const hChange = (evt) => {
    const { name, value, type, checked, files } = evt.target;
    let newValue = null;
    switch (type) {
      case "checkbox":
        newValue = checked;
        break;
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setFormData({ ...formData, [name]: newValue });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();

    if (formData.password !== formData.passwordBis) return;
    delete formData.passwordBis; //WARN Mutation

    const finalData = Object.keys(formData).reduce((accu, key) => {
      accu.append(key, formData[key]);
      return accu;
    }, new FormData());

    api
      .post("/auth/signup", finalData)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "USER_LOGIN", payload: { ...user, token } });
        console.warn(
          "TODO !!! Remove token from Redux and implement httpOnly cookie !"
        );
        toast(`Owi, welcome ${user.name} !`);
      })
      .catch(() => {
        toast.error("Woops?");
      });
  };

  return (
    <SAuthForm onSubmit={hSubmit} method="post" enctype="multipart/form-data">
      <legend>Inscription</legend>
      <input
        type="text"
        name="email"
        placeholder="Votre email"
        onChange={hChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        onChange={hChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Votre password"
        onChange={hChange}
      />
      <input
        type="password"
        name="passwordBis"
        placeholder="Votre password (vérif.)"
        onChange={hChange}
      />
      <br />
      <input
        type="file"
        name="avatar"
        placeholder="Votre avatar"
        onChange={hChange}
      />
      <input type="submit" value="Go!" />
      <ToastContainer />
    </SAuthForm>
  );
}
