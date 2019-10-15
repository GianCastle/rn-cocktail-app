export interface IActionCreator {
    type: string;
    payload: any;
    loading?: boolean;
    drinks?: any[];
}