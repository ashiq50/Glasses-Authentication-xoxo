import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const SocialLogin = () => {
    const {googleLogin, githubLogin, twitterLogin, facebookLogin} = UseAuth();

    const navigate = useNavigate()
    const location = useLocation()
    const form = location?.state || '/'
    const handleSocialLogin = (socialProvider) =>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(form)
            }
        })
    }
    return (
        <>
            <div className='divider'>Continue with</div>
            <div>
                
                <Link onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-success">Google</Link>
                <Link onClick={()=>handleSocialLogin(githubLogin)} className="btn btn-outline btn-primary">Github</Link>
                <Link onClick={()=>handleSocialLogin(twitterLogin)} className="btn btn-outline btn-secondary">Twitter</Link>
                <Link onClick={()=>handleSocialLogin(facebookLogin)} className="btn btn-outline btn-accent">Facebook</Link>
            </div>
        </>
    );
};

export default SocialLogin;