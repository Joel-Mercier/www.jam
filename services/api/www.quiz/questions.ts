export interface Question {
  id: string;
  title: string;
  timeLimit: number;
  createdAt: string;
  updatedAt: string;
  questionType: QuestionType;
}

export interface QuestionType {
  id: string;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}