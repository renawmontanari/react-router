
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

import './Home.css';

const Home = () => {
    // Carregamento de dados
    const url = 'http://localhost:3000/products';

    const {data: items, loading, error} = useFetch(url);

  return (
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className="products">
            {items && items.map(item => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Color: {item.color}</p>
                    <p>R$: {item.price}</p>
                    {/* Rota dinamica */}
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Home;