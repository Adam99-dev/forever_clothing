function ProductItemSkeleton() {
  return (
    <div className="animate-pulse text-gray-700">
      {/* Image skeleton */}
      <div className="
        bg-gray-300 rounded-3xl
        h-36 w-36
        sm:h-44 sm:w-44
        md:h-50 md:w-50
      "></div>

      {/* Name skeleton */}
      <div className="pt-3 pb-1">
        <div className="
          bg-gray-300 rounded
          h-3 w-24
          sm:h-4 sm:w-32
        "></div>
      </div>

      {/* Price skeleton */}
      <div className="
        bg-gray-300 rounded
        h-4 w-16
        sm:h-6 sm:w-20
      "></div>
    </div>
  );
}

export default ProductItemSkeleton;
