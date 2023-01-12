import { useState } from "react";
import useApi from "@services/useApi";
import Style from "./style";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const api = useApi();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/contact", data)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Style>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom: <input onChange={handleChange} type="text" name="name" />
        </label>
        <label htmlFor="surname">
          Prénom:
          <input onChange={handleChange} type="text" name="surname" />
        </label>
        <label htmlFor="phone">
          Téléphone:
          <input onChange={handleChange} type="text" name="phone" />
        </label>
        <label htmlFor="email">
          Email:
          <input onChange={handleChange} type="email" name="email" />
        </label>
        <label htmlFor="message">
          Message:
          <textarea onChange={handleChange} name="message" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </Style>
  );
}
