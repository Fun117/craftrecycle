import ProjectMainContent from "@/components/project/maincontent";
import ProjectSideContent from "@/components/project/sidecontent";
import ProjectTopContent from "@/components/project/topcontent";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center">
      <ProjectTopContent />
      <nav className="flex flex-col-reverse lg:!flex-row items-start gap-2 container max-w-[1324px] p-5 mx-auto"></nav>
      <div className="flex flex-col-reverse lg:!flex-row items-start gap-2 container max-w-[1324px] p-5 mx-auto">
        <ProjectMainContent />
        <ProjectSideContent />
      </div>
    </div>
  );
}
