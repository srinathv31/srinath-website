import Image from "next/image";

export function FooterLinks() {

    const linkItems = [
        { "name": "ReactTS", "url_link": "https://reactjs.org/", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png", "height": "25", "width": "28" },
        { "name": "Typescript", "url_link": "https://www.typescriptlang.org/", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png", "height": "25", "width": "25" },
        { "name": "HTML5", "url_link": "", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png", "height": "30", "width": "33" },
        { "name": "CSS", "url_link": "", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png", "height": "30", "width": "25" },
        { "name": "Git Repo", "url_link": "https://github.com/srinathv31/portfolio-website", "image_url": "https://i.imgur.com/GpQ1IHV.png", "height": "25", "width": "25" },
    ];

    return (
        <div>
            <ul>
                <li style={{ fontWeight: 300 }}>
                    Powered by:
                </li>
                {linkItems.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.url_link === "" ?
                                <Image src={item.image_url} alt={item.name} height={item.height} width={item.width}></Image> :
                                <a href={item.url_link} target="_blank" rel="noreferrer"><Image src={item.image_url} alt={item.name} height={item.height} width={item.width}></Image></a>
                            }
                        </li>
                    );
                })}
                <li>
                    <a href={"https://nextjs.org/"} target="_blank" rel="noreferrer">
                        <Image src="/Nextjs-logo.svg" alt="Nextjs Logo" width={40} height={25} />
                    </a>
                </li>
                <li>
                    <a href={"https://vercel.com/"} target="_blank" rel="noreferrer">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
