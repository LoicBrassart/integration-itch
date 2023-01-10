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
import TopicsGallery from "@components/TopicsGallery";
import AlterUnhoveredImages from "@components/AlterUnhoveredImages";
import FibonacciGallery from "@components/FibonacciGallery";
import MultiToggle from "@components/MultiToggle";
import Searchbar from "@components/Searchbar";
import Doughnut from "@components/Doughnut";
import SApp from "./style";

/* IDEAS
mail
reinit de mdp
form d'auth complet https://www.youtube.com/watch?v=VX3srL6m2xo&ab_channel=XFIANDEV
picture comparator
chat
calendrier
modal
moteur de recherche multi-fields
https://codepen.io/aaroniker/pen/XWYpyNM
https://codepen.io/simeydotme/pen/MWXxKrP

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
              <li>Contenu</li>
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
              <li>Contenu</li>
              <li>Couleurs</li>
              <li>Décalage au survol</li>
              <li>Angle d&rsquo;illusion</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Permettre de configurer le style via des props ?</li>
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
            <Tools html css react />
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
            <Tools html css js react />
          </aside>
        </section>
      </article>
      <article>
        <Board />
      </article>
      <article>
        <h2>Authentification</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Formulaire d&apos;inscription</li>
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
                Fix l&apos;upload d&apos;image (broken React: file inputs are
                uncontrolled)
              </li>
            </ul>
            <Tools html css js react express sql />
          </aside>
        </section>
      </article>
      <article>
        <AuthForm />
        <Avatar />
      </article>
      <article>
        <h2>Multi-step form</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>
                Avoir un formulaire qui s&apos;affichera en plueisuers
                &eacute;tapes successives
              </li>
              <li>Pratiquer les formulaires en React</li>
              <li>G&eacute;rer un state complexe</li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Lien vefrs le back?</li>
            </ul>
            <Tools react />
          </aside>
        </section>
      </article>
      <article>
        <MultiTabForm />
      </article>
      <article>
        <h2>Manipulation de dates</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Avoir un PoC de manip de dates en JS ave la lib Luxon</li>
              <li>
                Voir des exemples &ldquo;simples&rdquo; de trucs faisables en
                termes de manips
              </li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>N/A</li>
            </ul>
            <Tools react />
          </aside>
        </section>
      </article>
      <article>
        <TimeHandling />
      </article>
      <article>
        <h2>Effet Hover</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>
                Reproduire un effet trouv&eacute; sur un site
                &ldquo;design&rdquo;
              </li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Fix: broken (Chrome + FFox)</li>
            </ul>
            <Tools react />
          </aside>
        </section>
      </article>
      <article>
        <HoverEffect />
      </article>
      <article>
        <h2>Miniature de galerie (source: DeviantArt)</h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Reproduire un effet trouv&eacute; sur DeviantArt</li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>N/A</li>
            </ul>
            <Tools css />
          </aside>
        </section>
      </article>
      <article>
        <TopicsGallery />
      </article>
      <article>
        <h2>Focus by blurring unhovered contents</h2>
        <h2>
          Mise en avant d&apos;un &eacute;l&eacute;ment au survol via des effets
          visuels
        </h2>
        <section>
          <main>
            <h3>Problematiques</h3>
            <ul>
              <li>Reproduire un effet trouv&eacute; sur le Web</li>
            </ul>
            <h3>Configurable</h3>
            <ul>
              <li>N/A</li>
            </ul>
          </main>
          <aside>
            <h3>Todo</h3>
            <ul>
              <li>Fix largeur (responsive)</li>
            </ul>
            <Tools css />
          </aside>
        </section>
      </article>
      <article>
        <AlterUnhoveredImages />
      </article>
      <article>
        <h2>Fibonacci Gallery</h2>
      </article>
      <article>
        <FibonacciGallery />
      </article>
      <article>
        <h2>Multi-values toggle</h2>
      </article>
      <article>
        <MultiToggle />
      </article>
      <article>
        <h2>Searchbar with separated results</h2>
      </article>
      <article>
        <Searchbar />
      </article>
      <article>
        <h2>Create a Chart</h2>
      </article>
      <article>
        <Doughnut />
      </article>
    </SApp>
  );
}

export default App;
