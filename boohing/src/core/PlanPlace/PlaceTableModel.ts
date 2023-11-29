import { AbstractPlanItem, AbstractPlanItemConstructor } from "./AbstractPlanItem";
import { PlanSeatPlace } from "./PlanSeatPlace";

interface PlanTableConstructor extends AbstractPlanItemConstructor {
  seatPlaces: PlanSeatPlace[]
}

export class PlanTable extends AbstractPlanItem {

  seatPlaces: PlanSeatPlace[]

    constructor({ id, orientation, position, form, seatPlaces }: PlanTableConstructor) {
      super({id, orientation, position, form})  
      this.seatPlaces = seatPlaces
    }

    public setSeatPlaces (newSeatPlaces: PlanSeatPlace[]) {
        this.seatPlaces = newSeatPlaces
    }
}

export class PlanBarTable extends AbstractPlanItem {

    seatPlaces: PlanSeatPlace[]

    constructor({ id, orientation, position, form, seatPlaces }: PlanTableConstructor) {
      super({id, orientation, position, form})  
      this.seatPlaces = seatPlaces
    }

    public setSeatPlaces (newSeatPlaces: PlanSeatPlace[]) {
        this.seatPlaces = newSeatPlaces
    }
}

export class PlanToiletTable extends AbstractPlanItem{}

export class PlanEntriesTable extends AbstractPlanItem{}

export class PlanWardrobeTable extends AbstractPlanItem{}