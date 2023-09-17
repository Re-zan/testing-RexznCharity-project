import notFoundImage from "@/assets/not found page.png";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="mt-10 text-center">
      <Image
        src={notFoundImage}
        alt="not-found"
        width={600}
        placeholder="blur"
        className="max-w-[600px] h-auto mx-auto p-2 rounded-md"
        sizes="100vw"
      />
      <Link href="/" className="mt-5 mb-2 inline-block">
        <button className="text-white p-3 bg-red-500">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
