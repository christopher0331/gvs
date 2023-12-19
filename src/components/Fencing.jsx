import { useEffect, React } from 'react';
import FenceTypes from './FenceTypes.jsx';
import './styles/InfoPanel.css';
import { MetaTags } from 'react-meta-tags';

const Fencing = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <MetaTags>
                <meta name="description" content="Some sdlakfl;ksdjaf lk sdf." />
                <meta property="og:title" content="MyApp" />
                <meta description="Wrought Iron Fencing, Ornamental Iron Fencing Project"/>
            </MetaTags>
            <div>
                {/* <div className='fencingInfoPanel'>
                    <div className='fencingInfoPanelTitle'>
                        We've Installed Them All
                    </div>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like!).
                    </p>
                </div> */}
                <FenceTypes />
            </div>
        </div>
    )
}

export default Fencing;