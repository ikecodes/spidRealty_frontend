export interface AuthState {
  auth: {
    user: any;
    loading: boolean;
    token: "";
    data: {};
  };
}
export interface PropertyState {
  property: {
    properties: any;
    pagination: any;
    userProperties: any;
    loading: boolean;
    property: any;
  };
}

export interface ParamState {
  param: {
    stateSlug: string;
    regionSlug: string;
    categorySlug: string;
    page: number;
    limit: number;
  };
}
