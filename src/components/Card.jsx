export const Card = ({ children }) => {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-blue-700 to-amber-600">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img
            src={children.image}
            className="px-10 text-center rounder-3xl shadow-xl  m-auto w-96 mt-16 mb-16 border-white border-4"
          />
        </div>
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">
            📛{children.contact}
          </h5>
          <p class="text-gray-700 text-base mb-4">{children.phone} 🤙</p>
          <p class="text-gray-600 text-xs font-bold">{children.email} 🖥</p>
        </div>
      </div>
    </>
  );
};
