export interface ReqBodyPOST {
  title: string; // !!!! REQUIRED
  name: string; // !!!! REQUIRED
  category: string; // !!!! REQUIRED
  isbn: string; // !!!! REQUIRED
}

export interface ReqBodyPATCH {
  title?: string;
  name?: string;
  category?: string;
  isbn?: string;
  isActive?: boolean;
}