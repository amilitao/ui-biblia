export class AbbrevDto {
  pt: string = "";
  en: string = "";
}

export class BookDto {
  abbrev: AbbrevDto = new AbbrevDto();
  author: string = "";
}
