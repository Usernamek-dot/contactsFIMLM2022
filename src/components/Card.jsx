export const Card = ({ children }) => {
  // image, contact, phone, email
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3  flex flex-col md:flex-row md:max-w-xl rounded-lg bg-slate-300 shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
};
