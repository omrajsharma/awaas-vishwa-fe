export const numberToCommaString = (number) => {
    // Convert the number to a string
    const numberString = number.toString();

    // Use regular expression to add commas every three digits from the end
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedNumber;
}