
import { BadgeDollarSign, ShieldCheck, Headphones } from "lucide-react";

function OurPolicy() {
  return (
    <div className="flex flex-xol sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <BadgeDollarSign className="m-auto mb-2" size={36} />
        <p className="font-semibold">EASY EXCHANGE POLICY</p>
        <p className="text-gray-700">
          {" "}
          We offer hassle-free exchanges for your satisfaction.{" "}
        </p>
      </div>
      <div>
        <ShieldCheck className="m-auto mb-2" size={36} />
        <p className="font-semibold">7 DAYS RETURN POLICY</p>
        <p className="text-gray-700">
          {" "}
          We offer 7 days return policy for your convenience.{" "}
        </p>
      </div>
      <div>
        <Headphones className="m-auto mb-2" size={36} />
        <p className="font-semibold">CUSTOMER SUPPORT</p>
        <p className="text-gray-700">
          {" "}
          Our dedicated support team is here to assist you.{" "}
        </p>
      </div>
    </div>
  );
}

export default OurPolicy;
