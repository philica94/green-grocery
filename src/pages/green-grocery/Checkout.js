import { useSelector } from 'react-redux';

import CartListSummary from '../../components/green-grocery/checkout/CartListSummary';
import EmptyCart from '../../components/green-grocery/checkout/EmptyCart';
// import OrderWithoutRegistrationForm from '../../components/green-grocery/checkout/OrderWithoutRegistrationForm';
import Login from '../../components/green-grocery/login/Login';

const Checkout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);

  return (
    <>
      <CartListSummary />
      {cartIsEmpty && <EmptyCart />}
      {!isLoggedIn && <Login headerContent='I already have an account' pathTo='/green-grocery/checkout' />}
      {/* {!isLoggedIn && <OrderWithoutRegistrationForm />} */}
    </>
  );
};

export default Checkout;
