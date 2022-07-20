import "./portfolio.scss"
import Portfoliolist from "../portfoliolist/Portfoliolist";
import { useEffect, useState } from "react";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";
export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web-devop",
            title: "Web-Devop",
        },
        {
            id: "wine-quality",
            title: "Wine-Quality",
        },
        {
            id: "bank-management",
            title: "Bank-Management",
        },
        {
            id: "resume",
            title: "Resume",
        },
    ];
    useEffect(() => {
        switch (selected) {

            case "featured":

                setData(featuredPortfolio);
                break;
            case "web":

                setData(webPortfolio);
                break;
            case "mobile":

                setData(mobilePortfolio);
                break;
            case "design":

                setData(designPortfolio);
                break;
            case "content":

                setData(contentPortfolio);
                break;
            default:

                setData(featuredPortfolio);
        }
    }, [selected])



    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title} </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
