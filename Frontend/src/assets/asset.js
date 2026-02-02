import dark_logo from "./dark-logo.png";
import light_logo from "./light-logo.png";
import hero_image from "./hero-image.png";
import prod001_1 from "./prod001/prod001_1.png";
import prod001_2 from "./prod001/prod001_2.png";
import prod001_3 from "./prod001/prod001_3.png";
import prod001_4 from "./prod001/prod001_4.png";
import prod002_1 from "./prod002/prod002_1.jpg";
import prod002_2 from "./prod002/prod002_1.jpg";
import prod002_3 from "./prod002/prod002_1.jpg";
import prod002_4 from "./prod002/prod002_1.jpg";
import prod003_1 from "./prod003/prod003_1.jpg";
import prod003_2 from "./prod003/prod003_2.jpg";
import prod003_3 from "./prod003/prod003_3.jpg";
import prod004_1 from "./prod004/prod004_1.png";
import prod004_2 from "./prod004/prod004_2.png";
import prod004_3 from "./prod004/prod004_3.png";
import prod005_1 from "./prod005/prod005_1.jpg";
import prod005_2 from "./prod005/prod005_2.jpg";
import prod005_3 from "./prod005/prod005_3.jpg";
import prod006_1 from "./prod006/prod006_1.png";
import prod006_2 from "./prod006/prod006_2.png";
import prod007_1 from "./prod007/prod007_1.png";
import prod007_2 from "./prod007/prod007_2.png";
import prod007_3 from "./prod007/prod007_3.png";
import prod007_4 from "./prod007/prod007_4.png";
import prod008_1 from "./prod008/prod008_1.jpg";
import prod008_2 from "./prod008/prod008_2.jpg";
import prod008_3 from "./prod008/prod008_3.jpg";
import prod009_1 from "./prod009/prod009_1.jpg";
import prod009_2 from "./prod009/prod009_2.jpg";
import prod009_3 from "./prod009/prod009_3.jpg";
import prod009_4 from "./prod009/prod009_4.jpg";
import prod010_1 from "./prod010/prod010_1.jpg";
import prod010_2 from "./prod010/prod010_2.jpg";
import prod010_3 from "./prod010/prod010_3.jpg";
import prod011_1 from "./prod011/prod011_1.png";
import prod011_2 from "./prod011/prod011_2.png";
import prod011_3 from "./prod011/prod011_3.png";
import prod011_4 from "./prod011/prod011_4.png";
import prod012_1 from "./prod012/prod012_1.png";
import prod012_2 from "./prod012/prod012_2.png";
import prod013_1 from "./prod013/prod013_1.png";
import prod013_2 from "./prod013/prod013_2.png";
import prod013_3 from "./prod013/prod013_3.png";
import prod014_1 from "./prod014/prod014_1.png";
import prod014_2 from "./prod014/prod014_2.png";
import prod014_3 from "./prod014/prod014_3.png";
import prod015_1 from "./prod015/prod015_1.png";
import prod015_2 from "./prod015/prod015_2.png";
import prod016_1 from "./prod016/prod016_1.png";
import prod016_2 from "./prod016/prod016_2.png";
import prod017_1 from "./prod017/prod017_1.png";
import prod017_2 from "./prod017/prod017_2.png";
import prod017_3 from "./prod017/prod017_3.png";
import prod018_1 from "./prod018/prod018_1.png";
import prod018_2 from "./prod018/prod018_2.png";
import prod018_3 from "./prod018/prod018_3.png";
import prod019_1 from "./prod019/prod019_1.jpg";
import prod019_2 from "./prod019/prod019_2.jpg";
import prod020_1 from "./prod020/prod020_1.png";
import prod020_2 from "./prod020/prod020_2.png";
import prod020_3 from "./prod020/prod020_3.png";
import prod021_1 from "./prod021/prod021_1.jpg";
import prod021_2 from "./prod021/prod021_2.jpg";
import prod022_1 from "./prod022/prod022_1.png";
import prod022_2 from "./prod022/prod022_2.png";
import prod023_1 from "./prod023/prod023_1.png";
import prod023_2 from "./prod023/prod023_2.png";
import prod023_3 from "./prod023/prod023_3.png";
import prod024_1 from "./prod024/prod024_1.jpg";
import prod024_2 from "./prod024/prod024_2.jpg";
import prod025_1 from "./prod025/prod025_1.png";
import prod025_2 from "./prod025/prod025_2.png";
import prod025_3 from "./prod025/prod025_3.png";
import prod026_1 from "./prod026/prod026_1.png";
import prod026_2 from "./prod026/prod026_2.png";
import prod026_3 from "./prod026/prod026_3.png";
import prod027_1 from "./prod027/prod027_1.jpg";
import prod027_2 from "./prod027/prod027_2.jpg";
import prod027_3 from "./prod027/prod027_3.jpg";
import prod028_1 from "./prod028/prod028_1.jpg";
import prod028_2 from "./prod028/prod028_2.jpg";
import prod029_1 from "./prod029/prod029_1.png";
import prod029_2 from "./prod029/prod029_2.png";
import prod029_3 from "./prod029/prod029_3.png";
import prod030_1 from "./prod030/prod030_1.png";
import prod030_2 from "./prod030/prod030_2.png";
import prod030_3 from "./prod030/prod030_3.png";
import prod031_1 from "./prod031/prod031_1.jpg";
import prod032_1 from "./prod032/prod032_1.jpg";
import prod033_1 from "./prod033/prod033_!.webp";
import prod034_1 from "./prod034/prod034_1.jpg";
import prod035_1 from "./prod035/prod035_1.jpg";
import prod036_1 from "./prod036/prod036_1.jpg";
import prod037_1 from "./prod037/prod037_1.jpg";
import prod038_1 from "./prod038/prod038_1.webp";
import prod039_1 from "./prod039/prod039_1.webp";
import prod040_1 from "./prod040/prod040_1.png";
import prod040_2 from "./prod040/prod040_2.png";
import prod040_3 from "./prod040/prod040_3.png";

