const FlashDealCard = ({data}) => {
    return (
        <div className="swiper-slide cursor-pointer" style={{ width: '229.5px', marginRight: '16px' }}>
            <div
                className="relative w-full rounded-xl border-[0.5px] border-gray-300 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${data.product.logoUrl})` }}
            >
                <div className="relative flex items-center gap-x-3 rounded-xl p-2 backdrop-blur-xl">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg outline outline-1 outline-gray-400 md:h-16 md:w-16">
                        <span
                            style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                overflow: 'hidden',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                position: 'absolute',
                                inset: '0px'
                            }}
                        >
                            <img
                                alt="Coupon Pass"
                                src={data.product.logoUrl}
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover object-center"
                                style={{
                                    position: 'absolute',
                                    inset: '0px',
                                    boxSizing: 'border-box',
                                    padding: '0px',
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: '0px',
                                    height: '0px',
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%'
                                }}
                            />
                        </span>
                    </div>
                    <div className="relative flex-1 space-y-1">
                        <h2 className="line-clamp-1 text-sm font-semibold text-white lg:text-base">{data.name}</h2>
                        <p className="line-clamp-1 text-xs text-gray-400 lg:text-sm">{data.product.slug}</p>
                    </div>
                    <div className="absolute -right-2 -top-2 h-16 w-16 overflow-hidden rounded-sm text-white">
                        <div className="absolute left-0 top-0 h-2 w-2 bg-primary-300"></div>
                        <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary-300"></div>
                        <div className="absolute bottom-0 right-0 block w-[140%] origin-bottom-right rotate-45 bg-primary-400 py-1 text-center text-xxs font-semibold shadow-sm">
                            3.5% OFF
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashDealCard;
