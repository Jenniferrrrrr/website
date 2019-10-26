import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './Navbar.css';
import './Drawings.css';
import Me from './me.jpg';
import MA from './MA.png';
import input from './input.png';
import pic from './interface.png';
import cs from './CS61A.png';
import Observation from './observation.png';
import Footer from './Footer';
import Singing_Squirrel from './squirrel_singing.png';
import Debugging_Squirrel from './Debugging-squirrel.png';
import ScrollToTop from './ScrollToTop';
class Navbar extends React.Component{
    render() {
        return (
            <HashRouter basename='/'>
            <ScrollToTop />
            <div className="container">
            <div className="nav">
                <a href="/website/"><img style={{marginLeft: "5px", marginTop:"5px"}}width="75px" height="70px" src={Singing_Squirrel}/></a>  
                <div className="item">     
                    <ul className="bar">
                        <li className="tab"><Link to="/">HOME</Link></li>
                        <li className="tab"><Link to="/pursuits/">PURSUITS</Link></li>
                        <li className="tab"><Link to="/interests/">INTERESTS</Link></li>
                    </ul>
                </div>  
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/pursuits/" component={Pursuits}/>
            <Route path="/interests/" component={Interests} />
            </div>
            <Footer/>
            </HashRouter>
            
        );
    }
}
const Home = () => {
    return (
        <div>
        <div className="image-txt-container"> 
        <div className="text">
            <h1 className="header">Hey you! Yes you! What brings you here?</h1>
            <div className="second-container">
            <h1 className="header"> I'm a squirrel in UC Berkeley pursuing a degree in Acorn Finding, Tree Climbing, and Karaoke.</h1>
            <p className="description">Please feel free to browse around to hear my fairly technical thoughts on 
            <a href="/website/interests/"> fragrances, lipsticks, and gemstones</a>. 
            Are you here for the human Jennifer? Scroll down!
            </p>
            </div>
            </div>      
                <img  src={Singing_Squirrel}/> 
            </div> 
        <div className="some-container">       
            <img className="drawing" src={Me}/>
            <div className="text">
            <h1 className="header">Hello, I'm Jennifer Huang, a sophomore at UC Berkeley studying CS, Applied Math, and Music.</h1>
            <p className="description">I'm from Toronto, Canada (Sorry Warriors, but I have to say Go Raptors) and lived with my grandparents in Nanjing, China
            when I was younger. Right now, my time evolves around <a href="/website/pursuits/"> finding aliens, comparing charter schools and public schools,
            and tutoring CS61A</a>, the introductory course to CS at Berkeley. I like writing one lined poems, long articles about
            gemstones, collecting perfumes, playing PUBG, singing, and of course, drawing squirrels.
            </p>
            </div> 
        </div>    
        </div> 
            );
            }

