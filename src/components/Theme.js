import React, { useContext } from "react";

export const UserTheme = React.createContext();

const Theme = props => {
  const theme = useContext(UserTheme);

  return (
    <>
      <UserTheme.Provider value={"UserTheme value"}>
        <p>
          {props.title} {theme}
        </p>
      </UserTheme.Provider>
    </>
  );
};

export default Theme;
