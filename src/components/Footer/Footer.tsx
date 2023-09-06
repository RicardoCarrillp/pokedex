import { Link } from "react-router-dom";
import styles from "./footer.module.css";

import PokemonPic from "../../assets/pikachu.png";
import LocationPic from "../../assets/pointer.png";
import ItemsPic from "../../assets/pokeball.png";
const Footer = () => {
    const Links = [
        {
            image: PokemonPic,
            to: "/pokemons",
            name: "Pokemons",
            avaliable: true,
        },
        {
            image: ItemsPic,
            to: "/pokemons",
            name: "Items",
            avaliable: false,
        },
        {
            image: LocationPic,
            to: "/pokemons",
            name: "Map",
            avaliable: false,
        },
    ];
    return (
      <footer className={styles.footer}>
        {Links.map((link) => (
          <Link
            style={{ pointerEvents: !link.avaliable ? "none":"all"}}
            key={link.name}
            to={link.to}
            className={styles.footerLink}
          >
            <img
              src={link.image}
              alt={link.name}
              className={styles.footerIcon}
            />
            {link.name}

            {!link.avaliable && <div> (No avaliable) </div>}
          </Link>
        ))}
      </footer>
    );
};

export default Footer;
