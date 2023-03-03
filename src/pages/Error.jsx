import React from "react";
import { Link } from "react-router-dom";
import {Button} from "../components/Button";

const Error = () => {
  return (
    <div className="items-center flex-col flex justify-center dark:bg-slate-900 dark:text-white h-screen w-full">
      <p className="">Oops something went wrong</p>
      <Link to={"/"} className="w-64">
        <Button>back home</Button>
      </Link>
    </div>
  );
};

export default Error;
