import { useEffect, useState } from "react";
import Headerfour from "../components/headers/Headerfour";
import Footerfour from "../components/footers/Footerfour";
import PageHeader from "../components/modules/Home/PageHeader";
import CoursesData from "../api/courses.json";
import CourseCard from "../components/partials/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = CoursesData;
        setCourses(data);

        const uniqueCategories = [
          ...new Set(data.map((item) => item.categoryID)),
        ];
        const categories = uniqueCategories.map((categoryID) => {
          const category = data.find(
            (item) => item.categoryID === categoryID,
          ).category;
          return { categoryID, category };
        });
        setCategoryList(categories);
      } catch (error) {
        return null
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (categoryList && categoryList.length) {
      setSelectedCategory(categoryList[0].categoryID);
    }
  }, [categoryList]);

  useEffect(() => {
    const filtered = courses.filter(
      (course) => course.categoryID === selectedCategory,
    );
    setFilteredCourses(filtered);
  }, [courses, selectedCategory]);

  return (
    <div>
      <Headerfour />
      <PageHeader
        title="Courses"
        subtitle="Courses"
        image='images/bg/home1/2.png'
      />
      

      <div className="course course--style1 padding-top padding-bottom">
        <div className="container">
          <div className="course__topbar">
            <div
              className="course__topbar-right"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {categoryList.slice(0, 6).map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <button
                      className={`tab-btn ${selectedCategory === item.categoryID ? "active" : ""
                        }`}
                      onClick={() => setSelectedCategory(item.categoryID)}
                    >
                      {item.category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="course__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-english"
                role="tabpanel"
                content="pills"
                aria-labelledby="pills-english-tab"
                tabIndex="0"
              >
                <div className="row g-4">
                  {filteredCourses.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <CourseCard courseDetails={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footerfour />
    </div>
  );
};

export default Courses;
