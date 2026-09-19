import  {  useEffect, useState } from "react";
import type { Technology } from "../types/Technology";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack! `);
      return;
    }
    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((prev) => prev.filter((item) => item.id !== id));
    if (technology) {
      toast.info(`${technology.name} Removed from your Stack`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Explore the{""}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAdd}
              isAdded={stack.some((item) => item.id === technology.id)}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
