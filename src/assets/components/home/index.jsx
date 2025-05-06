import React from "react";
import { useAxiosGet } from "../../hooks/useaxios";
import Card from "../../../pages/home/home";

const HomeComponet = () => {
  const { data, loading } = useAxiosGet({ url: "/zonuz" });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-[90%] m-auto">
      <h1>Products:</h1>
      <div className="grid grid-cols-4 gap-5">
        {data?.map((value, index) => (
          <Card key={value.id || index} {...value} />
        ))}
      </div>
    </section>
  );
};

export default HomeComponet;
