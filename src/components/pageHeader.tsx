import React from "react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  currentPage: string;
  homePath?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  currentPage,
  homePath = "/",
}) => {
  return (
    <div className="cart_head">
      <div className="headi">{title}</div>

      <div className="links_Wrp">
        <Link to={homePath}>
          <div className="links">
            <i className="fas fa-home"></i>
            Home
          </div>
        </Link>

        <div className="links">
          <i className="far fa-chevron-right"></i>
          {currentPage}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
