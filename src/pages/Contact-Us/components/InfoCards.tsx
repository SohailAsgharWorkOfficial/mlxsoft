import type { FC } from "react";

const InfoCards: FC = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6">
        <div className="text-center space-y-3">
          <h2 className="font-faroSad text-[26px] font-semibold text-[#1E1E1E] md:text-[30px]">
            Let Get in touch
          </h2>
          <p className="text-[14px] text-[#4D4D4D]">
            Get the most of reduction in your teams operating costs for the whole product which creates amazing
            UI/UX experiences.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {/* Call / WhatsApp */}
          <div className="rounded-[18px] border border-[#E6F0EA] bg-[#F3FFFA] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F7EA82] text-[#1E1E1E]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.308 15.275c0 .3-.066.608-.208.908-.142.3-.325.584-.567.85-.408.45-.858.775-1.366.983-.5.208-1.042.317-1.625.317-.85 0-1.758-.2-2.716-.608-.958-.408-1.917-.958-2.866-1.65-.969-.708-1.883-1.488-2.734-2.333-.843-.849-1.62-1.76-2.325-2.725-.684-.95-1.234-1.9-1.634-2.842-.4-.95-.6-1.858-.6-2.725 0-.567.1-1.109.3-1.609.2-.508.517-.975.958-1.392.534-.525 1.117-.783 1.733-.783.233 0 .466.05.675.15.217.1.409.25.559.467l1.934 2.725c.15.208.258.4.333.583.075.175.117.35.117.508 0 .2-.058.4-.175.592-.108.192-.266.392-.466.592l-.633.658c-.091.091-.133.2-.133.333 0 .066.008.125.025.192.025.066.05.116.067.166.15.275.408.633.775 1.066.375.433.775.875 1.208 1.317.45.442.883.85 1.325 1.225.433.366.791.616 1.075.766.042.017.092.042.15.067.067.025.133.033.208.033.142 0 .25-.05.342-.141l.633-.625c.208-.208.408-.366.6-.466.192-.117.383-.175.592-.175.158 0 .325.033.508.108.183.075.375.183.583.325l2.758 1.958c.216.15.366.325.458.533.083.208.133.416.133.65Z"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <h4 className="text-[16px] font-semibold text-[#1E1E1E]">Call Us / WhatsApp</h4>
            <div className="mt-3 space-y-1 text-[14px] text-[#1E1E1E]">
              <a href="tel:+923325320647" className="block hover:underline">
                +92 332 5320647
              </a>
              <a href="tel:+923335517347" className="block hover:underline">
                +92 333 5517347
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-[18px] border border-[#E6F0EA] bg-[#F3FFFA] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F7EA82] text-[#1E1E1E]">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 11.192c.341 0 .679-.068.995-.198.315-.13.602-.322.843-.563.242-.242.433-.528.563-.843.13-.316.198-.654.198-.996 0-.341-.068-.679-.198-.995a2.307 2.307 0 0 0-.563-.844 2.306 2.306 0 0 0-.843-.563 2.306 2.306 0 0 0-.995-.198c-.69 0-1.351.274-1.838.762a2.597 2.597 0 0 0-.762 1.838c0 .69.274 1.351.762 1.839A2.597 2.597 0 0 0 8 11.192Z"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                />
                <path
                  d="M1.017 7.075C2.658-.142 13.35-.133 14.983 7.083 15.942 11.317 13.308 14.9 11 17.117c-.807.778-1.884 1.213-3.004 1.213s-2.198-.435-3.004-1.213C2.692 14.9.058 11.308 1.017 7.075Z"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h4 className="text-[16px] font-semibold text-[#1E1E1E]">Address</h4>
            <p className="mt-3 text-[14px] text-[#1E1E1E]">
              Office # 234-235, 2nd Floor, Luxus Mall, Gulberg Green, Islamabad.
            </p>
          </div>

          {/* Follow Us */}
          <div className="rounded-[18px] border border-[#E6F0EA] bg-[#F3FFFA] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F7EA82] text-[#1E1E1E]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.943 21c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.943 2h1c-1.95 5.842-1.95 12.158 0 18h-1m7-18c1.95 5.842 1.95 12.158 0 18"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.943 15v-1c5.842 1.95 12.159 1.95 19 0v1M1.943 8c5.842-1.95 12.159-1.95 19 0"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="text-[16px] font-semibold text-[#1E1E1E]">Follow Us</h4>
            <div className="mt-3 flex gap-3 text-[#1E1E1E]">
              <a className="hover:text-[#0EAF66]" href="https://www.facebook.com/mlxsoft" target="_blank" rel="noreferrer">
                Fb
              </a>
              <a className="hover:text-[#0EAF66]" href="https://www.twitter.com/MLXSOFT" target="_blank" rel="noreferrer">
                Tw
              </a>
              <a
                className="hover:text-[#0EAF66]"
                href="https://instagram.com/mlxsoft?igshid=ZjE2NGZiNDQ="
                target="_blank"
                rel="noreferrer"
              >
                Ig
              </a>
              <a
                className="hover:text-[#0EAF66]"
                href="https://www.linkedin.com/company/marvellex-software-solutions/about/"
                target="_blank"
                rel="noreferrer"
              >
                In
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
