import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from 'reactstrap';

const Paginaton = () => (
  <Pagination aria-label="Page navigation example">
    <PaginationItem className="links">
      <Link to="/FirstLesson" className="inactive" exact>
        {' '}1{' '}
      </Link>
    </PaginationItem>
    <PaginationItem>
      <Link to="/SecondLesson" className="inactive" exact>
        {' '}2{' '}
      </Link>
    </PaginationItem>
    <PaginationItem>
      <Link to="/ThirdLesson" className="inactive" exact>
        {' '}3{' '}
      </Link>
    </PaginationItem>
    <PaginationItem>
      <Link to="/FourthLesson" className="inactive" exact>
        {' '}4{' '}
      </Link>
    </PaginationItem>
    <PaginationItem>
      <Link to="/FifthLesson" className="inactive" exact>
       {' '}5{' '}
      </Link>
    </PaginationItem>
    <PaginationItem>
      <Link to="/SixthLesson" className="inactive" exact>
        {' '}6{' '}
      </Link>
    </PaginationItem>
    <PaginationItem>
      <Link to="/QuizzHtml" className="inactive" exact>
        {' '}Quizz{' '}
      </Link>
    </PaginationItem>
  </Pagination>
);

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Paginaton;
