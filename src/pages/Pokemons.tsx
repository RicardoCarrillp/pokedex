import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

import styles from './pokemons.module.css';
import { getPokemons } from "../api/getPokemons";
import { PokemonsType } from "../types/types";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { waitFor } from "../utils/utils";
const Pokemons = () => {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons, setPokemons] = useState<PokemonsType[]>([]);

    useEffect(() => {
        const getAllPokemons = async () => {
            setIsLoading(true);
            await waitFor(700);

            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
        }

        getAllPokemons();
    }, [])

    if (isLoading || !pokemons) {
        return <LoadingScreen />;
    }

    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemons) => pokemons.name.toLowerCase().match(query.toLowerCase()));
    return (
        <>
            <Header query={query} setQuery={setQuery} />

            <main>
                <nav className={styles.nav}>
                    {filteredPokemons?.slice(0, 151).map((pokemon: PokemonsType) => (
                        <Link
                            key={pokemon.id}
                            to={`/pokemons/${pokemon.name.toLowerCase()}`}
                            className={styles.listItem}
                        >
                            <img
                                className={styles.listItemIcon}
                                src={pokemon.imgSrc}
                                alt="Bulbasaur"
                            />
                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </main>
            <Footer />
        </>
    );
};

export default Pokemons;
