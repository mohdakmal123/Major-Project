
import React from "react";

const UpdateTemplate = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Portfolio",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=500",
      preview: "https://portfolio-template.vercel.app",
    },
    {
      id: 2,
      name: "E-Commerce Store",
      image: "https://picsum.photos/id/1015/500/300",
      preview: "https://ecommerce-demo.vercel.app",
    },
    {
      id: 3,
      name: "Business Landing Page",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
      preview: "https://business-landing.vercel.app",
    },
    {
      id: 4,
      name: "Restaurant Website",
      image: "https://picsum.photos/id/1080/500/300",
      preview: "https://restaurant-template.vercel.app",
    },
    {
      id: 5,
      name: "Startup Blog",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      preview: "https://startup-blog.vercel.app",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Update Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{template.name}</h2>
            <a
              href={template.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Live Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateTemplate;
