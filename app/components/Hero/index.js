
import Link from 'next/link';
export default function index() {
    return (
        <div>
            <div className="h-auto lg:h-screen relative lg:bg-[url('/images/hero.png')] bg-right bg-contain bg-no-repeat">
                <div className="mx-auto h-full py-12 px-4 sm:px-6 md:px-12 xl:container">
                    <div className="w-full flex justify-end text-xl lg:text-2xl items-center space-x-12">
                        <div className="flex justify-center items-center space-x-6">
                            <a href="#content1" className="">Content 1</a>
                            <a href="#content2" className="">Content 2</a>
                        </div>
                        <button className="text-[#279AFF] hover:text-[#147CC9]">
                            <Link href="/dashboard"> Login  </Link>
                        </button>
                    </div>
                    <div className="h-full py-12 lg:py-20 xl:py-0 flex-col lg:w-3/6 xl:w-2/6 2xl:w-4/12  flex justify-center items-start 2xl:pl-20">
                        <h1 className="text-4xl lg:text-6xl">
                            Lorem Ipsum Design
                        </h1>
                        <p className="mt-6 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>

                        <button className="bg-[#279AFF] hover:bg-[#147CC9] mt-12 text-white py-3 px-8">
                            <Link href="/dashboard"> Login  </Link>
                        </button>

                        <div className="w-full mt-6">
                            <img className="lg:hidden w-full" src="/images/hero.png " alt="bg" />
                        </div>
                    </div>
                </div>
            </div>

            <section id="content1">
                <div className="mx-auto mt-20 w-full h-full py-12 px-4 sm:px-6 md:px-12 2xl:px-20 xl:container">
                    <div className="flex justify-start flex-col items-start lg:w-3/6 xl:w-2/6 2xl:w-4/12">
                        <h1 className="text-4xl lg:text-6xl">
                            Content 1
                        </h1>
                        <p className="mt-6 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div className="mt-12  gap-10 md:gap-4 xl:gap-10 flex justify-between items-center flex-col md:flex-row w-full">
                        <div className=" flex sm:w-96 md:w-full text-left flex-col gap-6 justify-start items-stretch">
                            <div className="w-full">
                                <img className="h-52 md:h-auto object-cover md:object-contain w-full" src="/images/cta.png" alt="content 1 img" />
                            </div>
                            <p className="lg:text-base text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className=" flex sm:w-96 md:w-full text-left flex-col gap-6 justify-start items-stretch">
                            <div className="w-full">
                                <img className="h-52 md:h-auto object-cover md:object-contain w-full" src="/images/cta.png" alt="content 1 img" />
                            </div>
                            <p className="lg:text-base text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className=" flex sm:w-96 md:w-full text-left flex-col gap-6 justify-start items-stretch">
                            <div className="w-full">
                                <img className="h-52 md:h-auto object-cover md:object-contain w-full" src="/images/cta.png" alt="content 1 img" />
                            </div>
                            <p className="lg:text-base text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className=" flex sm:w-96 md:w-full text-left flex-col gap-6 justify-start items-stretch">
                            <div className="w-full">
                                <img className="h-52 md:h-auto object-cover md:object-contain w-full" src="/images/cta.png" alt="content 1 img" />
                            </div>
                            <p className="lg:text-base text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content2">
                <div className="h-auto mt-20 lg:h-screen relative bg-[url('/images/content2-bg.png')] w-full bg-center bg-cover bg-no-repeat">
                    <div className="mx-auto  w-full h-full py-12 px-4 sm:px-6 md:px-12 lg:py-16 xl:py-20 2xl:px-20 xl:container">
                        <div className="w-full flex justify-end">
                            <div className="flex justify-end flex-col items-end lg:w-3/6 xl:w-2/6 2xl:w-4/12">
                                <h1 className="text-4xl lg:text-6xl">
                                    Content 2
                                </h1>
                                <p className="mt-6 text-right text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                            </div>
                        </div>
                        <div className="mt-24 2xl:mt-12  gap-10 md:gap-4 xl:gap-10 flex justify-between items-center flex-col md:flex-row w-full">
                            <div className="w-52 group">
                                <img className="w-full" src="/images/Asset 4-1.png" alt="hover images" />

                            </div>
                            <div className="w-52 group">
                                <img className="w-full" src="/images/Asset 4.png" alt="hover images" />

                            </div>

                            <div className="w-52 group">
                                <img className="w-full" src="/images/Asset 4-1.png" alt="hover images" />

                            </div>
                        </div>
                    </div>
                    <div className="w-full py-10 bg-[#279AFF]">
                    </div>
                </div>
            </section>
        </div>
    )
}

