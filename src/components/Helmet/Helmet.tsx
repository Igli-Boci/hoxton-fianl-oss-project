import React from "react";

const Helmet = (props: { title: string }) => {
  document.title = "OSS -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
