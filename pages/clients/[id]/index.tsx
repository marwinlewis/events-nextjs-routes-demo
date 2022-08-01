import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";

const ClientID: NextPage = () => {
  const router: NextRouter = useRouter();

  const onClickHandler = function () {
    router.push({
      pathname: "/clients/[id]/[project]",
      query: { id: router.query.id, project: "Mercedes AMG F1" },
    });
  };

  return (
    <div>
      <h1>The client&apos;s name: {router.query.id}</h1>
      <button onClick={onClickHandler}>Load projects</button>
    </div>
  );
};

export default ClientID;
