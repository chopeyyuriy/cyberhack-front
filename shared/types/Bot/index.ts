export interface IBotProblem {
  id: number;
  name_ru: string;
  name_en: string;
  text_ru: string;
  text_en: string;
}

export interface IBotProblemSolution {
  id: number;
  name_ru: string;
  name_en: string;
  text_ru: string;
  text_en: string;
  link: string;
  bot_problem_id: number;
}
