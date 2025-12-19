import { cn } from "@/lib/utils";

interface Member {
  name: string;
}

interface MembersListProps {
  sectionTitle: string;
  names: Member[];
  subSectionTitle?: string;
  subSectionNames?: Member[];
  className?: string;
}

export default function AuthorityMembersList({
  sectionTitle,
  names,
  subSectionTitle,
  subSectionNames,
  className,
}: MembersListProps) {
  return (
    <div className={cn("", className)}>
      <h4 className="text-spf-green-500 text-2xl">{sectionTitle}</h4>
      {names.map((member, index) => (
        <p key={index}>{member.name}</p>
      ))}
      {subSectionTitle && <p className="mt-2 font-bold">{subSectionTitle}:</p>}
      {subSectionNames &&
        subSectionNames.map((member, index) => (
          <p key={index}>{member.name}</p>
        ))}
    </div>
  );
}
