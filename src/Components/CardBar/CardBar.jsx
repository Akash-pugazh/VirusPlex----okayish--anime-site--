const CardBar = ({ title, children }) => {

  return (
    <div className="p-2 overflow-x-hidden">
      <h4 className="font-medium text-3xl my-2 mx-2 dark:text-gray-200 select-none">
        {title}
      </h4>
      <div className="flex w-screen pt-2 overflow-x-scroll">
        {children}
      </div>
    </div>
  );
};

export default CardBar;
