import type { FC, FormEvent } from "react";

const ContactForm: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-white pb-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[20px] bg-[#0E8D60] px-6 py-10 text-white shadow-[0_18px_38px_rgba(0,0,0,0.15)] md:px-10">
          <div className="space-y-3 text-center">
            <h3 className="font-faroSad text-[24px] font-semibold leading-[1.3]">
              If you have any project or
              <br />
              need help. <span className="text-[#F7EA82]">Contact Us</span>
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                placeholder="Name"
                className="h-11 rounded-md border border-[#1BB57D] bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/70 focus:border-white"
              />
              <input
                required
                placeholder="Email"
                type="email"
                className="h-11 rounded-md border border-[#1BB57D] bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/70 focus:border-white"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                placeholder="Phone"
                className="h-11 rounded-md border border-[#1BB57D] bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/70 focus:border-white"
              />
              <input
                placeholder="Address"
                className="h-11 rounded-md border border-[#1BB57D] bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/70 focus:border-white"
              />
            </div>
            <textarea
              required
              placeholder="Message"
              className="h-28 w-full rounded-md border border-[#1BB57D] bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/70 focus:border-white"
            />

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#F7EA82] px-6 text-sm font-semibold text-[#1E1E1E] shadow-md shadow-black/10 transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
