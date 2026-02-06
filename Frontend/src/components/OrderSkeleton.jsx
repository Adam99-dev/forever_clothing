function OrderSkeleton() {
  return (
    <div className="animate-pulse border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
        {/* LEFT: product */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          {/* Image */}
          <div className="
            bg-gray-300 rounded-lg
            w-20 h-20
            sm:w-24 sm:h-24
            md:w-28 md:h-28
          "></div>

          {/* Text */}
          <div className="flex-1 space-y-3">
            <div className="h-5 w-40 bg-gray-300 rounded"></div>

            <div className="flex flex-wrap gap-4">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </div>

            <div className="h-4 w-64 bg-gray-300 rounded"></div>
            <div className="h-3 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* RIGHT: status + buttons */}
        <div className="flex flex-col sm:flex-row xl:flex-col justify-between gap-4 pt-4 xl:pt-0 border-t xl:border-t-0">
          {/* Status */}
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSkeleton;
