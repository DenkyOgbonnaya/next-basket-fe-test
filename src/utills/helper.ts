export const cleanNumber = (number: string) => {
    if (String(number).includes(',')) {
      return String(number).split(',').join('');
    }
    return number;
  };

export const formatCurrency = (num: string | number) => {
    if (!num) return 0;
    const cleanNum = cleanNumber(num.toString());
    const numb = Number(cleanNum);
    return String(numb.toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  export const truncateWords = (word: string, length: number): string => {
    if (word.length <= length) return word;
  
    const truncateWord = `${word.substring(0, length)}`;
  
    return truncateWord.concat('...');
  };