import React from "react";
import { useAxiosGet } from "../../hooks/usehook/index";
import Card from "./card";

const Home = () => {
  const { data, loading, error } = useAxiosGet({ url: "/zonuz" });

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (error) {
    return <div>Xatolik yuz berdi: {error.message}</div>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div>Ma'lumotlar topilmadi.</div>;
  }

  return (
    <section>
      <div className="container1 w-[90%] m-auto">

        <div className="my-3">
          <h1 className="text-2xl font-medium">Популярные</h1>
          <div className="grid grid-cols-5 gap-4 mt-5 max-[1270px]:grid-cols-4 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1">
            {data.map((value) => (
              <Card key={value.id} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
