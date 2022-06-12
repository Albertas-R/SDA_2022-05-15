/*
tikslas

treniruotis naudoti React realiose situacijose itraukiant paskaitose apzvelgtus konceptus:
- duomenu laikymo ir dalinimosi tarp komponentu budus: state, props, context, (galbut ref)
- komponentu kurima, aplikacijos kompozicija is komponentu
- React aplikacijos ir komponentu lifecycle ir jo panaudijima iskilusioms problemoms spresti: render phase, commit phase, useEffect hookas, (optional seni class lifecycle metodai, tiap pat memo, useMemo, useCallback)
- atskiru puslapiu kurimas ir routinimas tarp ju
- listu kurimas ir atvaizdavimas Reacte (masyvu mappinimas i komponentus, elementu key 'propsas')
- komponentu stilizavimas

uzduotis

sukurti svetaine su puslapiais:
- home page, kutiame butu titlas, ir about koks nors tekstas
- todos page
1 turi pateikti todos lista is https://jsonplaceholder.typicode.com/todos
2 turi tureti buttona, kuris leistu nustatyti listo orderinima pagal abecele
3 turi tureti buttona, kuris leisti isfiltruoti nepabaigtus (optional ir pabaigtus), bet turint galimybe nuimti filtra ir grizti prie visu, taip pat orderinimas turi veikti ir filtruojant
- theme settings page, kuriame galima butu pakeisti theme

visuose puslapiuose turi buti matoma navigacija virsuje, leidzianti judeti tarp ju

komponentai turi buti stilizuojami individualiai (bent dali stiliu imant is theme), o ne globaliam css faile. Globalus css gali buti naudojamas nustatyti defaultus arba stilizuoti body.


*/

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Header";

import Title from "./Title";
import ToDoList from "./ToDoList";
import Theme from "./Theme";

export const App = () => {
  const theme = useContext(UserTheme);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Title title="React App Title" text="2022-05-15" />}
          />
          <Route path="/todos" element={<ToDoList />} />
          <Route
            path="/theme"
            element={<Theme title="Theme Settings Page" />}
          />
        </Routes>
      </BrowserRouter>

      {/* <Title title="React App Title" text="2022-05-15" />
      <Button onClick={sortList}>Sort List</Button>
      <Button onClick={filterList}>Filter List</Button>
      <ToDo items={list} /> */}
    </div>
  );
};

// export default App;

/*
import { List } from "./List";
import { Button } from "./Button";

// https://reactjs.org/docs/react-api.html
// memo - for when you want to AVOID RENDERS when parent renders (usually)
// useCallback - used to remember a function through different renders
// useMemo - used to remember a value through different renders

export const App = () => {
  console.log("App rendered");

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      const todos = await res.json();

      setTodos(todos);
    })();
  }, []);

  const items = useMemo(
    () => todos.map(todo => ({ id: todo.id, text: todo.title })),
    [todos],
  );

  const incrementButton = useMemo(
    () => (
      <Button name="increment" onClick={() => setCount(count => count + 1)}>
        increment
      </Button>
    ),
    [setCount],
  );

  const decrement = useCallback(() => setCount(count => count - 1), [setCount]);

  return (
    <div>
      <p>count: {count}</p>
      {incrementButton}
      <Button name="decrement" onClick={decrement}>
        decrement
      </Button>
      <List items={items} />
    </div>
  );
};
*/
