import ImageCarousel from '../components/slider'
import ProductPage from '../components/productPage'
import NewsLetter from '../components/newsLetter'

const Home = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className="home-page"  >
                <ImageCarousel />

                <ProductPage />
                <NewsLetter />
            </div>
        </>
    )
}

export default Home