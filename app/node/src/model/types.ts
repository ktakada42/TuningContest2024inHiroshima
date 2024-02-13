// sessionテーブル
export interface Session {
  sessionId: string;
  userId: string;
  createdAt: Date | string; // mysqlからの取得時にstring型にする
}

export interface File {
  fileName: string;
  path: string;
}

// user一覧取得APIのレスポンス、マッチグループ作成APIのレスポンスで使用
export interface User {
  userId: string;
  userName: string;
  userIcon: {
    fileId: string;
    fileName: string;
  };
  officeName: string;
}

// ユーザー検索APIの検索対象
export type Target =
  | "userName"
  | "kana"
  | "mail"
  | "department"
  | "role"
  | "office"
  | "skill"
  | "goal";

// ユーザー検索APIで最後にソートするためにプロパティを追加
export interface SearchedUser extends User {
  kana: string;
  entryDate: Date | string;
}

// マッチグループ作成条件
export interface MatchGroupConfig {
  ownerId: string;
  matchGroupName: string;
  description: string;
  numOfMembers: number;
  departmentFilter: "onlyMyDepartment" | "excludeMyDepartment" | "none";
  officeFilter: "onlyMyOffice" | "excludeMyOffice" | "none";
  skillFilter: string[];
  neverMatchedFilter: boolean;
}

export interface MatchGroup {
  matchGroupId: string;
  matchGroupName: string;
  members: User[];
  status: "open" | "close";
  createdBy: string;
  createdAt: Date | string;
}

export interface MatchGroupDetail extends MatchGroup {
  description: string;
}

export interface UserForFilter extends User {
  departmentName: string;
  skillNames: string[];
}

export interface Owner extends User {
  officeId: string;
  departmentId: string;
}
