import React from "react";
import AcademicCard from "../components/AcademicCard";
import HeroWaveSection from "../components/HeroWaveSection";

// Academic images
import prePrimaryImg from "../assets/images/pre-primary.png";
import primaryImg from "../assets/images/primary.png";
import middleImg from "../assets/images/middle.png";
import highSchoolImg from "../assets/images/highschool.png";

const Academics = () => {
  // Static academic programs data
  const academicsData = [
    {
      title: "Pre-Primary",
      subtitle: "Kindergarten Programs",
      description:
        "Nurturing young minds with play-based learning and foundational concepts. Our Pre-Primary program focuses on developing social skills, creativity, and early literacy.",
      image: prePrimaryImg,
    },
    {
      title: "Primary",
      subtitle: "Grades 1-5",
      description:
        "Building strong academic foundations with emphasis on English, Mathematics, and Science. Interactive learning methodologies ensure comprehensive development.",
      image: primaryImg,
    },
    {
      title: "Middle",
      subtitle: "Grades 6-8",
      description:
        "Advanced curriculum preparing students for higher academics. Focus on critical thinking, research skills, and personality development.",
      image: middleImg,
    },
    {
      title: "High School",
      subtitle: "Grades 9-12",
      description:
        "Rigorous academic program with specialized streams. Expert faculty and modern infrastructure support student excellence and competitive exams preparation.",
      image: highSchoolImg,
    },
  ];

  return (
    <>
      <title>Academics | Holy Redeemer School</title>
      <div className="bg-white">
        <HeroWaveSection
          eyebrow="Discover Our Programs"
          title="Academics"
          subtitle="A continuum of learning that nurtures curious minds from early childhood through high school."
        />

        {/* Academic Cards */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
            {academicsData.map((item, index) => (
              <AcademicCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;
