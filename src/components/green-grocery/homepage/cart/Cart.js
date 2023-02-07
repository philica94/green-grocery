import { useSelector } from 'react-redux';
import Modal from '../../../UI/Modal';
import CartHeader from '../layout/CartHeader';
import CartProduct from './CartProduct';
import { selectTotalCartItemsAmount, selectTotalCartItemsPrice } from '../../../../store';
import { Link } from 'react-router-dom';

const Cart = ({ openModal, showModal, closeModal }) => {
  const cart = useSelector((state) => state.cart);
  const totalItemsPrice = useSelector(selectTotalCartItemsPrice);

  const cartList = cart.items.map((item) => <CartProduct key={item.id} {...item} />);
  const emptyCart = <h5 className='d-flex justify-content-center m-5'>Your cart is empty...</h5>;

  const additionalContent = (
    <div className='d-block'>
      <h4>Total price: ${totalItemsPrice.toFixed(2)}</h4>
    </div>
  );

  const onOkClick = () => {
    console.log('test');
  };

  return (
    <>
      <CartHeader className='navbar-brand btn btn-outline-primary d-flex p-sm-2 p-1' openModal={openModal} />
      <Modal
        show={showModal}
        onClose={closeModal}
        header={<h3>Shopping Cart</h3>}
        footer={{
          additionalContent,
          onOkClick,
          okButtonText: <Link to='/green-grocery/checkout'>Order</Link>,
          onCancelClick: () => {},
          cancelButtonText: 'Exit',
        }}
      >
        {cartList.length === 0 ? emptyCart : cartList}
      </Modal>
    </>
  );
};

export default Cart;
