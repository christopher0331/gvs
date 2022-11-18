import { React } from 'react';
import './styles/FencingTypes.css';
import { ReactTitle, MetaTags } from 'react-meta-tags';

const FenceTypes = () => {

    const HorizontalPrivacy = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"
    const PremiumPicket = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/11.14.20-PremiumPicket/Mobile/PremiumPicket14.webp";
    const PrivacyFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_4.webp";
    const RanchRail = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/Project6/Mobile/project6Picture3Mobile.webp";
    const SplitRail = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/SplitRail/Mobile/SplitRailFence.webp";
    const CustomFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/CustomPicketCarousel.webp";
    const BoardOverBoard = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/5.27.21-BoardOverBoard/Mobile/5.27.21-BoardOverBoard13.webp";


    return(
        <div>
            <ReactTitle title="GreenView Solutions"/>
            <MetaTags>
                <meta name="description" content="
                                            Wood fencing is easily the requested fencing for many 
                                            reasons. Afordability, durability, adapability, its value.
                                            GreenView Solutions handles every wood fence style plus any
                                            custom fencing options you might think of or see elsewhere.
                                            Privacy fences, Ranch Rail, Split Rail, Horizontal Fencing and 
                                            more. Alway compeleted to the highest degree of quality here in
                                            the Denver, CO area.
                                            "/>
            </MetaTags>
            <h1 className='title'>Wood Fences for Your Denver, CO Property</h1>
            <div>
                <div className="woodFencesParagraph">
                <h2>The Wood Fences We Offer Our Denver, CO Property Owners</h2>
                <p>
                    When you need cost-effective and beautiful fencing services in Denver, CO 
                    for your property, at GreenView Solutions, we have a limitess number of solutions
                    we can provide. Here are just a few styles we provide for wood fences: 
                </p>
                    <ul>
                        <li><strong>Privacy Fence</strong> – Privacy fences are an attractive and cost-effective fencing option.</li> 
                        <li><strong>Premium Privacy Fence</strong> – Premium Privacy fences are very similar to privacy fencing, but with additional 2x4's for additions sturdiness, adding to your fences lifetime.</li> 
                        <li><strong>Horizontal</strong> – This modern fence style offers the same security as a traditional option, but the fence boards are installed horizontally instead of vertically.</li>    
                        <li><strong>Ranch Rail</strong> – Ranch rail fences, also known as horse rail fences, are often used for HOA housing, or for pastures. They are quickly becoming our most requested fencing.</li>    
                        <li><strong>Split Rail</strong> – This informal, open, and natural-looking fencing option offers a rustic look and takes little time to build and install.</li> 
                        <li><strong>Board Over Board</strong> – Our best fencing options for inner city houses or houses near busy roads. The extra wood and overlap provides a great sound barrier to lots of noise, and adds additional privacy from people walking by.</li> 
                        <li><strong>Custom Picket Fence</strong> – A catch all state, as there are no limits to how you customize a fence. We often add wire to residential areas with fencing height restrictions. We also handle custom request for inserted ornamental iron or customer post topper designs.</li> 
                    </ul>
                    <p>
                        No matter which fence type you choose, our team is dedicated to 
                        “Building Better Fences,” which ensures you’ll receive quality work every time.
                        Not sure what kind of fence is best for your budget and property? No worries! 
                        We not only offer free estimates, but we can also weigh in on which wood fences 
                        best suit your lifestyle.
                    </p>    
                </div>
            </div>
            <div className='info'>(Hover Over Image for Details)</div>
            <p className='info'>
                Prices are a general estimate. Price is subject to changes in cost of materials.
            <br/>
                Premium and Standard fencing is based on a 6ft height.
            <br/>    
                Prices are based on 150+ linear feet.
            </p>

                <div className="fences">
                    <div className="left">  
                        <div className="project1">
                            <div className="image">
                                <img src={PrivacyFence} id="residential1" alt='Privacy fence with cedar pickets, 6ft tall and 146 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Privacy Fence<br /></h1>
                                <p>Starting @ $52 per linear foot.</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Privacy Fence</h2>
                            <div>
                                Privacy fencing is one of the most common styles of fencing used by homeowners and contractors 
                                for several different reasons. When privacy fencing is installed it’s mainly for security, privacy, 
                                noise reduction, curb appeal and to add protection for your family. Regardless of the reason for 
                                installing a privacy fence, this style of fencing will add value to your home and add curb appeal.
                                In order for a fence to be defined as a privacy fence, it must cover four categories: security, 
                                function, durability and design. For example, a chain link fence doesn’t offer much privacy or 
                                design, therefore it doesn’t qualify as a privacy fence.
                            </div>
                        </div>
                    </div>     
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Premium Privacy Fence</h2>
                            <div>
                                A premium privacy fence provides all the same benefits a privacy fence does but with some extra 
                                strudiness that will help te fence last much longer. Two additional 1x6's are added to the street 
                                facing side of the panel. And an additional 2x4 added to the top of the fence for each panel.
                            </div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                                <img src={PremiumPicket} alt='Premium Picket fence with cedar pickets, 6ft tall and 250 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Premium Privacy<br /></h1>
                                <p>Starting @ $65 per linear foot</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                                <img src={HorizontalPrivacy} alt='Horizontal privacy fence built 5ft tall with cedar pickets.'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Horizontal Privacy Fence<br /></h1>
                                <p>Starting @ $55 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Horizontal Privacy Fence</h2>
                            <div>
                                Feel like mixing it up a little? A horizontal privacy fence adds 
                                a new look to your fence 
                                yet provides all of the same benefits as a standard privacy fence.
                            </div>
                        </div> 
                    </div>
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Ranch Rail</h2>
                            <div>
                                Ranch rail, also known as Horse Fence, Field Fence, Board Fence, and Farm Fence, is becoming 
                                a more popular style of fencing among homeowners and not just ranchers or farmers. Some of 
                                the most common uses for this style of fencing is to keep livestock secure on ranches, keeping 
                                children and pets in their yard throughout neighborhoods and to add a design statement to 
                                mountain living. A traditional horse fence will be either two, three or four rails. You also have 
                                many different design options compared to split rail and post and dowel because there are no 
                                pre-cut holes.
                            </div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                                <img src={RanchRail} alt='Ranch Rail Fencing'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Ranch Rail<br /></h1>
                                <p>Starting @ $45 per linear foot</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={SplitRail} alt='Split Rail Fencing'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Split Rail<br /></h1>
                                <p>Starting @ $45 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Split Rail</h2>
                            <div>
                                Split rail fencing is one of the earliest forms of fencing that was used in America. 
                                The main reason for this is because of its affordability and easy installation. When it comes to 
                                installing a split rail fence it requires little materials so you can install it quickly and with 
                                little help. A split rail fence is an ideal option is you are looking to add a rustic look to 
                                your home curb appeal on a budget.
                            </div>
                        </div> 
                    </div>
                    <div className="right"> 
                    <div className='project2Text'>
                            <h2>Custom Fence</h2>
                            <div>
                                Custom fences are often requested for several reasons. Often, HOA's only allow street facing
                                fences at a certain height, often from 3ft to 4ft. Occasionally, it only pertains to closed fencing
                                and not open fencing, in which case, we build the wood fence to the regulation and then use
                                wire to add additional height. This helps with containing animals or just adds a bit of 
                                pleasant aesthetics. We also frequently cut custom designs in the post topppers, or insert ornamental 
                                iron in our wood fences.
                            </div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                            <img src={CustomFence} alt='Custom cedar picket fencing with top wiring, 6ft tall, 260 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Custom Fence<br /></h1>
                                <p>Starting @ $65 per linear foot</p>
                            </div>
                            </div>
                        </div>
                      
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={BoardOverBoard} alt='Board over board cedar picket fencing, 140 linear feet, 6ft tall'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Board Over Board<br /></h1>
                                <p>Starting @ $60 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Board Over Board</h2>
                            <div>
                                Board over Board is quickly becoming the most requested fencing type for congested areas. 
                                Board over Board means there is no space between each board like traditional wood fences because each
                                board is overlapping by some fraction of an inch, depending on the customers request. This type of fence 
                                helps block noise polution, and also prevents any visibilty through the fence, since there are no gaps between
                                the boards. 
                            </div>
                        </div> 
                    </div>
                </div>
                <div>
                <h3 className="lowerInformation">The Benefits of Wood Fences</h3>
                    <p className="lowerInformation">
                        Adding a fence to your property can be hard since there are so many options. 
                        At GreenView Solutions, we know fences. Although chain link fences are a popular option, 
                        wood fences offer benefits that may be more suitable for your fencing needs. These benefits include 
                        the following:
                    </p>
                    <ul className="lowerInformation">
                        <li>
                            <strong>Affordable</strong> – In contrast to metal fences and other popular 
                            fencing options, wood fences are typically much less 
                            expensive due to the lower prices of the materials. Since 
                            wood is a naturally occurring and abundant resource, its 
                            prices stay relatively low although, they have increased in recent years, that price
                            is coming back down. Additionally, wood fences are easy to repair, and often only, 
                            require a few planks, rather than an entire section. This makes any necessary repairs quick and easy!
                        </li>
                        <li>
                        <strong>Durable</strong> – If you’re looking to invest in an aesthetically-pleasing 
                            and highly-durable fencing option, wood fences are the way to go. 
                            When professionally installed by the seasoned team at GreenView Solutions, wood fences can last for decades. Wood fences are also a superior 
                            option when it comes to resisting impact compared with other fencing 
                            options, such as vinyl.
                        </li>
                        <li>
                        <strong>Adaptable </strong>– Wood fences can be painted or stained any color 
                            you could imagine. The possibilities or endless! This makes 
                            it accessible to perfectly match your fencing to the rest of 
                            your property. Also, with wood, you have the option of 
                            re-painting it a different shade at some point during its 
                            lifespan, which can be an appealing quality to potential buyers 
                            down the road.
                        </li>
                        <li>
                        <strong>Valuable</strong> – Wood fences do more than just increase your 
                            Denver, CO homes curb appeal; they will also increase its 
                            property value. Wooden fencing options are highly versatile, 
                            making them accessories many potential home buyers love. If 
                            your home has correctly installed and well-maintained wood 
                            fences, it could easily set your home above and beyond the 
                            competition.

                        </li>

                    </ul>
                </div>
        </div>
    )
}


export default FenceTypes;