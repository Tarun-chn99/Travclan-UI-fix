const weewImageSources = [
    {
      src: "https://home.travclan.com/wp-content/uploads/2023/06/Logo-weew.png",
      width: "647w",
    },
    {
      src: "https://home.travclan.com/wp-content/uploads/2023/06/Logo-weew-300x118.png",
      width: "300w"
    },
    {
      src: "https://home.travclan.com/wp-content/uploads/2023/06/Logo-weew-150x59.png",
      width: "150w"
    }
  ];

const satteCatalogueSources = [
{
    src: "https://home.travclan.com/wp-content/uploads/2024/04/Satte-Catalogue-Draft-14th-Feb.png",
    width: "381w"
},
{
    src: "https://home.travclan.com/wp-content/uploads/2024/04/Satte-Catalogue-Draft-14th-Feb-203x300.png",
    width: "203w"
},
{
    src: "https://home.travclan.com/wp-content/uploads/2024/04/Satte-Catalogue-Draft-14th-Feb-150x222.png",
    width: "150w"
}
];

const untitledDesignSources = [
    { src: "https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2-1021x1024.png", width: "1021w" },
    { src: "https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2-300x300.png", width: "300w" },
    { src: "https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2-150x150.png", width: "150w" },
    { src: "https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2-768x770.png", width: "768w" },
    { src: "https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2-96x96.png", width: "96w" },
    { src: "https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2.png", width: "1338w" },
  ];
  
export const untitledDesignSrcSet = untitledDesignSources.map(img => `${img.src} ${img.width}`).join(", ");
export const satteCatalogueSrcSet = satteCatalogueSources.map(img => `${img.src} ${img.width}`).join(', ');
export const weewSrcSetString = weewImageSources.map(img => `${img.src} ${img.width}`).join(", ");
  