import SocialImage from "./SociaImage";
import { pitch, quote, greeting } from '../utils/temp-constants';
import Footer from "./footer";      

const Content = () => {
    
    return (
        <div className = 'content-column'> 
            <div>
                <section className = 'intro'>
                    <SocialImage />
                    <div className = 'pfp-friend'>
                        <h1 className = 'first-name'>
                            AUSTIN
                        </h1>
                        <h1 className = 'last-name'>
                            MIGCHELBRINK
                        </h1>
                        <div className = 'title'> 
                       {'Fullstack Web Developer'}
                    </div>
                    </div>
                    
                    <Footer column = {'column'}/>
                </section>
                <section className = 'content-1'>
                    
                </section>
                <section className = 'content-2'>       
                </section>
            </div>
        </div>
    );
}

export default Content;