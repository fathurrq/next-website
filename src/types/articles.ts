export type CoverFormatKey = "large" | "small" | "thumbnail" | "medium";
export type CoverFormat = {
  url: string;
};
export type Cover = {
  documentId: string;
  formats: Record<CoverFormatKey, CoverFormat>;
};

export type Article = {
  documentId: string;
  title: string;
  description: string;
  cover: Cover;
};
