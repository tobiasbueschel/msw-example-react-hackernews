import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "./Home";

describe("Home", () => {
  let userData;

  beforeEach(() => {
    userData = {
      id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
      username: "john-maverick",
      firstName: "John",
      lastName: "Maverick",
    };
  });

  it("should show correct first name", () => {
    render(<Home userData={userData} />);
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("should show correct last name", () => {
    render(<Home userData={userData} />);
    expect(screen.getByText("Maverick")).toBeInTheDocument();
  });

  it("should show correct user ID", () => {
    render(<Home userData={userData} />);
    expect(
      screen.getByText("f79e82e8-c34a-4dc7-a49e-9fadc0979fda")
    ).toBeInTheDocument();
  });

  it("should show hackernews response", async () => {
    render(<Home userData={userData} />);
    expect(
      await screen.findByText(/just to see how hard it is to make /)
    ).toBeInTheDocument();
  });
});
