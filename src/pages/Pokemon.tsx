import { useNavigate, useParams } from "react-router-dom";
import PokeballPic from "../assets/pokeball.png";
import styles from "./pokemon.module.css";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getPokemon } from "../api/getPokemon";
import { PokemonInfo } from "../types/types";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { waitFor } from "../utils/utils";

const Pokemon = () => {
    const { name } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonInfo>();
    useEffect(() => {
        const getPokemonInfo = async () => {
            setIsLoading(true);
            await waitFor(500);
            const PokemonInfo = await getPokemon(name as string);
            setPokemon(PokemonInfo);
            setIsLoading(false);
        };

        getPokemonInfo();
    }, []);

    if (isLoading || !pokemon) {
        return <LoadingScreen />;
    }

    return (
        <>
            <button onClick={() => navigate(-1)} className={styles.pokeballButton}>
                <img
                    src={PokeballPic}
                    alt="pokeball"
                    className={styles.pokeballImage}
                />
                Go back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                    <div>Nr. {pokemon?.id}</div>
                    <div>
                        <img
                            className={styles.pokemonInfoImage}
                            src={pokemon?.imgSrc}
                            alt=""
                        />
                    </div>
                    <div>Hp: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pokemon;