const Pursuits = () =>{
    return (
    <div>
        <div className="image-txt-container"> 
            <div className="text">
                <h1 className="header">Below you can find some of my current and past involvements in the field
                of computer science.</h1>
            </div>      
            <img className="drawing" src={Debugging_Squirrel}/> 
        </div> 
        <div className="some-container">     
            <img className="drawing" src={Observation} height="50%"/> 
            <div className="text">
            <h1 className="header">Spotting Aliens</h1>
            <p>At <a href="https://seti.berkeley.edu/listen/">Berkeley SETI Research Center</a> under the Breakthrough Listen Initiative, which is a world wide project that searches
            for extraterrestral communications, I'm working on an observation tracker app which takes the data
            recorded at compute nodes at the Green Bank telescope and display them in a presentable way. In addition to displaying data,
            the app also keeps track of the current status of each compute node, which is done through Google Pub/Sub.</p>
            </div>  
        </div> 
        <div className="some-container"> 
            <div className="text" style={{padding:"50px 100px 50px 100px"}}>
                <h1 className="header">Charter Schools vs Public Schools</h1>
                <p>I'm a research apprentice through the Undergraduate Research Apprentice Program at UC Berkeley under Jaren Haber. This research evolves around <a href="https://www.jarenhaber.com/talk/selling-segregation/">
                analyzing the text of charter school websites</a> versus public schools for social implications. I'm working on web scraping and data cleaning with scrapy.                </p>
            </div>      
                <img className="drawing" src={input} height="600px"/> 
        </div> 
        <div className="some-container">     
            <img className="drawing" src={pic}/> 
            <div className="text" style={{padding:"50px 100px 50px 100px"}}>
            <h1 className="header">La Promesse</h1>
            <p>Recently, I've taken part in developing a React app for La Promesse Inc., a Toronto based company
                that helps Chinese students with visa applications to develop an internal app which keeps track of client and employee information, 
                and the status of each applications. This app uses React, Redux, and Cloud SQL to store information. 
            </p>
            </div>  
        </div> 
        <div className="some-container"> 
            <div className="text" style={{padding:"25px 100px 50px 100px"}}>
                <h1 className="header">Teaching</h1>
                <p>The process of teaching is very enjoyable for me as it helps me to solidate my own knowledge while passing on 
                the help that I constantly receive from others around me. Currently, I'm a course staff for <a href="https://cs61a.org/tutors.html">CS61A</a>, which is an 
                introductory course for computer science at Berkeley, where I answer questions at office hours, grade projects and exams, 
                and teach small group sections through <a href="https://csmentors.berkeley.edu/#/">Computer Science Mentors(CSM)</a>, an organization on campus that strives
                to provide a welcoming environment for all who have interests in the field.
                </p>
            </div>      
                <img className="drawing" src={cs}/> 
        </div> 
        <div className="some-container">     
            <img className="drawing" src={MA}/> 
            <div className="text" style={{padding:"25px 100px 50px 100px"}}>
            <h1 className="header">Maison-Autelier</h1>
            <p>Maison-Autelier was a <a href="https://devpost.com/software/maison-autelier">Hackathon project</a> that I developed with some friends which focuses on
            how to allocate help to those suffering through domestic violence. The product is a website that gives real time information on the nearest shelter to the user,
            hotlines, and other resources through a single phone call. I took part in web scraping the resources, which was done through BS4 and Selenium, as well as implimenting the Twilio API for the automated phone call, writing
            the texts for the website and designing the logo.
            </p>
            </div>  
        </div> 
    </div> );
}



