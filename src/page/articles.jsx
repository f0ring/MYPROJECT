import { useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const allArticles = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: `Article ${i + 1} Title Example`,
  status: i % 2 === 0 ? "Published" : "Draft",
  edited: `${i + 1} days ago`,
}));

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentArticles = allArticles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allArticles.length / perPage);

  return (
    <div className="container mt-4">
      <h2>My Articles</h2>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map(article => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>
                <Badge pill bg={article.status === "Published" ? "success" : "warning"}>
                  {article.status}
                </Badge>
              </td>
              <td>{article.edited}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default Articles;
