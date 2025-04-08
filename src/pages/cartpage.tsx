import MyCart from "../components/myCart"
import PageHeader from "../components/pageHeader"

const CartPage = () => {
  return (
    <>
      <div className="page_wrp">
        <div className="cartpage_wrp">
          <PageHeader title="My Cart" currentPage="My Cart" />

          <MyCart/>
        </div>
      </div>
    </>
  )
}

export default CartPage
