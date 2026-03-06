import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import AuthorityCard from "./components/authority-card";
import AuthorityMembersList from "./components/authority-members-list";
import TeamCard from "./components/team-card";
import { getAuthorities } from "@/lib/authorities/get-authorities";
import ErrorDataLoading from "@/components/errors/error-data-loading";
import getTeam from "@/lib/team/get-team";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLocale;
  const tTeam = await getTranslations({ locale, namespace: "team" });

  return {
    title: tTeam("title"),
    description: tTeam("description"),
    alternates: {
      canonical: `/${typedLocale}/sobre-spf/autoridades-y-equipo`,
      languages: {
        es: "/es/sobre-spf/autoridades-y-equipo",
        en: "/en/sobre-spf/autoridades-y-equipo",
      },
    },
  };
}

export default async function AuthorityTeamPage() {
  const locale = (await getLocale()) as AppLocale;

  const { titularMembers } = await getAuthorities(locale);
  const team = await getTeam(locale);
  const tTeam = await getTranslations("team");
  const tAuthorities = await getTranslations("authorities");

  return (
    <div className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/about-us/team/bg-header-team.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle={tTeam("title")} titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4">
            <div className="space-y-4">
              <p>{tTeam("description")}</p>
              <h3 className="text-spf-green-500 text-4xl">
                {tTeam("subtitle")}
              </h3>
            </div>

            {titularMembers ? (
              <>
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
                    sectionTitle={tAuthorities(
                      `sections.${titularMembers.secretary.sectionKey}`,
                    )}
                    names={titularMembers.secretary.members}
                  />

                  <AuthorityMembersList
                    sectionTitle={tAuthorities(
                      `sections.${titularMembers.treasury.sectionKey}`,
                    )}
                    names={titularMembers.treasury.members}
                    className="col-span-2"
                  />

                  <AuthorityMembersList
                    sectionTitle={tAuthorities(
                      `sections.${titularMembers.vowels.sectionKey}`,
                    )}
                    names={titularMembers.vowels.members}
                  />

                  <AuthorityMembersList
                    sectionTitle={tAuthorities(
                      `sections.${titularMembers.alternates.sectionKey}`,
                    )}
                    names={titularMembers.alternates.members}
                  />

                  <AuthorityMembersList
                    sectionTitle={tAuthorities(
                      `sections.${titularMembers.fiscalCommition.sectionKey}`,
                    )}
                    names={titularMembers.fiscalCommition.members}
                    subSectionTitle={
                      titularMembers.fiscalCommition.subsectionKey
                        ? tAuthorities(
                            `sections.${titularMembers.fiscalCommition.subsectionKey}`,
                          )
                        : undefined
                    }
                    subSectionNames={
                      titularMembers.fiscalCommition.subSectionMembers
                    }
                  />
                </div>
              </>
            ) : (
              <ErrorDataLoading />
            )}
          </div>
        </section>

        {/* Equipo */}
        <section className="bg-spf-green-100 py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4">
            <h3 className="text-spf-green-500 text-4xl">Nuestro equipo</h3>

            {team && team.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {team.map((member, index) => (
                  <TeamCard
                    key={member.name + index}
                    name={member.name}
                    jobTitle={member.jobTitle}
                    imageSrc={member.imageSrc}
                    linkedInUrl={member.linkedInUrl}
                  />
                ))}
              </div>
            ) : (
              <ErrorDataLoading />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
