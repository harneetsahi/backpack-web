import Link from "next/link";

function ImageCarouselDiv({
  image,
  linkText,
  heading,
  description,
}: {
  image: string;
  linkText?: string;
  heading: string;
  description: string;
}) {
  return (
    <>
      <div className="relative w-full rounded-2xl  font-bold flex-grow-0 flex-shrink-0 basis-full  ">
        <div
          className="absolute top-0 left-0 right-0  h-full w-full overflow-hidden "
          style={{
            background:
              "linear-gradient(rgba(17, 19, 22, 0.1), rgba(17, 19, 22, 0.2), rgba(17, 19, 22, 0.25), rgba(17, 19, 22, 0.85)",
          }}
        ></div>
        <img src={image} className="w-full rounded-2xl " alt="banner" />
        <div className=" flex flex-col gap-2  justify-end absolute z-10 lg:bottom-9 bottom-5 left-10 w-200 ">
          <p className="lg:text-5xl text-2xl">{heading}</p>
          <p className=" text-gray-400 lg:text-lg text-sm font-semibold">
            {description}{" "}
          </p>

          {linkText && (
            <Link
              href=""
              className="py-3 px-4 mt-2 w-max rounded-xl bg-white text-zinc-800 "
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default ImageCarouselDiv;
