import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';
import fbAppli from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAB1bpsWFNArALnECEKBRvNvkucnWE3eA",
  authDomain: "panier-achats-react.firebaseapp.com",
  databaseURL: "https://panier-achats-react-default-rtdb.firebaseio.com",
  projectId: "panier-achats-react",
  storageBucket: "panier-achats-react.appspot.com",
  messagingSenderId: "1061179620791",
  appId: "1:1061179620791:web:fe5c649b209e5a2a3d7c32",
  measurementId: "G-020DCXGPX2"
};

export default function ListeProduits(props) {
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>        
        {tabProduits.map(prd => 
         <Produit nom={prd.nom} prix={prd.prix} id={prd.id} etatPanier={props.etatPanier} key={prd.id} />
        )}
      </ul>
    </div>
  );
}