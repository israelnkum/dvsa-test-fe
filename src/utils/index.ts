export const capitalize = (word: string) => {
    return word.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export const CompanyTypes: Record<string, string> = {
    HGV: "Heavy Goods Vehicle Company",
    LGV: "Light Goods Vehicle Company",
    PT: "Passenger Transport Company",
    MF: "Mixed Fleet Company",
}