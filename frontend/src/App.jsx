import philo from "@assets/philo.svg";
import coin from "@assets/coinflip.svg";
import hyena from "@assets/hyena-head.svg";
import piano from "@assets/pianist.svg";
import RadialMenu from "@components/RadialMenu";

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
  return <RadialMenu buttons={buttons} />;
}

export default App;
