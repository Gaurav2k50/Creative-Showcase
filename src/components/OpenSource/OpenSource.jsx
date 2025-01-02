// import React from "react";
// import "./OpenSource.css";

// const OpenSource = () => {
//   return (
//     <div className="OpenSource">
//       <div className="organizations">
//         <div className="organizations-header-div">
//           <h1 className="organizations-header">Contributed Organizations</h1>
//         </div>
//         {/* <div className="organizations-main-div">
//                 <ul className="dev-icons-orgs"></ul>
//             </div> */}
//       </div>
//     </div>
//   );
// };

// export default OpenSource;

import React from "react";
import "./OpenSource.css";

const OpenSource = () => {
  const contributions = [
    {
      name: "React",
      description:
        "Contributed to improving React documentation and fixing bugs.",
      link: "https://github.com/facebook/react",
    },
    {
      name: "Next.js",
      description:
        "Implemented performance optimizations and added new features.",
      link: "https://github.com/vercel/next.js",
    },
    {
      name: "OpenAI API Libraries",
      description: "Enhanced functionality in Python and JavaScript SDKs.",
      link: "https://github.com/openai/openai-node",
    },
  ];

  return (
    <div className="OpenSource">
      <div className="organizations">
        <div className="organizations-header-div">
          <h1 className="organizations-header">Contributed Organizations</h1>
        </div>
        <div className="organizations-main-div">
          {contributions.map((org, index) => (
            <div key={index} className="org-card">
              <h2 className="org-name">{org.name}</h2>
              <p className="org-description">{org.description}</p>
              <a
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className="org-link"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
