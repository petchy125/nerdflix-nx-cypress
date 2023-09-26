// hero.spec.ts

import React from "react";
import { mount } from "@cypress/react";
import Hero from "./Hero";

// Define mock data for testing
interface ShowData {
  title: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
  backdrop_path: string;
}

const showData: ShowData = {
  title: "Test Show",
  vote_average: 7.5,
  first_air_date: "2023-09-30",
  overview: "This is a test show overview",
  backdrop_path: "/test-backdrop.jpg",
};

describe("Hero Component", () => {
  it("should render a 'show' type hero correctly", () => {
    mount(<Hero type="show" show={showData} />);

    // Ensure that the hero section is rendered with the show details
    cy.get("h1").should("contain.text", showData.title);
    cy.get(".text-green-600").should(
      "contain.text",
      `${(showData.vote_average * 10).toFixed(2)}% Match`
    );
    cy.get(".text-gray-300").should("contain.text", showData.first_air_date);
    cy.get(".line-clamp-4").should("contain.text", showData.overview);
  });

  it("should open the modal when clicking 'Play' button", () => {
    mount(<Hero type="show" show={showData} />);

    // Click the 'Play' button
    cy.get("button[aria-label='Play video']").click();

    // Ensure that the modal is opened
    cy.get('[data-testid="modal"]').should("be.visible");
  });

  it("should open the modal when clicking 'More Info' button", () => {
    mount(<Hero type="show" show={showData} />);

    // Click the 'More Info' button
    cy.get("button[aria-label='Open show\'s details modal']").click();

    // Ensure that the modal is opened
    cy.get('[data-testid="modal"]').should("be.visible");
  });

  // Add more test cases as needed for the 'show' type hero

  it("should render a 'static' type hero correctly", () => {
    const src = "/test-static-image.jpg";

    mount(
      <Hero type="static" src={src}>
        <p>This is a static hero content.</p>
      </Hero>
    );

    // Ensure that the static hero section is rendered with the provided content
    cy.contains("This is a static hero content.");
  });

  // Add more test cases as needed for the 'static' type hero
});
