import type { FC } from "react";

type Job = {
  title: string;
  description: string;
  badges: string[];
};

const jobs: Job[] = [
  {
    title: "UI/UX Designer",
    description: "We are looking for a mid-level UI/UX Designer to join our team.",
    badges: ["100% remote", "Full time"],
  },
  {
    title: "Web Developer",
    description: "We are looking for an expert Web Developer to join our team.",
    badges: ["100% remote", "Full time"],
  },
  {
    title: "Mobile Development",
    description: "We are looking for an expert Mobile Developer to join our team.",
    badges: ["100% remote", "Full time"],
  },
];

const JobCards: FC = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="flex flex-col justify-between gap-4 rounded-[18px] bg-[#F3FFFA] px-6 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)] md:flex-row md:items-center md:px-8 md:py-7"
          >
            <div className="space-y-2">
              <h3 className="text-[18px] font-semibold text-[#1E1E1E]">{job.title}</h3>
              <p className="text-[14px] text-[#4D4D4D]">{job.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {job.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-[#00A478] px-3 py-2 text-[12px] font-semibold text-[#0EAF66]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#0EAF66]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <button className="inline-flex h-10 w-[88px] items-center justify-center rounded-full bg-[#0EAF66] text-sm font-semibold text-white shadow-md shadow-[#0EAF66]/20 transition hover:bg-[#0c8d53]">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCards;
