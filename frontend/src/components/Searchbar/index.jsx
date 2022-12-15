import { useState } from "react";
import Styled from "./style";

const results = {
  users: ["Aang", "Katara", "Soka", "Fang", "Zuko"],
  games: ["Gloom", "Wingspan", "Dark Souls", "Jungle Speed"],
  scenarii: ["Camp gobelin", "Trois soeurs", "Magefeu", "Le Procès du Fou"],
  news: ["TRIBO!", "On ferme!", "Hello World"],
  authors: ["ValhallaCode", "Sax", "Ladybug", "Fae"],
  editors: ["Hasbro", "WotC", "Bethesda", "Black Book Editions"],
};

export default function Searchbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [needle, setNeedle] = useState("");

  const hChange = (evt) => {
    const { value } = evt.target;
    setNeedle(value);
    if (!value) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <Styled>
      <input
        type="search"
        value={needle}
        onChange={hChange}
        placeholder="What're ya searchin' for ?"
      />
      <ul className={`results ${isOpen && "open"}`}>
        <li>
          <h2>Users</h2>
          <ul>
            {results.users
              .filter((res) => res.toLowerCase().includes(needle.toLowerCase()))
              .map((res) => (
                <li key={res}>{res}</li>
              ))}
          </ul>
        </li>
        <li>
          <h2>Games</h2>
          <ul>
            {results.games
              .filter((res) => res.toLowerCase().includes(needle.toLowerCase()))
              .map((res) => (
                <li key={res}>{res}</li>
              ))}
          </ul>
        </li>
        <li>
          <h2>Scenarii</h2>
          <ul>
            {results.scenarii
              .filter((res) => res.toLowerCase().includes(needle.toLowerCase()))
              .map((res) => (
                <li key={res}>{res}</li>
              ))}
          </ul>
        </li>
        <li>
          <h2>News</h2>
          <ul>
            {results.news
              .filter((res) => res.toLowerCase().includes(needle.toLowerCase()))
              .map((res) => (
                <li key={res}>{res}</li>
              ))}
          </ul>
        </li>
        <li>
          <h2>Authors</h2>
          <ul>
            {results.authors
              .filter((res) => res.toLowerCase().includes(needle.toLowerCase()))
              .map((res) => (
                <li key={res}>{res}</li>
              ))}
          </ul>
        </li>
        <li>
          <h2>Editors</h2>
          <ul>
            {results.editors
              .filter((res) => res.toLowerCase().includes(needle.toLowerCase()))
              .map((res) => (
                <li key={res}>{res}</li>
              ))}
          </ul>
        </li>
      </ul>
    </Styled>
  );
}
