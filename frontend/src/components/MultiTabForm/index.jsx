import { useState } from "react";
import SMultiTabForm from "./style";

export default function MultiTabForm() {
  const [formData, setFormData] = useState({});
  const [currStep, setCurrStep] = useState(1);

  const hPrev = () => {
    setCurrStep(Math.max(1, currStep - 1));
  };
  const hNext = () => {
    setCurrStep(Math.min(4, currStep + 1));
  };

  const hChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    console.log("Here we send everything!");
  };

  return (
    <SMultiTabForm onSubmit={hSubmit}>
      <fieldset className={currStep === 1 ? "active" : "inactive"}>
        <legend>1/ Qui es tu ?</legend>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={hChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Your first name"
          value={formData.firstName}
          onChange={hChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Your last name"
          value={formData.lastName}
          onChange={hChange}
        />
      </fieldset>
      <fieldset className={currStep === 2 ? "active" : "inactive"}>
        <legend>2/ Sécurité</legend>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={formData.password}
          onChange={hChange}
        />
        <input
          type="password"
          name="passwordBis"
          placeholder="Your password (check)"
          value={formData.passwordBis}
          onChange={hChange}
        />
        <select
          name="securityQuestion"
          onChange={hChange}
          value={formData.securityQuestion}
        >
          <option>--- Question de sécurité ? ---</option>
          <option value="petName">Le nom de ton axolotl ?</option>
          <option value="grannyBirthYear">L&apos;âge de ta mamie ?</option>
          <option value="crushEyesColor">
            La couleur des yeux de ton premier coup de coeur ?
          </option>
        </select>
        <input
          type="text"
          name="securityAnswer"
          placeholder="Your chosen question's answer is..."
          value={formData.securityAnswer}
          onChange={hChange}
        />
      </fieldset>
      <fieldset className={currStep === 3 ? "active" : "inactive"}>
        <legend>3/ Préférences</legend>
        <input
          type="text"
          name="favPets"
          placeholder="Are you a Cat or Dog person ?"
          value={formData.favPets}
          onChange={hChange}
        />
        <input type="radio" name="favTheme" value="Light Theme" />
        Light Theme
        <input type="radio" name="favTheme" value="Dark Theme" />
        Dark Theme
      </fieldset>
      <fieldset className={currStep === 4 ? "active" : "inactive"}>
        <legend>?/ Récap</legend>
        <pre>
          {JSON.stringify(
            formData,
            [
              "email",
              "securityQuestion",
              "securityAnswer",
              "firstName",
              "lastName",
              "favPets",
            ],
            4
          )}
        </pre>
        {/* Tu remarqueras que je n'ai pas affiché ton password ni ta réponse de
        sécurité... T'aurais eu l'air malin ! */}
        <input type="submit" />
      </fieldset>
      <button type="button" onClick={hPrev}>
        Prev.
      </button>
      <button type="button" onClick={hNext}>
        Next
      </button>
    </SMultiTabForm>
  );
}
