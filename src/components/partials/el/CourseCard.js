import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
const CourseCard = ({ courseDetails }) => {
  return (
    <div className="course__item">
      <div className="course__item-inner">
        <div className="course__thumb">
          <img src={courseDetails.image} alt="course Images" />
          <Link href="" className={`course__btn course__btn--save ${courseDetails.id==1 ||courseDetails.id==6 || courseDetails.id==7? 'course__btn--active': ''}`}>
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
        </div>
        <div className="course__content">
          <div className="course__content-top">
            <span className={`course__meta-tag course__meta-tag--cat${courseDetails.category === 'Αγγλικά' || courseDetails.category === 'English'? '1':'2'}`}>
              {courseDetails.category}
            </span>
            <div className="course__focus-inner">
              <span>{courseDetails.rating}</span>
              <img src="/images/course/star.png" alt="review-star" />
              <span>({courseDetails.students} μαθητές)</span>
            </div>
          </div>
          <h6>
            <Link href="/el/course-details">{courseDetails.title}</Link>
          </h6>
          <div className="course__content-bottom">
            <Link href="/el/mentor-details">
              <img src="/images/avatar/1.png" alt="avatar" />
              {courseDetails.instructor}
            </Link>
            <div className="course-price">
              <span>€{courseDetails.price}</span>
            </div>
          </div>
          <div className="course__meta">
            <span>📚 {courseDetails.lessons} μαθήματα</span>
            <span>⏱ {courseDetails.duration}</span>
            <span>📊 {courseDetails.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