const Interests = () =>{
    return (
    <div style={{textAlign:"left"}} className="text">
    <h2>The squirrel has been busy hunting for acorns and couldn't finish this section.</h2>
    <p style={{margin:"-10px 0px 0px 0px", fontSize:"15px"}}> In the main time, if you are able to read in Chinese here is
        an article I wrote about tourmaline, a semi-precious gemstone.(If you aren't, I do apologize, the English version will come out in a week or so along with pretty pictures).
        </p>
    <div className="article">
    <p>碧玺 (Tourmaline)</p>

    <p>俗称“电气石”，是清朝慈禧太后最喜爱的珠宝之一。为什么这么说呢，因为慈禧在庚子事变到gg的那段时间，每年派人从圣地亚哥购买的各色碧玺都有好几吨。死后也带有不少碧玺陪葬，
    然而都被我们敬业的考（盗）古（墓）家（贼）孙殿英拿去研究了。碧玺硬度在7-8左右，但晶体脆，所以磕碰一下还是会比较心疼的。碧玺出名在09年，因为东海（之后会提到这个神奇的地方）
    卖水晶的商家聚到一块儿把这东西炒了上去，其手法和之前炒作到上千万的兰花有异曲同工之妙。当然了，碧玺能内炒上去还是有理由的。首先，碧玺颜色丰富，基本上能想到的颜色都会有。
    其次，碧玺非常的有宝石感。为什么这么说呢，因为切工好的碧玺看上去和蓝红宝石或祖母绿没有太大的差别，乃是满足虚荣心的首选。最后，碧玺种类丰富。除了普通的单色以外，还有带渐变色的，
    也有带猫眼成效的。这就满足了珠宝爱好者的不同喜好和需求。</p>

    <p>产地：
    国内产地主要来自于云南，新疆阿勒泰，和内蒙古。在云南，玫红色系的碧玺主要产于福贡和元阳；绿色系的产于贡山，福贡，保山；然后蓝色碧玺主要产于贡山和保山。新疆盛产各种颜色鲜艳，晶体较大且纯净的碧玺。相比较于新疆，内蒙古的碧玺晶体就没有那么的大和纯净了。 
    这也是为什么提到国产碧玺， 大部分珠宝爱好者会先想到新疆。 然而国产的碧玺并不出名，因为产量非常的低。相比之下许多国外的产地要出名得多，比如巴西。巴西产出的，都是世界上最顶级的碧玺。不仅颜色丰富（二十来种），且净度极高。而且巴西还生产一种特有的蓝绿/淡蓝色调的碧玺 — 帕拉依巴。
    这种在Paraiba州特有的碧玺因其颜色成为近来碧玺界的宠儿。除去巴西，美国加州也是较大的一个产地。因开采的山脉已风化，大量的石头已变为泥土，所以开采起来极为方便。这也是作者为什么在加州上学，因为读不下去了可以就地挖土。除去这两个地方，俄罗斯的西伯利亚地区、马达加斯加、斯里兰卡、
    缅甸也有碧玺，只不过产量少且净度没那么高罢了。</p>

    <p>价值：
    净度越高越值钱，有各类棉絮，冰裂， 及黑点的价值就不会那么高。颜色越鲜艳越值钱，颜色暗淡的碧玺被俗称为“酱油色”，其价值会相对而言较低。此外，帕拉伊巴，渐变碧玺（例如西瓜碧玺）和猫眼碧玺价值较高，其次才是其他的单色碧玺。在这些剩下的里头，红色和蓝色比较值钱；绿色，
    黄色，粉红色，黑色和接近无色的相比而言就没那么值钱。少有的颜色，比如紫色，的价值会在这两个类别之间。</p>

    <p>加工：
    众所周知，碧玺原石注胶手段是被默许的，因为碧玺注胶是为了提高加工出来的成品率（前文提到过碧玺较脆，直接加工的成品率非常低）。但是常识告诉我们，胶只能进入那些外表有裂纹的石头里，所以买碧玺或者任何珠宝的时候，
    晶体表面无裂的就比较不可能被注胶。检查注胶的话，最好在十倍放大之下看晶体里有无白色或者黄色的棉絮状填充物及单一色调的闪光（而不是水晶天然裂纹折射出的七彩光）。除去注胶，热处理，辐照处理，和镀膜也是常见处理手段。
    热处理，也就是通过加热把颜色深的碧玺变浅，能把“酱油色”的碧玺变成“鸽血红”一般鲜艳的颜色。辐照处理通过高能射线也能达到和热处理类似的效果，因为成本较高，基本上只出现在切割类的宝石上，所以手串不必担心。说实话，
    热处理和辐照处理很少在碧玺上出现，因为这种处理通常会在脆弱的晶体上留下一堆裂纹，颇有“杀敌一千，自损八百”的气势。镀膜相比于之前三种，算得上是非常low的一种手段了。原理就和手机镀膜一样，把彩色的涂料弄在无色的碧玺上来蒙混过关。
    这种一般光彩会比一般碧玺强，和金刚相媲美。鉴定方法我就不多说了，最简单粗暴的还是送到检验机构，出证书，最好是能出标注热处理或者填充，也就是注胶处理的那种机构。如果镀膜的话，折射率变化范围较高 ( >1.70 ) 就有问题了。</p>
    </div>
    </div> );
}

export default Navbar;
