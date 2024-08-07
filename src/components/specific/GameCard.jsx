import React from 'react';

const GameCard = ({data}) => {
  return (
    <a
      href="/mobile-legends-bang-bang"
      className="clip-path-card relative flex h-36 w-auto flex-col overflow-hidden p-6 sm:h-52 md:h-72 md:w-56 xl:w-auto"
    >
      <div
        aria-hidden="true"
        className="clip-path-card absolute inset-0"
      >
        <span
          style={{
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: 'absolute',
            inset: 0,
          }}
        >
          <img
            alt="Mobile Legends Bang Bang"
            src={data.logoUrl}
            decoding="async"
            data-nimg="fill"
            className="transition duration-300 ease-in-out"
            style={{
              transform: 'translate(0px, 0px) scale(1)',
              position: 'absolute',
              inset: 0,
              boxSizing: 'border-box',
              padding: 0,
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </span>
      </div>
      <article className="absolute inset-x-0 bottom-0 flex flex-col px-1 py-2 text-center backdrop-blur-sm sm:px-4 md:py-4">
        <h2 className="truncate rounded-md bg-primary-400 px-3 text-xs font-bold text-white md:text-base">
          {data.title}
        </h2>
        <h3 className="truncate text-[10px] text-gray-400 md:text-xs">
          {data.subTitle}
        </h3>
      </article>
    </a>
  );
};

export default GameCard;
