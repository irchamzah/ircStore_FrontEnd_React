import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export const generateStars = (averageRating) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starIndex = index + 1;

    if (starIndex <= Math.floor(averageRating)) {
      return <FaStar key={index} className="w-4 h-4 text-yellow-300" />;
    } else if (starIndex === Math.ceil(averageRating)) {
      return (
        <FaRegStarHalfStroke key={index} className="w-4 h-4 text-yellow-300" />
      );
    } else {
      return <FaRegStar key={index} className="w-4 h-4 text-yellow-300" />;
    }
  });
};

export const formatRupiah = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.floor(price));
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
