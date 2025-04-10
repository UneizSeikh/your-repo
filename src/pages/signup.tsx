import PageHeader from "../components/pageHeader"
import SignUpPage from "../components/signUppage"

const SignUp = () => {
    return (
        <>
            <div className="page_wrp">
                <div className="cartpage_wrp">
                    <PageHeader title="Sign Up" currentPage="Sign Up" />
                    <SignUpPage/>
                </div>
            </div>
        </>
    )
}

export default SignUp
