import buttons from "@assets/mocks/buttons";
import RadialMenu from "@components/RadialMenu";
import MenuColumn from "@components/MenuColumn";
import Menu3D from "@components/Menu3D";
import FunkyIcon from "@components/FunkyIcon";
import Tools from "@components/Tools";
import Board from "@components/Board";
import Avatar from "@components/Avatar";
import AuthForm from "@components/AuthForm";
import MultiTabForm from "@components/MultiTabForm";
import TimeHandling from "@components/TimeHandling";
import HoverEffect from "@components/HoverEffect";
import SApp from "./style";

/* IDEAS
mail
reinit de mdp
form d'auth complet https://www.youtube.com/watch?v=VX3srL6m2xo&ab_channel=XFIANDEV
picture comparator
cloudinary
upload de fichier
chat
calendrier
modal
moteur de recherche multi-fields
*/

function App() {
  return (
    <SApp>
      <article>
        <h2>Menu Radial</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Menu qui ne ressemble pas à un menu burger classique.</li>
              <li>Menu adapté pour des actions courantes ou des raccourcis</li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>Angle de départ</li>
              <li>Arc de répartition des contenus</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Resize icone burger</li>
            </ul>
            <Tools html css />
          </aside>
        </section>
      </article>
      <article>
        <RadialMenu buttons={buttons} />
      </article>
      <article>
        <h2>Menu 3D</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>
                PoC sur de la 3D isométrique (illusion d&apos;optique, pas de
                reelle 3D)
              </li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>Couleurs</li>
              <li>Décalage au survol</li>
              <li>Angle d&rsquo;illusion</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Fix some CSS variables</li>
              <li>Plus css variables to the main component through props</li>
            </ul>
            <Tools html css />
          </aside>
        </section>
      </article>
      <article>
        <Menu3D buttons={buttons} />
      </article>
      <article>
        <h2>Menu Vertical</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Avoir des pop-ins pour indiquer quel bouton est survolé</li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>
                Les etiquettes apparaissent au survol de leur position (fix du
                selecteur :hover ?)
              </li>
            </ul>
            <Tools html css />
          </aside>
        </section>
      </article>
      <article>
        <MenuColumn buttons={buttons} />
      </article>
      <article>
        <h2>Funky Icon</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Pouvoir controler les couleurs sur un SVG</li>
              <li>
                Faire un composant reutilisable pour afficher les svg issus de
                game-icons
              </li>
              <li>
                (Jouer avec l&rsquo;idée d&rsquo;un useInterval adapté à React )
              </li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>Couleurs (temps reel)</li>
              <li>Délais</li>
              <li>Icone (dans une liste pré-établie)</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Ajouter la conf pour la forme de l&apos;icone</li>
            </ul>
            <Tools html css />
          </aside>
        </section>
      </article>
      <article>
        <FunkyIcon />
      </article>
      <article>
        <h2>Drag &amp; Drop</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Implémenter le drag &amp; drop dans un projet React</li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Jouer avec plusieurs pions ou plusieurs dropzones</li>
              <li>Implémenter une logique (début de jeu ?)</li>
            </ul>
            <Tools html css />
          </aside>
        </section>
      </article>
      <article>
        <Board />
      </article>
      <article>
        <h2>Authentification</h2>
      </article>
      <article>
        <AuthForm />
        <Avatar />
      </article>
      <article>
        <h2>Multi-Step form</h2>
      </article>
      <article>
        <MultiTabForm />
      </article>
      <article>
        <h2>Manipulations de dates</h2>
      </article>
      <article>
        <TimeHandling />
      </article>
      <article>
        <h2>Hover effect</h2>
      </article>
      <article>
        <HoverEffect />
      </article>
    </SApp>
  );
}

export default App;
