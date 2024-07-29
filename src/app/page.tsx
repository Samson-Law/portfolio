import Header from "@/components/header/Header";
import ProjectList from "@Components/projectList/ProjectList";

export default function Home() {
  return (
    <div className={`wrapper`}>
      <Header />
      <main>
        <ProjectList />
      </main>
    </div>
  );
}
