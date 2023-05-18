
 export class AppExcaptions extends Error{
    constructor(message,name) {
        super(message);
        this.name = name;
    }
}
