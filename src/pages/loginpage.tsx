import LoginPage from "../components/loginPage"
import PageHeader from "../components/pageHeader"

const Login = () => {
    return (
        <>
            <div className="page_wrp">
                <div className="cartpage_wrp">
                    <PageHeader title="Log In" currentPage="Log In" />
                    <LoginPage/>
                </div>
            </div>
        </>
    )
}

export default Login
