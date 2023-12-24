export interface ITodo {
    title: string;
    description: string;
    isComplieted: boolean;
    isArchived: boolean;
    endDate: Date | number | string;
}