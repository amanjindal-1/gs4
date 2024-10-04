import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ item, isLast, black }) => {
  return (
    <Link href={`/services/${item.id}`} passHref>
      <div
        className={`w-[264px] ${
          black ? "#0D160B" : "text-white"
        } cursor-pointer text-2xl ${isLast ? "" : "mr-[72px]"}`}
      >
        <div className="w-60 h-60 rounded-full overflow-hidden">
          <Image
            src={item.img1}
            alt={item.id}
            className="object-cover h-full"
          />
        </div>
        <div className="mt-6">
          <div className={`font-bold ${black ? "text-[#C59363]" : ""}`}>
            {item.title}
          </div>
          <div className="mt-2 overflow-hidden line-clamp-2">
            {item.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
