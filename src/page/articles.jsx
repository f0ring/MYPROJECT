import { useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const titles = [
  "Daily Journal: Finding Peace in Small Moments",
  "Creative Crafting: DIY Home Décor Ideas",
  "Travel Vlog: Exploring the Streets of Kyoto",
  "Blogging Tips: Growing Your Online Audience",
  "Photography Journal: Capturing the Golden Hour",
  "Handmade Crafts: A Beginner’s Guide",
  "Vlogging 101: From Camera Setup to Editing",
  "Personal Blog: My Journey into Minimalism",
  "Cooking Journal: Experiments in the Kitchen",
  "Craft Workshop: Creating with Clay",
  "Vlog: A Day in the Life of a Digital Nomad",
  "Blog: How to Stay Consistent as a Writer",
  "Art Journal: Playing with Watercolors",
  "Craft Ideas for Kids: Fun & Easy Projects",
  "Vlog: Behind the Scenes of Content Creation",
  "Blog: The Power of Storytelling in Marketing",
];

const allArticles = titles.map((title, i) => ({
  id: i + 1,
  title,
  status: i % 2 === 0 ? "Published" : "Draft",
  edited: `${i + 1} days ago`,
}));

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3; // ✅ Show 3 rows per page now

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentArticles = allArticles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allArticles.length / perPage);

  return (
    <div className="container mt-4">
      {/* Left-aligned heading */}
      <h2 className="text-start">My Articles</h2>
      
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>
                <Badge
                  pill
                  bg={article.status === "Published" ? "success" : "warning"}
                >
                  {article.status}
                </Badge>
              </td>
              <td>{article.edited}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Centered Pagination */}
      <div className="d-flex justify-content-center">
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
    </div>
  );
};

export default Articles;
