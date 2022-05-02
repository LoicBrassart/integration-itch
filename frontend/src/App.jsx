import philo from "@assets/icons/philo.svg";
import coin from "@assets/icons/coinflip.svg";
import hyena from "@assets/icons/hyena-head.svg";
import piano from "@assets/icons/pianist.svg";
import RadialMenu from "@components/RadialMenu";
import Explanations from "@components/Explanations";
import SApp from "./style";

const buttons = [
  {
    id: 1,
    icon: philo,
    text: "Jack",
    cback: () => {
      console.warn("Jack");
    },
  },
  {
    id: 2,
    icon: coin,
    text: "Torment",
    cback: () => {
      console.warn("Torment");
    },
  },
  {
    id: 3,
    icon: hyena,
    text: "Scene",
    cback: () => {
      console.warn("Scene");
    },
  },
  {
    id: 4,
    icon: piano,
    text: "Tortuphile",
    cback: () => {
      console.warn("Tortuphile");
    },
  },
];

function App() {
  return (
    <SApp>
      <article>
        <RadialMenu buttons={buttons} />
        <Explanations>
          <h2>Menu Radial</h2>
          <h3>Problematiques</h3>
          <ul>
            <li>
              Proposer un menu qui ne ressemble pas à un menu burger classique.
            </li>
          </ul>
          Ex de props:
          <pre>
            <code>
              {`button={[
{
  id: 1,
  icon: philo,
  text: "Jack",
  cback: () => {
    console.warn("Jack");
  },
},
{
  id: 2,
  icon: coin,
  text: "Torment",
  cback: () => {
    console.warn("Torment");
  },
}]}`}
            </code>
          </pre>
          Configurable:
          <ul>
            <li>Angle de départ et arc de répartition des contenus</li>
          </ul>
          Todo:
          <ul>
            <li>Resize icone burger</li>
          </ul>
        </Explanations>
      </article>
      <article>Toto</article>
    </SApp>
  );
}

export default App;
