import './Appli.scss';
import useLocalStorageState from './hooks/useLocalStorageState';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import PiedDePage from './PiedDePage';
import { Switch,Route } from 'react-router-dom';

export default function Appli() { 
  const etatPanier = useLocalStorageState({}, "panier");
  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        
        <Switch>
          <Route path="/" component={Accueil} exact/>
          <Route path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} exact />
          </Route>
          <Route path="/a-propos-de-nous" exact>
            <Apropos />
          </Route>
          <Route path="/contactez-nous" component={Contact} exact />
        </Switch>
        
      </section>
      <PiedDePage />
    </div>
  );
}