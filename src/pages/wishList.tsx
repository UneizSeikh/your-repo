import PageHeader from "../components/pageHeader"
import Wishlist from "../components/wishlist"

const WishList = () => {
  return (
    <div className="page_wrp">
    <div className="cartpage_wrp">
      <PageHeader title="My Wishlist" currentPage="My Wishlist" />
      <Wishlist/>
    </div>
  </div>
  )
}

export default WishList
