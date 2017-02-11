import {Picture} from "./picture";

export class Country {
  name: string;
  states: State[];
}

export class State {
  name: string;
  cities: City[];
}

export class City {
  name: string;
  beaches: Beach[];
}

export class Beach {
  name: string;
  pictures: Picture[];
}
