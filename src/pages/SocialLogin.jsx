import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const SocialLogin = () => {
    const {googleLogin} = UseAuth();
    const {githubLogin} = UseAuth();
    const {twitterLogin} = UseAuth();
    return (
        <>
            <div className='divider'>Continue with</div>
            <div>
                
                <Link onClick={()=>googleLogin()} className="btn btn-link">Google</Link>
                <Link onClick={()=>githubLogin()} className="btn btn-link">Github</Link>
                <Link onClick={()=>twitterLogin()} className="btn btn-link">Twitter</Link>
            </div>
        </>
    );
};

export default SocialLogin;