export interface ReqBodyPOST {
  title: string; // !!!! REQUIRED
  name: string; // !!!! REQUIRED
  category: string; // !!!! REQUIRED
  isbn: string; // !!!! REQUIRED
}

export interface ReqBodyDELETE {
  _id: string; // !!!! REQUIRED
}

export interface ReqBodyPATCH {
  _id: string; // !!!! REQUIRED
  title?: string;
  name?: string;
  category?: string;
  isbn?: string;
  isActive?: string;
}