import Link from "next/link";

const MemberCard = ({ item, isLast, width = 300 }) => {
  const { image, name, designation, id } = item;

  return (
    <Link href={`/members/${id}`}>
      <div className={`w-[300px] cursor-pointer ${isLast ? "" : "mr-[62px]"}`}>
        <div
          className={`h-[300px] w-[${width}px] bg-lightgray rounded-lg`}
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) -53.41%, rgba(197, 147, 99, 0.20) 50%), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pt-6 text-2xl">
          <h3 className="font-bold text-[#C59363]">{name}</h3>
          <p className="text-[#3D453B] mt-2">{designation}</p>
        </div>
      </div>
    </Link>
  );
};

export default MemberCard;
