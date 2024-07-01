import { mySkills } from "../helpers/skillData";

const Skills = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center mt-md-5">
      <article className="skillDiv row container mt-md-5  m-auto col-8 gap-2 d-flex align-items-center justify-content-center">
        {mySkills.map((item, i) => (
          <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
            <div className="image d-flex align-items-center justify-content-center">
              {" "}
              <img src={item.logo} alt={item.title} />
            </div>
            <div className="title text-light fs-5">{item.title}</div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Skills;
