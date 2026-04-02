import Image from "next/image";
import Link from "next/link";

const sponsors = [
  {
    id: "3",
    href: "https://www.lycaninternational.com/",
    image: "/assets/lycan_logo.jpeg",
    alt: "lycan",
    text: "Lycan International",
    isBold: true,
    group: 3,
  },
  {
    id: "1",
    href: "https://www.murangaseal.com/",
    image: "/mseal-logo.png",
    alt: "Mseal - Official website of mseal",
    text: "Mseal",
    isBold: true,
    group: 1,
  },
  {
    id: "2",
    href: "https://www.footballkenya.org/",
    image: "/assets/kfa.png",
    alt: "Kfa",
    text: "KFA",
    isBold: true,
    group: 2,
  },
  
];

export default function PartnershipSection() {
  return (
    <section className="bg-[#f8f4ee] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-lg md:text-2xl font-bold text-black mb-2 tracking-tight">
            PARTNERSHIPS
          </h1>
        </div>

        <div className="space-y-2">
          <div>
            <div className="grid grid-cols-3">
              {sponsors.map((partner) => (
                <Link
                  href={partner.href}
                  key={partner.image}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    width={100}
                    height={100}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
