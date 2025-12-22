import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";

import { authorityConfig, teamConfig } from "@/lib/site/authority-team.config";
import AuthorityCard from "./components/authority-card";
import AuthorityMembersList from "./components/authority-members-list";
import TeamCard from "./components/team-card";

export default function AuthorityTeamPage() {
  const { titularMembers } = authorityConfig;
  const { team } = teamConfig;

  return (
    <div className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/about-us/team/bg-header-team.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle="Autoridades y Equipo" titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4 lg:px-0">
            <div className="space-y-4">
              <p>
                La Sociedad de Productores Forestales es dirigida y gestionada
                por una Comisión Directiva, electa por los socios cada dos años.
              </p>
              <h3 className="text-spf-green-500 text-4xl">
                Miembros Titulares
              </h3>
            </div>

            {/* Presidencia */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {titularMembers.presidency.map((member, index) => (
                <AuthorityCard
                  key={index}
                  name={member.name}
                  imageSrc={member.imageSrc}
                  title={member.title}
                />
              ))}
            </div>

            {/* Membros */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <AuthorityMembersList
                sectionTitle={titularMembers.secretary.sectionTitle}
                names={titularMembers.secretary.members}
              />

              <AuthorityMembersList
                sectionTitle={titularMembers.treasury.sectionTitle}
                names={titularMembers.treasury.members}
                className="col-span-2"
              />

              <AuthorityMembersList
                sectionTitle={titularMembers.vowels.sectionTitle}
                names={titularMembers.vowels.members}
              />

              <AuthorityMembersList
                sectionTitle={titularMembers.alternates.sectionTitle}
                names={titularMembers.alternates.members}
              />

              <AuthorityMembersList
                sectionTitle={titularMembers.fiscalCommition.sectionTitle}
                names={titularMembers.fiscalCommition.members}
                subSectionTitle={titularMembers.fiscalCommition.subsectionTitle}
                subSectionNames={
                  titularMembers.fiscalCommition.subSectionMembers
                }
              />
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="bg-spf-green-100 py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4 lg:px-0">
            <h3 className="text-spf-green-500 text-4xl">Nuestro equipo</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  jobTitle={member.jobTitle}
                  imageSrc={member.imageSrc}
                  linkedInUrl={member.linkedInUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
