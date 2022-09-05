export const Card = ({ image, contact, phone, email }) => {
  return (
    <>
      <div class="flex justify-center">
        <div class="mb-3  flex flex-col md:flex-row md:max-w-xl rounded-lg bg-slate-300 shadow-lg">
          <img
            class=" w-80 h-80 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image}
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{contact}</h5>
            <p class="text-gray-700 text-base mb-4">{phone}</p>
            <p class="text-gray-600 text-xs">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
