// 'use client';

// import { FC, Fragment } from "react";

// import { useSearchStore } from "@/features/Search";

// import { Search, SeparatorLine } from "@/shared";
// import { CategoryInlineLink, CategoryModalItem } from "@/shared/ui/Categories";

// import { ICategoryItem } from "@/features/Search/ui/SearchModal";
// import "./style.scss";

// const SearchWithList: FC = () => {

//   const { search, isModalOpened, updateSearchValue, updateModalState } =
//     useSearchStore((state) => state);

//     const items: ICategoryItem[] = [
//       {
//         icon: "stack",
//         title: "Категория 1",
//         count: 10,
//         href: "/catalog/category",
//         items: [
//           {
//             image: "category-card-placeholder",
//             title: "Escape from Tarkov",
//             text: "Категория",
//             tag: "12 продуктов",
//             href: "/catalog/category/tarkov",
//           },
//         ],
//       },
//       {
//         icon: "stack",
//         title: "Категория 2",
//         count: 5,
//         href: "/catalog/category",
//         items: [
//           {
//             image: "category-card-placeholder",
//             title: "The Forest",
//             text: "Категория",
//             tag: "12 продуктов",
//             href: "/catalog/category/forest",
//           },
//         ],
//       },
//       {
//         icon: "stack",
//         title: "Категория 3",
//         count: 8,
//         href: "/catalog/category",
//         items: [
//           {
//             image: "category-card-placeholder",
//             title: "Arma 3",
//             text: "Категория",
//             tag: "12 продуктов",
//             href: "/catalog/category/arma",
//           },
//         ],
//       },
//       {
//         icon: "stack",
//         title: "Категория 4",
//         count: 3,
//         href: "/catalog/category",
//         items: [
//           {
//             image: "category-card-placeholder",
//             title: "Rust",
//             text: "Категория",
//             tag: "12 продуктов",
//             href: "/catalog/category/rust",
//           },
//         ],
//       },
//       {
//         icon: "stack",
//         title: "Категория 5",
//         count: 7,
//         href: "/catalog/category",
//         items: [
//           {
//             image: "category-card-placeholder",
//             title: "CS:GO",
//             text: "Категория",
//             tag: "12 продуктов",
//             href: "/catalog/category/csgo",
//           },
//         ],
//       },
//     ];

//   return (
//   <div className="search-modal__wrapper">
//   <Search
//     searchValue={search}
//     onChange={(value) => updateSearchValue(value)}
//     placeholder="Search"
//     clear
//     setRef={handleSearchRef}
//   />
// </div>
// <div className="search-modal__container">
//   <div className="search-modal-content">
//     <span className="search-modal-content__text">
//       Результат поиска:
//     </span>
//     <span className="search-modal-content__value">{search}</span>
//   </div>
//   <SeparatorLine />
//   {items.map((category, index) => (
//     <Fragment key={index}>
//       <CategoryInlineLink
//         icon={category.icon}
//         title={category.title}
//         href={category.href}
//         count={category.count}
//       />
//       <ul className="search-modal__items">
//         {category.items.map((item, index2) => (
//           <CategoryModalItem {...item} key={index2} />
//         ))}
//       </ul>
//       {index !== items.length - 1 && <SeparatorLine />}
//     </Fragment>
//   ))}
// </div> );
// };

// export default SearchWithList;
