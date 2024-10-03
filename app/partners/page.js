import MemberCard from "@/components/Cards/MemberCard";
import Container from "@/components/Container";
import { partners } from "@/utils/constant";

const page = () => {
  return (
    <>
      <Container className="mb-[60px]">
        <h1 className="text-[#C59363] text-5xl font-bold my-12">
          Our Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[96px] gap-y-12">
          {partners.map((item, index) => (
            <MemberCard key={index} item={item} isLast width={308} />
          ))}
        </div>
      </Container>
      <div className="w-full border-b border-[#C59363] mb-6" />
    </>
  );
};

export default page;
