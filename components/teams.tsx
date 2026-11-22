
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const values = [
  {
    image: "/akshays.png",
    title: "Akshay Sharma",
    linkedin: "https://www.linkedin.com/in/akshay-consultant/",
    mail: "akshays103@gmail.com",
    description: "Founder & CEO",
  },
  {
    image: "/shipra.png",
    title: "Shipra Goyal",
    linkedin: "https://www.linkedin.com/in/shipra-goyal-29196a212/",
    mail: "shipra.goyal703@gmail.com",
    description: "Co Founder & CTO",
  },
  {
    image: "/manish.png",
    title: "Manish",
       mail: "manish9101996@gmail.com",
    description: "CMO",
  },
  {
    image: "/khushi.png",
    title: "Khushi Goyal",
       mail: "khushigoyalofficial@gmail.com",
    description: "UI/UX Lead",
  },
];

export default function Teams() {
  return (
    <section className="values-section">
      <div className="container">
        <div className="section-heading">
          <span className="subheading">OUR TEAM</span>

          <h2>
            The Mind Behind <span>Aardish</span>
          </h2>

          <p>
            Our talented team of designers, developers, and strategists works
            together to turn ideas into powerful digital solutions. We are
            committed to delivering quality, innovation, and exceptional
            results for every client.
          </p>
        </div>

        <div className="row g-4">
          {values.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.title}>
              <div className="value-card">
                <div className="icon">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <ul className="team-social">
                  {item.linkedin && (
                    <li>
                      <Link
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} LinkedIn profile`}
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  )}

                  {item.mail && (
                    <li>
                      <Link
                        href={`mailto:${item.mail}`}
                        aria-label={`Email ${item.title}`}
                      >
                        <MdEmail />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
