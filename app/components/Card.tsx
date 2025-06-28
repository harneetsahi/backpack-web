import Image from "next/image";

interface coinProps {
  name: string;
  value: string;
  change: string;
  image: string;
}

interface CardProps {
  title?: string;
  coins?: coinProps[];
  className?: string;
}

function Card({ title, coins, className }: CardProps) {
  return (
    <>
      <div className={`${className} bg-darker rounded-lg w-100 py-3`}>
        <p className="text-md font-bold pt-1.5 pb-2 px-4">{title}</p>
        <div>
          {coins?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex py-[7px] font-bold hover:bg-dark px-4 text-[13px] lg:text-[15px] tracking-wide cursor-pointer "
              >
                <div className="flex-1 flex ">
                  <Image
                    width={20}
                    height={10}
                    src={item.image}
                    loading="lazy"
                    alt="coin image"
                    aria-hidden="true"
                    className="object-cover rounded-full"
                  />
                  <p className="pl-3">{item.name}</p>
                </div>
                <div className="flex justify-between w-[60%] text-right">
                  <p className=" w-[50%]  ">${item.value}</p>
                  <p
                    className={`${
                      item.change.startsWith("-")
                        ? "text-red-500"
                        : "text-green-400"
                    } w-[50%]  `}
                  >
                    {item.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
