// import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

import React, { useEffect, useState } from "react";
// import { ImageMagnify } from "react-image-magnify";

import "./projects.css";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(projects);

  const [zoomedImage, setZoomedImage] = useState(null);

  let filters = [
    "Модельные Коврики",
    "Пошив Сидений",
    "Перетяжка Автопотолков",
    "Шумоизоляция",
    "Полная Реставрация Ретро Авто",
    "Рихтовка Любой Сложности",
    "Покраска",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = projects.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...projects]);
    }
  };

  const handleImageClick = (img) => {
    setZoomedImage(img);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "actives" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.title}</p>
            {zoomedImage === item.img ? (
              <div className="zoomed-image" onClick={handleCloseZoom}>
                <img src={item.img} alt="#" />
              </div>
            ) : (
              <img
                src={item.img}
                alt="#"
                onClick={() => handleImageClick(item.img)}
              />
            )}
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// const Projects = () => {
//   return (
//     <main className="section">
//       <div className="container">
//         <h2 className="title-1">Сервисы</h2>
//         <ul className="projects">
//           {projects.map((project, index) => {
//             return (
//               <Project
//                 key={index}
//                 title={project.title}
//                 img={project.img}
//                 index={index}
//               />
//             );
//           })}
//         </ul>

//       </div>
//     </main>
//   );
// };

// export default Projects;
