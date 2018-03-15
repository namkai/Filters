import React from "React/index";
import { mount, shallow } from "enzyme";
import ItinerariesList from "React/components/ItinerariesList/View";
import initialState from "Redux/modules/itineraries/initialState";

describe("ItinerariesList", () => {
  it("should render", () => {
    expect(shallow(<ItinerariesList itineraries={initialState} />));
  });
  it("should display a full list of Itineraries when not filtered", () => {
    const expected = initialState.length;
    const app = mount(<ItinerariesList itineraries={initialState} />);
    const actual = app.prop("itineraries").length;
    expect(actual).toEqual(expected);
  });
});
