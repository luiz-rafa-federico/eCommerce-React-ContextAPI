import { ProductCard } from "./styles";
import { useCart } from "../../providers/CartProvider";
import Button from "../Button";

const Product = ({ product, isRemovable = false }) => {
  const { addToCart, removeFromCart } = useCart();

  const { id, title, priceFormatted, image } = product;

  return (
    <ProductCard>
      <li key={id}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="productInfo">
          <strong>{title}</strong>
          <div>
            <span>{priceFormatted}</span>
          </div>
          {isRemovable ? (
            <Button type="button" onClick={() => removeFromCart(id)}>
              <span>Remover do Carrinho</span>
            </Button>
          ) : (
            <Button type="button" onClick={() => addToCart(product, id)}>
              <span>Adicionar ao Carrinho</span>
            </Button>
          )}
        </div>
      </li>
    </ProductCard>
  );
};

export default Product;
