import { useRef, useState } from "react";
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
  const inputRef = useRef();

  const api = useApi();
  const dispatch = useDispatch();

  const hChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    let newValue = null;
    switch (type) {
      case "checkbox":
        newValue = checked;
        break;
      case "file":
        return;
      default:
        newValue = value;
    }
    setFormData({ ...formData, [name]: newValue });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();

    if (formData.password !== formData.passwordBis) return;
    delete formData.passwordBis; // WARN Mutation

    const finalData = Object.keys(formData).reduce((accu, key) => {
      if (key === "avatar") {
        accu.append("avatar", inputRef.current.files[0]);
      } else {
        accu.append(key, formData[key]);
      }
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
    <SAuthForm onSubmit={hSubmit} encType="multipart/form-data">
      <legend>Inscription</legend>
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Votre email"
        autoComplete="email"
        onChange={hChange}
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Votre nom"
        autoComplete="nickname"
        onChange={hChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Votre password"
        autoComplete="new-password"
        onChange={hChange}
      />
      <input
        type="password"
        name="passwordBis"
        value={formData.passwordBis}
        placeholder="Votre password (vérif.)"
        autoComplete="new-password"
        onChange={hChange}
      />
      <br />
      <input
        type="file"
        name="avatar"
        // value={formData.avatar}
        placeholder="Votre avatar"
        autoComplete="photo"
        // onChange={hChange} // No hChange for file inputs (security)
        ref={inputRef}
      />
      <input type="submit" value="Go!" />
      <ToastContainer />
    </SAuthForm>
  );
}
