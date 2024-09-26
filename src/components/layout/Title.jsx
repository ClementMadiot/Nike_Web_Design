import React from "react";

function Title({
  titleStart,
  titleOrange,
  titleEnd,
  classTitle,
  classTitleOrange,
  paragraph,
  classParagraph,
  titleSpan,
  titleOrange2,
  paragraph2,
  classParagraph2,
}) {
  const styleParagraph = "font-montserrat text-slate-gray first-letter:text-coral-red first-letter:font-bold first-letter:text-2xl leading-7 text-lg";
  return (
    <>
      <h1 className={` ${classTitle || "text-3xl sm:text-4xl lg:max-w-lg"} font-palanquin font-bold`}>
        {titleStart}{" "}
        {titleSpan && (
          <>
            <span className="xl:bg-white xl:whitespace-nowrap relative pr-10">
              {titleSpan}
            </span>
            <br />
          </>
        )}
        <span className={`text-coral-red ${classTitleOrange}`}>
          {titleOrange}
        </span>{" "}
        {titleOrange2 && (
          <span className={`text-coral-red ${classTitleOrange}`}>
            {titleOrange2}{" "}
          </span>
        )}
        {titleEnd}
      </h1>
      <p
        className={`${styleParagraph} ${classParagraph}`}
      >
        {paragraph}
      </p>
      {paragraph2 && (
        <p className={`${styleParagraph} ${classParagraph2}`}>
          {paragraph2}
        </p>
      )}
    </>
  );
}

export default Title;
