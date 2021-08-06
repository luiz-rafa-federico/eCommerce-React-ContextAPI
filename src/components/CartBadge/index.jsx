import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useCart } from "../../providers/CartProvider";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 26,
    top: 26,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 5px",
    color: `#5956e9 ${theme.palette.primary.color}`,
  },
}))(Badge);

export default function CartBadge() {
  const { cart } = useCart();

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="secondary">
          <ShoppingCartOutlinedIcon color="primary" fontSize="large" />
        </StyledBadge>
      </IconButton>
    </div>
  );
}
