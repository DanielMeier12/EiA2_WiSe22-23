namespace L04 {
    export interface Input {
        inputProduct: string;
        inputAmount: number;
        buy: boolean;
        done: boolean;
        inputComment: string;
        lastPurchase: string;
    }
    export let inputs: Input[] = [
        {
            inputProduct: "Kellogs",
            inputAmount: 1,
            buy: true,
            done: false,
            inputComment: "XXL Packung",
            lastPurchase: "10.10.2022"
        }
    ];
}