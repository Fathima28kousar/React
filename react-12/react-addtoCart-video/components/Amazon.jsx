// Amazon.js
import { list } from "../data";
import Cards from "./Cards";

const Amazon = ({ handleclick, cart }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {list.map((item) => (
          <Cards
            key={item.id}
            item={item}
            handleclick={handleclick}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default Amazon;
