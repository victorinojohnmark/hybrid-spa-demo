export default class Helper {

    PHPeso = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'AFN',
    });

    camelCaseToTitleCase(input) {
        let titleCase = input.replace(/([A-Z])/g, ' $1');
        titleCase = titleCase.charAt(0).toUpperCase() + titleCase.slice(1).trim();
        
        return titleCase;
      }
    
}