export const assets = {
  dark_logo,
  light_logo,
  hero_image,
};

export const products = [
  {
    _id: "prod001",
    name: "Classic White T-Shirt",
    description: "Premium cotton crew neck t-shirt for everyday comfort",
    price: 24.99,
    image: [prod001_1, prod001_2, prod001_3, prod001_4],
    category: { gender: "men", season: "all-season" },
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-15",
    bestSeller: true,
  },
  {
    _id: "prod002",
    name: "Slim Fit Jeans",
    description: "Modern slim fit denim jeans with stretch comfort",
    price: 89.99,
    image: [prod002_1, prod002_2, prod002_3, prod002_4],
    category: { gender: "men", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["30x32", "32x32", "34x32", "36x32"],
    date: "2024-01-16",
    bestSeller: true,
  },
  {
    _id: "prod003",
    name: "Floral Summer Dress",
    description: "Lightweight floral pattern dress perfect for warm days",
    price: 65.99,
    image: [prod003_1, prod003_2, prod003_3],
    category: { gender: "women", season: "summer" },
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: "2024-01-10",
    bestSeller: true,
  },
  {
    _id: "prod004",
    name: "Winter Puffer Jacket",
    description: "Water-resistant puffer jacket with thermal insulation",
    price: 149.99,
    image: [prod004_1, prod004_2, prod004_3],
    category: { gender: "unisex", season: "winter" },
    subCategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: "2023-11-20",
    bestSeller: false,
  },
  {
    _id: "prod005",
    name: "Cargo Pants",
    description: "Military-style cargo pants with multiple pockets",
    price: 79.99,
    image: [prod005_1, prod005_2, prod005_3],
    category: { gender: "men", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["30x30", "32x30", "34x30", "36x30"],
    date: "2024-01-05",
    bestSeller: true,
  },
  {
    _id: "prod006",
    name: "Silk Blouse",
    description: "Elegant silk blouse for formal occasions",
    price: 89.99,
    image: [prod006_1, prod006_2],
    category: { gender: "women", season: "all-season" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M"],
    date: "2024-01-18",
    bestSeller: false,
  },
  {
    _id: "prod007",
    name: "Hooded Sweatshirt",
    description: "Cozy fleece hoodie with kangaroo pocket",
    price: 49.99,
    image: [prod007_1, prod007_2, prod007_3, prod007_4],
    category: { gender: "unisex", season: "fall" },
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2023-10-15",
    bestSeller: true,
  },
  {
    _id: "prod008",
    name: "Running Shorts",
    description: "Breathable running shorts with moisture-wicking fabric",
    price: 34.99,
    image: [prod008_1, prod008_2, prod008_3],
    category: { gender: "men", season: "summer" },
    subCategory: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-12",
    bestSeller: false,
  },
  {
    _id: "prod009",
    name: "Leather Jacket",
    description: "Genuine leather motorcycle jacket",
    price: 299.99,
    image: [prod009_1, prod009_2, prod009_3, prod009_4],
    category: { gender: "men", season: "fall" },
    subCategory: "outerwear",
    sizes: ["M", "L", "XL", "XXL"],
    date: "2023-09-25",
    bestSeller: true,
  },
  {
    _id: "prod010",
    name: "Maxi Skirt",
    description: "Floor-length flowy maxi skirt",
    price: 55.99,
    image: [prod010_1, prod010_2, prod010_3],
    category: { gender: "women", season: "spring" },
    subCategory: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-08",
    bestSeller: false,
  },
  {
    _id: "prod011",
    name: "Polo Shirt",
    description: "Classic polo shirt with embroidered logo",
    price: 44.99,
    image: [prod011_1, prod011_2, prod011_3, prod011_4],
    category: { gender: "men", season: "all-season" },
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: "2024-01-20",
    bestSeller: true,
  },
  {
    _id: "prod012",
    name: "Denim Jacket",
    description: "Vintage wash denim jacket with classic fit",
    price: 79.99,
    image: [prod012_1, prod012_2],
    category: { gender: "unisex", season: "spring" },
    subCategory: "outerwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: "2024-01-03",
    bestSeller: false,
  },
  {
    _id: "prod013",
    name: "Yoga Leggings",
    description: "High-waisted leggings with four-way stretch",
    price: 59.99,
    image: [prod013_1, prod013_2, prod013_3],
    category: { gender: "women", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: "2024-01-14",
    bestSeller: true,
  },
  {
    _id: "prod014",
    name: "Oxford Shirt",
    description: "Formal cotton oxford button-down shirt",
    price: 69.99,
    image: [prod014_1, prod014_2, prod014_3],
    category: { gender: "men", season: "all-season" },
    subCategory: "topwear",
    sizes: ["15", "15.5", "16", "16.5", "17"],
    date: "2024-01-17",
    bestSeller: false,
  },
  {
    _id: "prod015",
    name: "Knit Sweater",
    description: "Cable knit wool sweater for cold weather",
    price: 89.99,
    image: [prod015_1, prod015_2],
    category: { gender: "women", season: "winter" },
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: "2023-11-10",
    bestSeller: true,
  },
  {
    _id: "prod016",
    name: "Chino Pants",
    description: "Casual chino pants for smart casual occasions",
    price: 74.99,
    image: [prod016_1, prod016_2],
    category: { gender: "men", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["30x30", "32x30", "34x30", "36x30", "38x30"],
    date: "2024-01-09",
    bestSeller: false,
  },
  {
    _id: "prod017",
    name: "Wrap Dress",
    description: "Flattering wrap dress that suits all body types",
    price: 85.99,
    image: [prod017_1, prod017_2, prod017_3],
    category: { gender: "women", season: "all-season" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: "2024-01-22",
    bestSeller: true,
  },
  {
    _id: "prod018",
    name: "Track Pants",
    description: "Comfortable athletic track pants with side stripes",
    price: 54.99,
    image: [prod018_1, prod018_2, prod018_3],
    category: { gender: "unisex", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-07",
    bestSeller: false,
  },
  {
    _id: "prod019",
    name: "Raincoat",
    description: "Waterproof raincoat with hood and ventilation",
    price: 119.99,
    image: [prod019_1, prod019_2],
    category: { gender: "unisex", season: "rainy" },
    subCategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: "2023-12-05",
    bestSeller: true,
  },
  {
    _id: "prod020",
    name: "Tank Top",
    description: "Sleeveless cotton tank top for hot weather",
    price: 19.99,
    image: [prod020_1, prod020_2, prod020_3],
    category: { gender: "women", season: "summer" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M", "L"],
    date: "2024-01-11",
    bestSeller: false,
  },
  {
    _id: "prod021",
    name: "Bomber Jacket",
    description: "Stylish bomber jacket with ribbed cuffs",
    price: 99.99,
    image: [prod021_1, prod021_2],
    category: { gender: "men", season: "spring" },
    subCategory: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-25",
    bestSeller: true,
  },
  {
    _id: "prod022",
    name: "Pencil Skirt",
    description: "Form-fitting pencil skirt for office wear",
    price: 65.99,
    image: [prod022_1, prod022_2],
    category: { gender: "women", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["2", "4", "6", "8", "10"],
    date: "2024-01-19",
    bestSeller: false,
  },
  {
    _id: "prod023",
    name: "Graphic Tee",
    description: "Cotton t-shirt with printed graphic design",
    price: 29.99,
    image: [prod023_1, prod023_2, prod023_3],
    category: { gender: "unisex", season: "all-season" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    date: "2024-01-13",
    bestSeller: true,
  },
  {
    _id: "prod024",
    name: "Swim Trunks",
    description: "Quick-dry swim trunks with mesh lining",
    price: 39.99,
    image: [prod024_1, prod024_2],
    category: { gender: "men", season: "summer" },
    subCategory: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2023-12-20",
    bestSeller: false,
  },
  {
    _id: "prod025",
    name: "Trench Coat",
    description: "Classic belted trench coat for formal occasions",
    price: 199.99,
    image: [prod025_1, prod025_2, prod025_3],
    category: { gender: "women", season: "fall" },
    subCategory: "outerwear",
    sizes: ["XS", "S", "M", "L"],
    date: "2023-10-30",
    bestSeller: true,
  },
  {
    _id: "prod026",
    name: "Jogger Pants",
    description: "Casual jogger pants with elastic cuffs",
    price: 49.99,
    image: [prod026_1, prod026_2, prod026_3],
    category: { gender: "unisex", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: "2024-01-21",
    bestSeller: false,
  },
  {
    _id: "prod027",
    name: "Blazer",
    description: "Single-breasted blazer for professional settings",
    price: 149.99,
    image: [prod027_1, prod027_2, prod027_3],
    category: { gender: "men", season: "all-season" },
    subCategory: "outerwear",
    sizes: ["38R", "40R", "42R", "44R", "46R"],
    date: "2024-01-23",
    bestSeller: true,
  },
  {
    _id: "prod028",
    name: "Crop Top",
    description: "Trendy crop top with ribbed texture",
    price: 34.99,
    image: [prod028_1, prod028_2],
    category: { gender: "women", season: "summer" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M"],
    date: "2024-01-06",
    bestSeller: false,
  },
  {
    _id: "prod029",
    name: "Overcoat",
    description: "Wool blend overcoat for cold winters",
    price: 249.99,
    image: [prod029_1, prod029_2, prod029_3],
    category: { gender: "men", season: "winter" },
    subCategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: "2023-11-15",
    bestSeller: true,
  },
  {
    _id: "prod030",
    name: "Culottes",
    description: "Wide-leg culottes for a fashionable look",
    price: 69.99,
    image: [prod030_1, prod030_2, prod030_3],
    category: { gender: "women", season: "spring" },
    subCategory: "bottomwear",
    sizes: ["2", "4", "6", "8", "10", "12"],
    date: "2024-01-24",
    bestSeller: false,
  },
  {
    _id: "prod031",
    name: "Henley Shirt",
    description: "Long sleeve henley shirt with button placket",
    price: 49.99,
    image: [prod031_1],
    category: { gender: "men", season: "fall" },
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-02",
    bestSeller: true,
  },
  {
    _id: "prod032",
    name: "Cardigan",
    description: "Open-front cardigan for layering",
    price: 59.99,
    image: [prod032_1],
    category: { gender: "women", season: "all-season" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M", "L"],
    date: "2024-01-04",
    bestSeller: false,
  },
  {
    _id: "prod033",
    name: "Cargo Shorts",
    description: "Utility cargo shorts with multiple pockets",
    price: 44.99,
    image: [prod033_1],
    category: { gender: "men", season: "summer" },
    subCategory: "bottomwear",
    sizes: ["30", "32", "34", "36", "38"],
    date: "2023-12-15",
    bestSeller: true,
  },
  {
    _id: "prod034",
    name: "Peacoat",
    description: "Double-breasted wool peacoat",
    price: 189.99,
    image: [prod034_1],
    category: { gender: "unisex", season: "winter" },
    subCategory: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2023-11-25",
    bestSeller: false,
  },
  {
    _id: "prod035",
    name: "Turtleneck Sweater",
    description: "Warm turtleneck sweater for winter",
    price: 79.99,
    image: [prod035_1],
    category: { gender: "women", season: "winter" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M", "L"],
    date: "2023-12-01",
    bestSeller: true,
  },
  {
    _id: "prod036",
    name: "Khaki Pants",
    description: "Classic khaki pants for business casual",
    price: 69.99,
    image: [prod036_1],
    category: { gender: "men", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["30x30", "32x30", "34x30", "36x30"],
    date: "2024-01-26",
    bestSeller: false,
  },
  {
    _id: "prod037",
    name: "A-line Dress",
    description: "Flared A-line dress with sleeveless design",
    price: 75.99,
    image: [prod037_1],
    category: { gender: "women", season: "spring" },
    subCategory: "topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: "2024-01-28",
    bestSeller: true,
  },
  {
    _id: "prod038",
    name: "Windbreaker",
    description: "Lightweight windbreaker for outdoor activities",
    price: 64.99,
    image: [prod038_1],
    category: { gender: "unisex", season: "spring" },
    subCategory: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-29",
    bestSeller: false,
  },
  {
    _id: "prod039",
    name: "Button-Down Shirt",
    description: "Casual button-down shirt in plaid pattern",
    price: 54.99,
    image: [prod039_1],
    category: { gender: "men", season: "fall" },
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: "2024-01-30",
    bestSeller: true,
  },
  {
    _id: "prod040",
    name: "Legging Pants",
    description: "Stretchy legging pants with pockets",
    price: 49.99,
    image: [prod040_1, prod040_2, prod040_3],
    category: { gender: "women", season: "all-season" },
    subCategory: "bottomwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: "2024-01-31",
    bestSeller: false,
  },
];