
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchParams] = useSearchParams();
    
    const url = "http://localhost:3000/products?" + searchParams;

    const {data: items, loading, error} = useFetch(url);

  return (
    <div>
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
  )
}

export default Search