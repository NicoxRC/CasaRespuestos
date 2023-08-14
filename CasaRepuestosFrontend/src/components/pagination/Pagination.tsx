import { PaginationInterface } from '../../types/paginationInterface';

export default function Pagination(props: PaginationInterface): JSX.Element {
  const { products, pageSize, currentPage, onPageChange } = props;
  let index: number[] = [];
  let showPages: number[] = [];

  for (let i = 1; i <= Math.ceil(products?.length / pageSize); i++) {
    index.push(i);
  }

  if (index.length <= 1) {
    return <></>;
  } else if (index.length == 2) {
    currentPage == 1
      ? (showPages = [currentPage, currentPage + 1])
      : (showPages = [currentPage - 1, currentPage]);
  } else {
    switch (currentPage) {
      case 1:
        showPages = [currentPage, currentPage + 1, currentPage + 2];
        break;
      case Math.max(...index):
        showPages = [currentPage - 2, currentPage - 1, currentPage];
        break;
      default:
        showPages = [currentPage - 1, currentPage, currentPage + 1];
        break;
    }
  }

  return (
    <nav>
      <ul className="pagination justify-content-center flex-wrap mt-3">
        {currentPage !== 1 ? (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={() => onPageChange(1)}
            >
              <span>Primero</span>
            </a>
          </li>
        ) : null}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() =>
              onPageChange(
                currentPage === 1 ? Math.max(...index) : currentPage - 1
              )
            }
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {showPages.map((el) => (
          <li
            className={el === currentPage ? 'page-item active' : 'page-item'}
            key={el}
          >
            <a
              onClick={() => onPageChange(el)}
              className="page-link"
              href="#"
              style={{ cursor: 'pointer' }}
            >
              {el}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() =>
              onPageChange(
                Math.max(...index) === currentPage ? 1 : currentPage + 1
              )
            }
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        {currentPage !== Math.max(...index) ? (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={() => onPageChange(Math.max(...index))}
            >
              <span>Ultimo</span>
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
