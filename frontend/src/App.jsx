import RadialMenu from "@components/RadialMenu";
import MenuColumn from "@components/MenuColumn";
import Menu3D from "@components/Menu3D";
import FunkyIcon from "@components/FunkyIcon";
import buttons from "@assets/mocks/buttons";
import SApp from "./style";

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
      <article>Essai coloration SVG</article>
      <article>
        <FunkyIcon />
      </article>
    </SApp>
  );
}

export default App;
