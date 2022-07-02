export interface AuthState {
  auth: {
    user: any;
    loading: boolean;
    photoUpdateLoading: boolean;
    token: "";
    data: {};
  };
}
export interface PropertyState {
  property: {
    properties: any;
    similarProperties: any;
    pagination: any;
    userProperties: any;
    loading: boolean;
    firstLoading: boolean;
    property: any;
  };
}
export interface EnquiryState {
  enquiry: {
    enquiries: any;
    loading: boolean;
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

export interface AdminState {
  admin: {
    stats: any;
    agents: [];
    properties: [];
    articles: [];
    article: any;
    loading: boolean;
  };
}
