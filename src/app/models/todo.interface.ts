export interface ITodo {
    id: number;
    title: string;
    description: string;
    isComplieted: boolean;
    isArchived: boolean;
    endDate: Date | number | string;
    selected: boolean;
}