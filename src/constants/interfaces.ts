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
    userProperties: any;
    loading: boolean;
    property: any;
  };
}
