import styles from "./header.module.css";

type headerProps = {
    query:string;
    setQuery:(query:string)=>void;
}

const Header = ({ query, setQuery }: headerProps) => {
  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a Pokemon"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
    </header>
  );
};

export default Header;
