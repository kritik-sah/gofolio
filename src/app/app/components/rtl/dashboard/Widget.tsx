import Card from "@/app/app/components/card";

const Widget = (props: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}) => {
  const { icon, title, subtitle } = props;
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="me-4 flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-stone-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 me-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-stone-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
