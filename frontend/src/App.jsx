import philo from "@assets/icons/philo.svg";
import coin from "@assets/icons/coinflip.svg";
import hyena from "@assets/icons/hyena-head.svg";
import piano from "@assets/icons/pianist.svg";
import RadialMenu from "@components/RadialMenu";
import MenuColumn from "@components/MenuColumn";
import Menu3D from "@components/Menu3D";
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
        <h2>Menu Radial</h2>
        <h3>Problematiques</h3>
        <ul>
          <li>
            Proposer un menu qui ne ressemble pas à un menu burger classique.
          </li>
        </ul>
        Configurable:
        <ul>
          <li>Angle de départ et arc de répartition des contenus</li>
        </ul>
        Todo:
        <ul>
          <li>Resize icone burger</li>
        </ul>
      </article>
      <article>
        <RadialMenu buttons={buttons} />
      </article>
      <article>Menu 3D</article>
      <article>
        <Menu3D buttons={buttons} />
      </article>
      <article>Menu vertical</article>
      <article>
        <MenuColumn buttons={buttons} />
      </article>
    </SApp>
  );
}

export default App;
