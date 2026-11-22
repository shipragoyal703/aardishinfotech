
import Image from "next/image";
import "@/styles/ClientLogos.scss";
import Link from "next/link";

const logos = [
  {
    name: "Margaret Speaks",
    src: "/images/logos/ms.png",
    link:"https://margaretspeaks.com/",
  },
  {
    name: "Bikeworks",
    src: "/images/logos/bike.png",
    link:"https://www.bikeworks.org.uk/",
  },
  {
    name: "HIB",
    src: "/images/logos/hib.png",
    link:"https://hordosinsurancebrokers.ca/",
  },
  {
    name: "Abbott Print Sign Design",
    src: "/images/logos/abott.png",
    link:"https://abbott22.com/",
  },
  {
    name: "Princess Destiny",
    src: "/images/logos/destiny.png",
    link:"https://destinydureke.com/",
  },
  {
    name: "Posterita",
    src: "/images/logos/posterita.png",
     link:"https://www.posterita.com/",
  },
  {
    name: "W Academy",
    src: "/images/logos/wetati.png",
     link:"https://wetatiacademy.org/",
  },
  {
    name: "Falkland island",
    src: "/images/logos/falkland.png",
     link:"https://www.the-falkland-islands-co.com/",
  },
    {
    name: "Home Stretch",
    src: "/images/logos/home.png",
     link:"https://www.home-stretch.com/",
  },
{
    name: "Morgan Sindall",
    src: "/images/logos/morgan.png",
     link:"https://morgansindallpropertyservices.com/",
  },
  {
    name: "Newbridgefx",
    src: "/images/logos/newbridgefx-logo.png",
     link:"https://www.newbridgefx.com/",
  },
  {
    name: "Providence",
    src: "/images/logos/providence.png",
     link:"https://providencefinancehub.com.au/",
  },
  {
    name: "Search",
    src: "/images/logos/search.png",
     link:"https://searchcrowdfund.com/",
  },
    {
    name: "Turquoise",
    src: "/images/logos/turquoise-logo.png",
     link:"https://www.turquoise.eu/",
  },
      {
    name: "Wise",
    src: "/images/logos/wise.png",
     link:"https://wiseneuro.com/",
  },
];

export default function ClientLogos() {
  return (
    <section className="clientSection">


      <div className="logoSlider">
        <div className="logoTrack">
          {[0, 1].map((group) => (
            <div className="logoGroup" key={group} aria-hidden={group === 1}>
              {logos.map((logo) => (
                <div className="logoItem" key={logo.name}>
                    <Link href={logo.link} target="_blank">
                  <Image
                    src={logo.src}
                    alt={group === 0 ? logo.name : ""}
                    width={220}
                    height={90}
                    className="clientLogo"
                  />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
