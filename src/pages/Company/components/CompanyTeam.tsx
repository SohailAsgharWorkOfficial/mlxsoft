import type { FC } from "react";

import HeroImage from "../../../assets/images/heroimage.png";

const team = [
  { name: "Leslie Alexander", role: "UI/UX Designer" },
  { name: "Darlene Robertson", role: "Lead Designer" },
  { name: "Wade Warren", role: "Marketing" },
  { name: "Courtney Henry", role: "Developer" },
  { name: "Cody Fisher", role: "Designer" },
  { name: "Devon Lane", role: "Engineer" },
];

const CompanyTeam: FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-3">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Marvellex
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold text-[#1E1E1E]">Meet Talent &amp; Experience</h3>
          <p className="text-[14px] text-[#4D4D4D]">
            A multidisciplinary crew of designers, developers, and strategists.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-[18px] border border-[#E8F2EC] shadow-sm">
              <div className="h-52 w-full bg-[#E7F2EC]">
                <img src={HeroImage} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[15px] font-semibold text-[#1E1E1E]">{member.name}</p>
                <p className="text-[12px] text-[#4D4D4D]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTeam;
