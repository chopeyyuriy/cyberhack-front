export interface IGame {
  id: number;
  path: string;
  name_ru: string;
  name_en: string;
  description_ru: string;
  description_en: string;
  is_popular: boolean;
  price: number;
  sale: number;
  seo_title_ru: string;
  seo_title_en: string;
  seo_keywords_ru: string;
  seo_keywords_en: string;
  seo_description_ru: string;
  seo_description_en: string;
  icon: string;
  image: string;
  active: string;
}

export interface IGameStatistics {
  games_count: number;
  products_count: number;
}

export interface IProduct {
  id: number;
  path: string;
  name_ru: string;
  name_en: string;
  description_ru: string;
  description_en: string;
  video?: string;
  image: string;
  price: number;
  status?: number;
  game_id: number;
  seo_title_ru: string;
  seo_title_en: string;
  seo_keywords_ru: string;
  seo_keywords_en: string;
  seo_description_ru: string;
  seo_description_en: string;
  game: any;
  images: string[];
  functions: any[];
  rates: any[];
  requirements: any[];
  instruction: string;
  active: boolean;
}

export interface IProductRequirement {
  id: number;
  category: string;
  type_id: number;
  type: IProductRequirementType;
  text_ru: string;
  text_en: string;
}

export interface IProductRequirementType {
  id: number;
  label_ru: string;
  label_en: string;
  icon: string;
  category: string;
}

export interface IProductRate {
  id: number;
  region: string;
  period: string;
  sale: number;
  cost: number;
  currency: string;
  url: string;
  is_digiseller_available: boolean;
  is_freekassa_available: boolean;
  is_webmoney_available: boolean;
}

export interface IProductFunction {
  name_ru: string;
  name_en: string;
  icon_id: number;
  icon: string;
  content_ru: string;
  content_en: string;
}
